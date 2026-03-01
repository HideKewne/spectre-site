import type { Metadata } from 'next'
import './globals.css'
import PageTransition from '@/components/PageTransition'

export const metadata: Metadata = {
  title: 'SPECTRE - Shop The Future',
  description: 'Y2K Fashion & Pixel Gear',
  metadataBase: new URL('https://spectreuniverse.com'),
  openGraph: {
    title: 'SPECTRE - Shop The Future',
    description: 'Y2K Fashion & Pixel Gear',
    url: 'https://spectreuniverse.com',
    siteName: 'SPECTRE',
    images: [
      {
        url: '/spectre-logo.png',
        width: 1200,
        height: 630,
        alt: 'SPECTRE Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SPECTRE - Shop The Future',
    description: 'Y2K Fashion & Pixel Gear',
    images: ['/spectre-logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Critical CSS for iris transition - MUST be inline to load before external stylesheet */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html.iris-entering .page-transition {
                clip-path: circle(0% at 50vw 50vh);
                visibility: hidden;
              }
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // On initial load, check if we should play opening animation
                if (sessionStorage.getItem('iris-transitioning') === 'true') {
                  document.documentElement.classList.add('iris-entering');
                }

                // Handle bfcache restoration (runs before React loads)
                window.addEventListener('pageshow', function(e) {
                  if (e.persisted) {
                    // Page was restored from bfcache - reset everything
                    sessionStorage.removeItem('iris-transitioning');
                    document.documentElement.classList.remove('iris-entering');
                    var content = document.querySelector('.page-transition');
                    if (content) {
                      // Cancel any active animations (fill: forwards keeps element hidden!)
                      if (content.getAnimations) {
                        content.getAnimations().forEach(function(anim) { anim.cancel(); });
                      }
                      content.style.clipPath = '';
                      content.style.visibility = '';
                    }
                  }
                });
              })();
            `,
          }}
        />
      </head>
      <body>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}
