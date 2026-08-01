/** @type {import('next').NextConfig} */
const SUPPORT_URL = "https://botaix--ashy.vercel.app/";
const PRIVACY_URL = "https://botaix--ashy.vercel.app/Privacy.html";

module.exports = {
  async redirects() {
    return [
      { source: "/support", destination: SUPPORT_URL, permanent: false },
      { source: "/privacy", destination: PRIVACY_URL, permanent: false },
    ];
  },
  async headers() {
    return [
      {
        // Apple fetches this file directly and rejects anything that isn't
        // application/json. No extension, no redirect, no caching surprises.
        source: "/.well-known/apple-app-site-association",
        headers: [
          { key: "Content-Type", value: "application/json" },
          { key: "Cache-Control", value: "no-cache" },
        ],
      },
    ];
  },
};
