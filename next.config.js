/** @type {import('next').NextConfig} */
module.exports = {
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
