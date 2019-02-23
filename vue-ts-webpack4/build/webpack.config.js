'use strict'
const path = require('path')
module.exports = {
  dev: {
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        changeOrigin: true,
        target: 'http://127.0.0.1',
        secure: false
      }
    },
    host: 'localhost',
    port: 8080,
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    devtool: '#cheap-module-eval-source-map',
    cacheBusting: true,
    cssSourceMap: true,
    useEslint: true
  },
  build: {
    index: 'index.html',
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    staticRoot: path.resolve(__dirname, '../static'),
    productionSourceMap: false,
    devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: false
  },
  dll: {
    dir: path.resolve(__dirname, '../dll'),
    rootDir: path.resolve(__dirname, '../')
  }
}
