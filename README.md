# @jamiegluk/parcel-plugin-ejs-template

[![GitHub package.json version](https://img.shields.io/github/package-json/v/jamiegluk/parcel-plugin-ejs-template?color=blue)](https://github.com/jamiegluk/parcel-plugin-ejs-template/releases)
[![GitHub lint Workflow Status](https://img.shields.io/github/workflow/status/jamiegluk/parcel-plugin-ejs-template/Lint?label=lint)](https://github.com/jamiegluk/parcel-plugin-ejs-template/actions?query=workflow%3A%22Lint%22)
[![GitHub build Workflow Status](https://img.shields.io/github/workflow/status/jamiegluk/parcel-plugin-ejs-template/Build?label=build)](https://github.com/jamiegluk/parcel-plugin-ejs-template/actions?query=workflow%3A%22Build%22)

EJS support for Parcel bundler

## Differences with [@sarioglu/parcel-plugin-ejs-template](https://github.com/sarioglu/parcel-plugin-ejs-template)

- Fixed HMR and caching.
- Improved `includes` dependency resolution.
- Project code and repo improvements.
- Added changes from [parcel-plugin-ejs-template-vars](https://github.com/Meyzz/parcel-plugin-ejs-template) (allowing for scoped _{ejs_file_name}.ejsrc_ variables files, see below).

## Installation

You need:

- [Node.js](https://nodejs.org) / `choco install nodejs`
- [Yarn](https://yarnpkg.com/) / `choco install yarn`
- [Parcel](https://parceljs.org/) / `yarn add -D parcel-bundler`

```bash
yarn add -D https://github.com/jamiegluk/parcel-plugin-ejs-template
```

> Instructions assume _yarn_, but you can use _npm_ instead.

## Usage

Use your `.ejs` files as entry files to start bundling using `parcel-bundler`.

## Customization

You can pass some local variables to your `.ejs` file by creating a config file named `ejs.config.js` in your directory. File schema should be like following example:

```js
module.export = {
  foo: "bar",
};
```

or `{ejs_file_name}.ejsrc`:

```js
{
  foo: "bar";
}
```

These variables will be available in your `.ejs` file.

```html
<div><%= foo %></div>
```

## See Also

- [Parcel](https://parceljs.org/)
- [EJS](https://ejs.co/)
- [@Meyzz/parcel-plugin-ejs-template-vars](https://github.com/Meyzz/parcel-plugin-ejs-template)
- [@sarioglu/parcel-plugin-ejs-template](https://github.com/sarioglu/parcel-plugin-ejs-template)

## Contributing

Feel free to submit a pull-request or fork as your own.

## Copyright & Licensing

Licensed for use under the MIT License.  
See [LICENSE](LICENSE).
