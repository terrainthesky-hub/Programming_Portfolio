// next.config.js
/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  // replace 'your-repo-name' with the name of your repository
  const repo = 'your-repo-name'
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: assetPrefix,
  basePath: basePath,
};

module.exports = nextConfig;