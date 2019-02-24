/**
 * @Author: huangwenhao
 * @LastEditors: huangwenhao
 * @Description: vue.config.js
 * @Date: 2019-02-23 22:56:03
 * @LastEditTime: 2019-02-23 22:56:10
 */
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = {
  // default '/'
  // publicPath: process.env.NODE_ENV === 'production' ? '/' : '',
  // default 'dist'
  // outputDir: 'dist',
  // default ''
  // assetsDir: 'static',
  // default 'index.html'
  // indexPath: 'index.html',
  // default true
  // filenameHashing: false,
  productionSourceMap: false,
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
    // proxy: {
    //   '/api': {
    //     target: '<url>',
    //     ws: true,
    //     changeOrigin: true
    //   }
    // }
  },
  configureWebpack: {
    optimization: {
      minimizer: [new OptimizeCssAssetsPlugin({})]
    },
    plugins: []
  },
  chainWebpack: config => {
    // 移除 preload 插件
    config.plugins.delete('preload')
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
    config.output
      .filename('js/[name].js?v=[chunkhash:4]')
      .chunkFilename('js/[name].js?v=[chunkhash:4]')
      .end()
  }
}
