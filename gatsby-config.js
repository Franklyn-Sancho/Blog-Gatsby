module.exports = {
  siteMetadata: {
    title: "blog",
    description: "site tecno",
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-tranformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      option: {
        name: 'posts',
        path: `${__dirname}/content/posts`
      }
    }
  ],
};
