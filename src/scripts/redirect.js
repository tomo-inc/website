// src/scripts/redirect.js
document.addEventListener('DOMContentLoaded', (event) => {
  const pathname = window.location.pathname;
  const username = pathname.substring(1);
  const ua = window.navigator.userAgent.toLowerCase();

  let storeUrl;
  
  if (/iphone|ipad|ipod/.test(ua)) {
    storeUrl = `https://apps.apple.com/app/${username}`;
  } else if (/android/.test(ua)) {
    storeUrl = `https://play.google.com/store/apps/details?id=${username}`;
  } else {
    storeUrl = '/';
  }

  window.location.href = storeUrl;
});
