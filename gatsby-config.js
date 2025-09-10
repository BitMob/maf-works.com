/**
 * @type {import('gatsby').GatsbyConfig}
 */

const contentDir = `${__dirname}/src/content`;

module.exports = {
  siteMetadata: {
    title: `designed by maf-works.com`,
    description: `about maf-works.com`,
    author: `maf-works.com`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `works`,
        path: `${contentDir}/works`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `intros`,
        path: `${contentDir}/intros`,
      },
    },
  ],
};
