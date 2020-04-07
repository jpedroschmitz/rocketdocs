module.exports = themeOptions => {
  const basePath = themeOptions.basePath || `/`;
  const docsPath = themeOptions.docsPath || `docs`;
  const baseDir = themeOptions.baseDir || ``;
  const { githubUrl } = themeOptions;

  return {
    basePath,
    docsPath,
    baseDir,
    githubUrl,
  };
};
