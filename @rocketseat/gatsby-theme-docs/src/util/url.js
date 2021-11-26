function isExternalUrl(url) {
  return /^((https?:)?\/\/)/i.test(url);
}

module.exports = { isExternalUrl };
