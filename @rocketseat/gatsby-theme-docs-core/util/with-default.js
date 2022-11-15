module.exports = (themeOptions) => {
  const basePath = themeOptions.basePath || `/`;
  const configPath = themeOptions.configPath || `config`;
  const docsPath = themeOptions.docsPath || `docs`;
  const yamlFilesPath = themeOptions.yamlFilesPath || `yamlFiles`;
  const branch = themeOptions.branch || `main`;
  const baseDir = themeOptions.baseDir || ``;
  const withMdx =
    themeOptions.withMdx === undefined ? true : themeOptions.withMdx;
  const gatsbyRemarkPlugins = themeOptions.gatsbyRemarkPlugins || [];

  const { githubUrl, repositoryUrl = '' } = themeOptions;

  return {
    basePath,
    configPath,
    docsPath,
    yamlFilesPath,
    baseDir,
    githubUrl,
    repositoryUrl,
    withMdx,
    branch,
    gatsbyRemarkPlugins,
  };
};
