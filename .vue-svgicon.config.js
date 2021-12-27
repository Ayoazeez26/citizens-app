const path = require("path");
const svgFilePaths = ["./src/assets/dashicons"].map((v) => path.resolve(v));
const tagName = "svg-icon";

module.exports = {
  tagName,
  svgFilePath: svgFilePaths,
  svgoConfig: {},
  pathAlias: {},
  transformAssetUrls: {},
};
