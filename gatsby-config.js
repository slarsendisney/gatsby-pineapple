const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `GATSBY PINEAPPLE`,
    description: `A boilerplate for MDX by SLD`,
    author: `@sld`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-theme-mdx-deck`,
      options: {
        contentPath: `decks`,
        basePath: `/slides`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/wizard.png`
      }
    },
    `gatsby-plugin-offline`
  ]
};
