// @ts-check
/// <reference types="./Asset" />

/** @type ParcelBundler */
// @ts-ignore
const { Asset } = require("parcel-bundler");
const localRequire = require("parcel-bundler/lib/utils/localRequire");
const path = require("path");

class EjsAsset extends Asset {
  /**
   * @param {ConstructorParameters<ParcelBundler["Asset"]>[0]} name
   * @param {ConstructorParameters<ParcelBundler["Asset"]>[1]} options
   */
  constructor(name, options) {
    super(name, options);
    this.type = "html";
    this.hmrPageReload = true;
  }

  async generate() {
    const ejs = await localRequire("ejs", this.name);

    const config =
      (await this.getConfig([
        `${path.basename(this.name)}rc`,
        ".ejsrc",
        ".ejsrc.js",
        "ejs.config.js",
      ])) || {};
    const compiled = ejs.compile(this.contents, {
      compileDebug: false,
      filename: this.name,
      _with: true,
    });

    if (compiled.dependencies) {
      for (let item of compiled.dependencies) {
        this.addDependency(item, {
          includedInParent: true,
        });
      }
    }

    const includeRegExp = /\<%-\sinclude\('(.*)'/g;
    const includedPaths = [];
    let matches;
    while ((matches = includeRegExp.exec(this.contents))) {
      includedPaths.push(matches[1]);
    }

    includedPaths.forEach((path) => {
      try {
        this.addURLDependency(`/${path}.ejs`, this.name, {
          includedInParent: true,
        });
      } catch (e) {
        console.error(e);
      }
    });

    return compiled(config);
  }
}

module.exports = EjsAsset;
