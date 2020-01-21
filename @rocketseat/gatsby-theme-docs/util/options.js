module.exports = themeOptions => {
  const baseMetadata = {
    metadata: {
      siteTitle: `Rocketseat Gatsby Themes`,
      defaultTitle: `Rocketseat Gatsby Themes`,
      siteTitleShort: `Rocketseat Gatsby Themes`,
      siteDescription: `Discover free Gatsby themes, plugins and templates created with love by Rocketseat.`,
      siteUrl: `https://rocketseat.github.io/gatsby-theme-rocketseat/`,
      siteAuthor: `@rocketseat`,
      siteImage: `/banner.png`,
      siteLanguage: `en`,
      themeColor: `#7159c1`,
      footer: false,
    },
  };

  const basePath = themeOptions.basePath || `/`;
  const configPath = themeOptions.configPath || `config`;
  const docsPath = themeOptions.docsPath || `docs`;
  const siteMetadata = themeOptions.metadata || baseMetadata;

  return {
    basePath,
    configPath,
    docsPath,
    siteMetadata,
  };
};
