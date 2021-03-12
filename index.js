// @ts-check

/**
 * @typedef {import("parcel-bundler")} ParcelBundler
 * @param bundler {ParcelBundler}
 */
module.exports = function (bundler) {
  bundler.addAssetType("ejs", require.resolve("./EjsAsset"));
};
