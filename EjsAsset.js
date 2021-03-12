// @ts-check

const { Asset } = require("parcel-bundler");
/** @type localRequire */
// @ts-ignore
const localRequire = require("parcel-bundler/lib/utils/localRequire");
const path = require("path");

/**
 * @extends {Asset<ejs.ClientFunction>}
 */
class EjsAsset extends Asset {
  /**
   * @param {string} name
   * @param {{}} options
   */
  constructor(name, options) {
    super(name, options);
    this.type = "html";
    this.hmrPageReload = true;
  }

  /**
   * @param {string} code
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

  async generate() {
    const config =
      (await this.getConfig([
        `${path.basename(this.name)}rc`,
        ".ejsrc",
        ".ejsrc.js",
        "ejs.config.js",
      ])) || {};
    return this.ast(/** @type ejs.Data | undefined */ (config.locals));
  }
}

module.exports = EjsAsset;
