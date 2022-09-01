const build = require('../_data/build.js');

module.exports = function getUrl(url) {
  console.log(build.dataUrl)
  return "/" + url.split(build.dataUrl)[1];
}
