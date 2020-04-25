const siteConfig = require("./site-config")

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: siteConfig.siteMetadata,
}
