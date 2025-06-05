// next.config.js

/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

// IMPORTANT: Replace 'your-repo-name' with the actual name of your repository
if (isGithubActions) {
  const repo = 'Programming_Portfolio'; 
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  // Add this line to enable static exports
  output: 'export',

  reactStrictMode: true,
  assetPrefix: assetPrefix,
  basePath: basePath,
  
  // Optional: If you are using Next.js 14+ and have images in your public/img folder,
  // you might need to add this to disable image optimization which is not supported in static exports.
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;