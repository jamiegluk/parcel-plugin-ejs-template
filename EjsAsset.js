// @ts-check

/** @type ParcelBundler */
// @ts-ignore
const { Asset } = require("parcel-bundler");
/** @type ParcelBundler.localRequire */
// @ts-ignore
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

  /**
   * @param {Parameters<ParcelBundler.Asset["parse"]>[0]} code
   * @returns {ReturnType<ParcelBundler.Asset["parse"]>}
   */
  async parse(code) {
    /** @type {ejsx.ejsExtended} */
    const ejs = await localRequire("ejs", this.name);

    return ejs.compile(code, {
      compileDebug: false,
      filename: this.name,
      _with: true,
      /** @type {ejsx.Includer} */
      includer: (_, dep) => {
        this.addDependency(dep, {
          includedInParent: true,
        });
      },
    });
  }

  /** @returns {ReturnType<ParcelBundler.Asset["generate"]>} */
  async generate() {
    const config =
      (await this.getConfig([
        `${path.basename(this.name)}rc`,
        ".ejsrc",
        ".ejsrc.js",
        "ejs.config.js",
      ])) || {};
    return this.ast(config.locals);
  }
}

module.exports = EjsAsset;
