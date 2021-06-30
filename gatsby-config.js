require('dotenv').config({ path: `.env` });

module.exports = {
  siteMetadata: {
    author: `Ayush Pathak`,
    title: `Randomlang`,
    description: `Official site for randomlang`,
    siteUrl: `https://randomlang.aysh.me/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-emotion#options
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Randomlang`,
        short_name: `Randomlang`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/icon/logo.png`,
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
