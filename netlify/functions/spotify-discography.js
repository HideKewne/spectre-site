// Spotify Discography Netlify Function
// Uses curl to scrape public Spotify pages (no API key needed)
// Cached at CDN level for 1 hour

const { exec } = require("child_process");
const { promisify } = require("util");
const execAsync = promisify(exec);

// --- Artist Configuration ---
const ARTISTS = {
  ACE: "1rP6LgofyPuY8P55Ng4i5K",
  CROW: "4HTu5eO9Lz6rhTCLq9Z5oQ",
  "LOUIS G": "6Vv28M9Ng8zG9xIjMl8dBr",
  YC: "4SdEZ7UKZQWiPKQE2r21JP",
};

// Albums that may not appear on artist pages (older releases, EPs)
const EXTRA_ALBUM_IDS = [
  "7HIf23PUmXoqp3kIzlw0rm", // WWW - ACE EP
];

// Hardcoded entries for releases where our artist was credited under a wrong profile
const MANUAL_ALBUMS = [
  {
    id: "6F1hxCis0oSYSjnRsHqJrk",
    title: "RUN",
    category: "FEATURES",
    artist: "DWINNA",
    year: "2025",
    coverImage: "https://i.scdn.co/image/ab67616d0000b273c7cd8df95a05bcfa88cd222c",
    tracks: [{ number: 1, title: "Run (feat. ACE)", duration: "2:07" }],
    spotifyUrl: "https://open.spotify.com/track/6F1hxCis0oSYSjnRsHqJrk",
  },
];

// Albums to always exclude (legal/technical reasons)
const BLOCKED_ALBUM_IDS = new Set([
  "4xVt9QvIhJVghwbW0KHX5p", // NESSTY WAV'S VOLUME 1
]);

const ARTIST_IDS = new Set(Object.values(ARTISTS));

// --- Helpers ---

function getArtistName(artistId) {
  for (const [name, id] of Object.entries(ARTISTS)) {
    if (id === artistId) return name;
  }
  return "";
}

function secondsToTime(secs) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function decodeHtmlEntities(str) {
  return str
    .replace(/&#[xX]27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"');
}

async function curlFetch(url) {
  try {
    const { stdout } = await execAsync(
      `curl -sS --max-time 6 -H "User-Agent: Mozilla/5.0" "${url}"`,
      { timeout: 8000, maxBuffer: 1024 * 1024 }
    );
    return stdout;
  } catch {
    return "";
  }
}

// --- Step 1: Get album IDs from artist page ---

async function getAlbumIdsForArtist(artistId) {
  const html = await curlFetch(
    `https://open.spotify.com/artist/${artistId}`
  );
  if (!html) return [];

  const ids = new Set();
  const regex = /album\/([a-zA-Z0-9]{22})/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    ids.add(match[1]);
  }
  return Array.from(ids);
}

// --- Step 2: Get track info from track page ---

async function getTrackInfo(trackUrl) {
  const html = await curlFetch(trackUrl);
  if (!html) return { title: "", duration: "", artistIds: [] };

  const titleMatch = html.match(
    /<meta\s+property="og:title"\s+content="([^"]*)"/
  );
  const durationMatch = html.match(
    /<meta\s+name="music:duration"\s+content="(\d+)"/
  );

  // Extract all artist IDs from this track
  const artistIdRegex = /<meta\s+name="music:musician"\s+content="https:\/\/open\.spotify\.com\/artist\/([^"]*)"/g;
  const artistIds = [];
  let aMatch;
  while ((aMatch = artistIdRegex.exec(html)) !== null) {
    artistIds.push(aMatch[1]);
  }

  return {
    title: decodeHtmlEntities(titleMatch?.[1] || ""),
    duration: durationMatch ? secondsToTime(parseInt(durationMatch[1])) : "",
    artistIds,
  };
}

// --- Step 3: Get album details ---

