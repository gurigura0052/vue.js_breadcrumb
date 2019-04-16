const path = require('path')

module.exports = {
  publicPath: './',
  filenameHashing: false,
  configureWebpack: {
    resolve: {
      alias: {
        'bootstrap-components': path.resolve(__dirname, 'node_modules/bootstrap-vue/es/components')
      }
    }
  }
}
