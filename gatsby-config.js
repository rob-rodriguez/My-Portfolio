/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Robert Rodriguez - Website Design and Development in Los Angeles`,
    description: `Robert Rodriguez is a self-taught web designer and developer with 15+ years of experience crafting responsive, accessible, and user-focused websites. From strategy to design, development, and support. He builds tailored digital solutions for businesses and organizations of all sizes.`,
    siteUrl: `https://www.robertrodriguez.io`
  },
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png",
        name: `Robert Rodriguez - Website Design and Development in Los Angeles`,
        short_name: `Robert Rodriguez`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#16181A`,
        display: `standalone`,
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-PNC393N016", // Google Analytics / GA
        ],
      }
    },
  ]
};