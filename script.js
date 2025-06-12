const TARGET_URL = 'https://ai-trainer-payment.netlify.app'; // or Netlify URL

async function handleRequest(request) {
  const url = new URL(request.url);
  const path = url.pathname;

  // Rewrite requests to the subpath
  if (path.startsWith(TARGET_URL)) {
    const newUrl = new URL(newPath, TARGET_URL);
    return fetch(newUrl, request);
  }

  // Optional: Fallback for root domain
  return fetch('https://cornerroom.co.za', request);
}

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});