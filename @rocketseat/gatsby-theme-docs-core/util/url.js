function normalizeBasePath(basePath, link) {
  return `/${basePath}/${link}`.replace(/\/\/+/g, `/`);
}

function isExternalUrl(url) {
  return new RegExp('^((https?:)?//)', 'i').test(url);
}

module.exports = { normalizeBasePath, isExternalUrl };
