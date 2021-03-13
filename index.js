// @ts-check

/**
 * @param bundler {import("parcel-bundler")}
 */
module.exports = function (bundler) {
  bundler.addAssetType("ejs", require.resolve("./EjsAsset"));
};
