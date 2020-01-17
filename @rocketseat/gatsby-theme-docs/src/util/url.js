function isExternalUrl(url) {
  return new RegExp('^((https?:)?//)', 'i').test(url);
}

function normalizeBasePath(basePath, link) {
  return `/${basePath}/${link}`.replace(/\/\/+/g, `/`);
}

module.exports = { isExternalUrl, normalizeBasePath };
