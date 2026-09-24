// Pings IndexNow (Bing, and other participating search engines) with the site's URLs.
// Run manually after a content change: node scripts/submit-indexnow.js
const SITE_URL = 'https://www.madebyforma.nl';
const INDEXNOW_KEY = 'da9e223a5bd41bc0bceb938f5d8ddb40';

const paths = [
  '/',
  '/webdesign',
  '/maatwerk-software',
  '/seo',
  '/webdesign-middelburg',
  '/webdesign-vlissingen',
  '/webdesign-goes',
  '/webdesign-zeeland',
  '/contact',
  '/privacy',
];

async function submit() {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: new URL(SITE_URL).host,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: paths.map((path) => `${SITE_URL}${path}`),
    }),
  });

  console.log(`IndexNow submit: ${res.status} ${res.statusText}`);
  if (!res.ok) {
    console.error(await res.text());
    process.exitCode = 1;
  }
}

submit();
