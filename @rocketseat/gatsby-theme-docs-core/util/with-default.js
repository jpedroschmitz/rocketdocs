module.exports = (themeOptions) => {
  const basePath = themeOptions.basePath || `/`;
  const configPath = themeOptions.configPath || `config`;
  const docsPath = themeOptions.docsPath || `docs`;
  const dataPath = themeOptions.dataPath || `data`;
  const branch = themeOptions.branch || `main`;
  const baseDir = themeOptions.baseDir || ``;
  const withMdx =
    themeOptions.withMdx === undefined ? true : themeOptions.withMdx;
  const { githubUrl, repositoryUrl = '' } = themeOptions;

  return {
    basePath,
    configPath,
    docsPath,
    dataPath,
    baseDir,
    githubUrl,
    repositoryUrl,
    withMdx,
    branch,
  };
};
