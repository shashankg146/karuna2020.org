module.exports = {
  siteMetadata: {
    title: "Karuna 2020",
    description: "Website for the Karuna 2020 project.",
    author: "Team Karuna 2020",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Karuna 2020",
        short_name: "Karuna",
        start_url: "/",
        background_color: "#f60000",
        theme_color: "#f60000",
        display: "minimal-ui",
        icon: "src/images/logo/title-logo.svg",
      },
    },
    "gatsby-plugin-offline",
  ],
}
