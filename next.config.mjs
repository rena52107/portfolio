/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  
  // Webpack configuration for SVGs
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
