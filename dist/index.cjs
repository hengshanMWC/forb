var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.js
var forb_exports = {};
__export(forb_exports, {
  getPackagesDir: () => getPackagesDir
});
module.exports = __toCommonJS(forb_exports);
var import_globby = require("globby");
var DEFAULT_IGNORE = [
  "**/node_modules/**",
  "**/bower_components/**",
  "**/test/**",
  "**/tests/**"
];
async function getPackagesDir(packagesPath, ignoreFiles = DEFAULT_IGNORE) {
  const packageJsonPath = Array.isArray(packagesPath) ? normalizePatterns(packagesPath) : normalizePatterns([packagesPath]);
  const values = sortFilesName(await (0, import_globby.globby)(packageJsonPath, {
    ignoreFiles
  }));
  const regExp = new RegExp("/package\\.json$");
  const filesPath = values.filter((item) => regExp.test(item));
  const dirs = filesPath.map((item) => item.replace(regExp, ""));
  return { dirs, filesPath };
}
function normalizePatterns(patterns) {
  const normalizedPatterns = [];
  for (const pattern of patterns) {
    normalizedPatterns.push(
      pattern.replace(/\/?$/, "/package.json")
    );
    normalizedPatterns.push(
      pattern.replace(/\/?$/, "/package.json5")
    );
    normalizedPatterns.push(
      pattern.replace(/\/?$/, "/package.yaml")
    );
  }
  return normalizedPatterns;
}
function sortFilesName(files) {
  return files.slice().sort((a, b) => a.localeCompare(b));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getPackagesDir
});
