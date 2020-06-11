const { Asset } = require('parcel-bundler');
const localRequire = require('parcel-bundler/lib/utils/localRequire');
const path = require('path');

class EjsAsset extends Asset {
  constructor(name, options) {
    super(name, options);
    this.type = 'html';
    this.hmrPageReload = true;
  }

  async generate() {
    const ejs = await localRequire('ejs', this.name);
    const config = (await this.getConfig([
      `${path.basename(this.name)}rc`,
      '.ejsrc',
      '.ejsrc.js',
      'ejs.config.js',
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

    return compiled(config);
  }
}

module.exports = EjsAsset;
