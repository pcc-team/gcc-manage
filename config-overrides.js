const {
  override,
  fixBabelImports,
  addPostcssPlugins
} = require('customize-cra');


module.exports = override(
  addPostcssPlugins([require("postcss-px2rem")({
    remUnit: 32
  })]),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  })
);