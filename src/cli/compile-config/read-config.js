const fs = require("fs");
const path = require("path");
const stripJSONComments = require("strip-json-comments");

module.exports = pConfigFileName => {
  if ([".js", ""].includes(path.extname(pConfigFileName))) {
    /* eslint node/global-require:0, security/detect-non-literal-require:0, import/no-dynamic-require:0 */
    return require(pConfigFileName);
  }

  return JSON.parse(
    stripJSONComments(fs.readFileSync(pConfigFileName, "utf8"))
  );
};
