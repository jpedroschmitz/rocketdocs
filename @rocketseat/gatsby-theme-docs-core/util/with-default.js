module.exports = themeOptions => {
  const basePath = themeOptions.basePath || `/`;
  const configPath = themeOptions.configPath || `config`;
  const docsPath = themeOptions.docsPath || `docs`;

  return {
    basePath,
    configPath,
    docsPath,
  };
};
