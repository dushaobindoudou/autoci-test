module.exports = {
  ci: true,
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    // if you dont want to publish on npm registry, you can set npmPublish to false
    ['@semantic-release/npm'],
    '@semantic-release/changelog',
    '@semantic-release/git',
  ],
};
