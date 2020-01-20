module.exports = themeOptions => {
  const baseMetadata = {
    metadata: {
      siteTitle: `Rocketseat Gatsby Themes`,
      siteTitleAlt: `Rocketseat Gatsby Themes`,
      siteTitleShort: `Rocketseat Gatsby Themes`,
      siteDescription: `Discover free Gatsby themes, plugins and templates created with love by Rocketseat.`,
      siteUrl: `https://gatsby-theme-rocketseat.github.io`,
      siteAuthor: `@rocketseat`,
      siteName: `Rocketseat Gatsby Themes`,
      siteImage: `/banner.png`,
      siteLanguage: `en_us`,
      themeColor: `#7159c1`,
      footer: `Created with <3`,
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
