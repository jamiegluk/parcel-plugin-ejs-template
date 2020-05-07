const { Asset } = require('parcel-bundler');
const localRequire = require('parcel-bundler/lib/utils/localRequire');

class EjsAsset extends Asset {
  constructor(name, options) {
    super(name, options);
    this.type = 'html';
    this.hmrPageReload = true;
  }

  async generate() {
    const ejs = await localRequire('ejs', this.name);
    const config = (await this.getConfig(['.ejsrc', '.ejsrc.js', 'ejs.config.js', 'ejs.default.json'])) || {};

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

    return compiled(config);
  }
}

module.exports = EjsAsset;
