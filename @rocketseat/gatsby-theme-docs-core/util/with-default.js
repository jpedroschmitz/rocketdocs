module.exports = themeOptions => {
  const basePath = themeOptions.basePath || `/`;
  const configPath = themeOptions.configPath || `config`;
  const docsPath = themeOptions.docsPath || `docs`;
  const branch = themeOptions.branch || `master`;
  const baseDir = themeOptions.baseDir || ``;
  const { githubUrl, withMdx = true } = themeOptions;

  return {
    basePath,
    configPath,
    docsPath,
    baseDir,
    githubUrl,
    withMdx,
    branch,
  };
};