async function getAlbumDetails(albumId, sourceArtistId) {
  const html = await curlFetch(
    `https://open.spotify.com/album/${albumId}`
  );
  if (!html) return null;

  const titleMatch = html.match(
    /<meta\s+property="og:title"\s+content="([^"]*)"/
  );
  const descMatch = html.match(
    /<meta\s+property="og:description"\s+content="([^"]*)"/
  );
  const imgMatch = html.match(
    /<meta\s+property="og:image"\s+content="([^"]*)"/
  );
  const dateMatch = html.match(
    /<meta\s+name="music:release_date"\s+content="([^"]*)"/
  );
  const artistUrlMatch = html.match(
    /<meta\s+name="music:musician"\s+content="https:\/\/open\.spotify\.com\/artist\/([^"]*)"/
  );

  const rawTitle = decodeHtmlEntities(titleMatch?.[1] || "");
  const title = rawTitle.split(" - ")[0]?.trim() || rawTitle;
  const description = decodeHtmlEntities(descMatch?.[1] || "");
  const descParts = description.split(" \u00B7 ");
  const coverImage = imgMatch?.[1] || "";
  const year = dateMatch?.[1]?.substring(0, 4) || "";
  const primaryArtistId = artistUrlMatch?.[1] || "";
  const typeFromDesc = descParts[1]?.toLowerCase()?.trim() || "";

  // Get track URLs
  const trackUrlRegex = /<meta\s+name="music:song"\s+content="([^"]*)"/g;
  const trackUrls = [];
  let trackMatch;
  while ((trackMatch = trackUrlRegex.exec(html)) !== null) {
    trackUrls.push(trackMatch[1]);
  }

  // Categorize
  const isOurArtist = ARTIST_IDS.has(primaryArtistId);
  let category;
  if (!isOurArtist) {
    category = "FEATURES";
  } else if (typeFromDesc === "single" && trackUrls.length <= 1) {
    category = "SINGLES";
  } else if (trackUrls.length <= 6) {
    category = "EPs";
  } else {
    category = "ALBUMS";
  }

  // For singles (1 track): use album title, skip track fetch
  let tracks;
  if (category !== "FEATURES" && trackUrls.length <= 1) {
    // Single by our artist — just use the title
    tracks = [{ number: 1, title, duration: "" }];
  } else if (category === "FEATURES") {
    // FEATURE: fetch all tracks but only keep ones where a SPECTRE artist appears
    const trackResults = await Promise.all(
      trackUrls.map((url) => getTrackInfo(url))
    );
    let trackNum = 0;
    tracks = trackResults
      .filter((info) => info.artistIds.some((id) => ARTIST_IDS.has(id)))
      .map((info) => {
        // Find which SPECTRE artist(s) appear on this track
        const featuredNames = info.artistIds
          .filter((id) => ARTIST_IDS.has(id))
          .map((id) => getArtistName(id))
          .filter(Boolean);
        const featTag = featuredNames.length > 0
          ? ` (feat. ${featuredNames.join(", ")})`
          : "";
        return {
          number: ++trackNum,
          title: (info.title || "Unknown") + featTag,
          duration: info.duration,
        };
      });
    // If no tracks matched (couldn't detect artists), skip this release entirely
    if (tracks.length === 0) return null;
  } else {
    // Multi-track album/EP by our artist — fetch all tracks
    const trackResults = await Promise.all(
      trackUrls.map((url) => getTrackInfo(url))
    );
    tracks = trackResults.map((info, i) => ({
      number: i + 1,
      title: info.title || `Track ${i + 1}`,
      duration: info.duration,
    }));
  }

  let displayArtist = isOurArtist
    ? getArtistName(primaryArtistId)
    : descParts[0]?.trim() || getArtistName(sourceArtistId);
  if (!displayArtist) displayArtist = getArtistName(sourceArtistId);

  return {
    id: albumId,
    title: title.toUpperCase(),
    category,
    artist: displayArtist.toUpperCase(),
    year,
    coverImage, // Spotify CDN URL — no disk storage
    tracks,
    spotifyUrl: `https://open.spotify.com/album/${albumId}`,
  };
}

// --- Main Handler ---

exports.handler = async (event) => {
  try {
    // Step 1: Gather unique album IDs from all artist pages (parallel)
    const allAlbumIds = new Map(); // albumId -> sourceArtistId

    const artistEntries = Object.entries(ARTISTS);
    const discResults = await Promise.all(
      artistEntries.map(async ([name, id]) => ({
        artistId: id,
        albumIds: await getAlbumIdsForArtist(id),
      }))
    );

    for (const { artistId, albumIds } of discResults) {
      for (const albumId of albumIds) {
        if (!allAlbumIds.has(albumId) && !BLOCKED_ALBUM_IDS.has(albumId)) {
          allAlbumIds.set(albumId, artistId);
        }
      }
    }

    // Add known extra albums
    for (const extraId of EXTRA_ALBUM_IDS) {
      if (!allAlbumIds.has(extraId)) {
        allAlbumIds.set(extraId, ARTISTS.ACE); // default source
      }
    }

    // Step 2: Fetch all album details in parallel
    const entries = Array.from(allAlbumIds.entries());
    const albumResults = await Promise.all(
      entries.map(([albumId, sourceArtistId]) =>
        getAlbumDetails(albumId, sourceArtistId)
      )
    );

    const albums = albumResults.filter(
      (a) => a !== null && a.tracks.length > 0
    );

    // Add hardcoded manual entries (artist credited under wrong profile)
    const existingIds = new Set(albums.map((a) => a.id));
    for (const manual of MANUAL_ALBUMS) {
      if (!existingIds.has(manual.id)) {
        albums.push(manual);
      }
    }

    // Step 3: Sort newest first
    albums.sort((a, b) => {
      const yearDiff = parseInt(b.year || "0") - parseInt(a.year || "0");
      if (yearDiff !== 0) return yearDiff;
      return a.title.localeCompare(b.title);
    });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=300, max-age=60",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        albums,
        artistCount: artistEntries.length,
        fetchedAt: new Date().toISOString(),
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: error.message, albums: [] }),
    };
  }
};
