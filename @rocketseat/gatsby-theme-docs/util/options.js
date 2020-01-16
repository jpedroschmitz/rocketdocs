module.exports = themeOptions => {
  const baseMetadata = {};

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
