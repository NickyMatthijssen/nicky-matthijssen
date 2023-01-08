const strapiUrlParts = process.env.NEXT_PUBLIC_STRAPI_URL.split(":");
const protocol = strapiUrlParts[0];
const hostname = strapiUrlParts[1]?.replace("//", "");
const port = strapiUrlParts[2] ?? null;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol,
        hostname,
        port,
      },
    ],
  },
  exportPathMap: async function (
    defaultPatMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/portfolio": { page: "/portfolio" },
    };
  },
};

module.exports = nextConfig;
