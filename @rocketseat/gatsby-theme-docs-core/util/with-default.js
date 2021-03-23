module.exports = (themeOptions) => {
  const basePath = themeOptions.basePath || `/`;
  const configPath = themeOptions.configPath || `config`;
  const docsPath = themeOptions.docsPath || `docs`;
  const branch = themeOptions.branch || `main`;
  const baseDir = themeOptions.baseDir || ``;
  const withMdx = themeOptions.withMdx || true;
  const { githubUrl, repositoryUrl = '' } = themeOptions;

  return {
    basePath,
    configPath,
    docsPath,
    baseDir,
    githubUrl,
    repositoryUrl,
    withMdx,
    branch,
  };
};
