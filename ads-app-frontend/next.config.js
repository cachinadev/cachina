/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: new URL(process.env.NEXT_PUBLIC_API_BASE_URL).protocol.replace(":", ""), // Extract protocol (http/https)
          hostname: new URL(process.env.NEXT_PUBLIC_API_BASE_URL).hostname, // Extract hostname
          port: new URL(process.env.NEXT_PUBLIC_API_BASE_URL).port || "", // Extract port if exists
          pathname: "/uploads/**", // Adjust if needed
        },
      ],
    },
  };

  module.exports = {
    images: {
      domains: ["192.168.18.31", "cachina.pe"], // Add external domains here
    },
  };
  
  
  module.exports = nextConfig;
  