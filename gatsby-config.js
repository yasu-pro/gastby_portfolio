const path = require("path")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    {
      singularName: "portfolio",
      queryParams: {
        allStrapiPortfolio: {
          edges: {
            node: {
              id:"*",
              image: {
                height:"*",
                strapi_id:"*",
                url:"*",
                width:"*",
              },
              description: {
                populate: {
                  description:"*",
                  id:"*",
                },
                medias: {
                  url:"*",
                  src:"*",
                },
              },
              portfolio_categories: {
                name:"*",
              },
              title:"*",
            },
          },
        },
      },
    },
  ],
  singleTypes: [],
  remoteFileHeaders: {
    Referer: "http://127.0.0.1:1337",
  },
};

module.exports = {
  siteMetadata: {
    siteTitle: `Yasu's Portfolio`,
    siteTitleAlt: `Yasu's Portfolio`,
    siteHeadline: `Yasu's Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
    siteDescription: `collection of works`,
    siteImage: `/banner.jpg`,
    siteLanguage: `ja`,
    author: `yasu`,
    basePath: "/",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: path.join(__dirname, "src", "sections"),
      },
    },
    {
      resolve: `gatsby-plugin-static-folders`,
      options: {
        folders: [
          `${__dirname}/static`,
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
      },
    },

    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
  ],
}
