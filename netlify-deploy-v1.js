const https = require('https');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const SITE_ID = '4fd9c378-378a-46de-bf36-e520500c10eb';
const TOKEN = 'nfp_zfdfQipcZgBJxqq967RCmY9NtriduLLm2388';
const OUT_DIR = path.join(__dirname, 'out');

function getAllFiles(dir, baseDir = dir) {
  const files = {};
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      Object.assign(files, getAllFiles(fullPath, baseDir));
    } else {
      const relativePath = '/' + path.relative(baseDir, fullPath).split(path.sep).join('/');
      const content = fs.readFileSync(fullPath);
      const sha1 = crypto.createHash('sha1').update(content).digest('hex');
      files[relativePath] = sha1;
    }
  }
  return files;
}

async function makeRequest(options, body = null) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(data) });
        } catch {
          resolve({ status: res.statusCode, data });
        }
      });
    });
    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

async function deploy() {
  console.log('Scanning files...');
  const files = getAllFiles(OUT_DIR);
  console.log('Found', Object.keys(files).length, 'files');

  console.log('Creating deploy...');
  const createRes = await makeRequest({
    hostname: 'api.netlify.com',
    path: '/api/v1/sites/' + SITE_ID + '/deploys',
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + TOKEN,
      'Content-Type': 'application/json'
    }
  }, JSON.stringify({ files }));

  if (createRes.status !== 200) {
    console.log('Error creating deploy:', createRes.data);
    return;
  }

  const deploy = createRes.data;
  console.log('Deploy ID:', deploy.id);
  console.log('Required files:', deploy.required?.length || 0);

  if (deploy.required && deploy.required.length > 0) {
    console.log('Uploading', deploy.required.length, 'files...');

    const sha1ToPath = {};
    for (const [filePath, hash] of Object.entries(files)) {
      sha1ToPath[hash] = filePath;
    }

    let uploaded = 0;
    for (const sha1 of deploy.required) {
      const filePath = sha1ToPath[sha1];
      if (!filePath) continue;

      const fullPath = path.join(OUT_DIR, filePath);
      const content = fs.readFileSync(fullPath);

      const uploadRes = await makeRequest({
        hostname: 'api.netlify.com',
        path: '/api/v1/deploys/' + deploy.id + '/files' + filePath,
        method: 'PUT',
        headers: {
          'Authorization': 'Bearer ' + TOKEN,
          'Content-Type': 'application/octet-stream'
        }
      }, content);

      if (uploadRes.status === 200) {
        uploaded++;
        process.stdout.write('.');
      } else {
        process.stdout.write('x');
      }
    }
    console.log('\nUploaded', uploaded, 'files');
  }

  console.log('\nDeploy URL:', deploy.ssl_url);
}

deploy().catch(console.error);
