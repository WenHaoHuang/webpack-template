const path = require('path')

module.exports = {
  dev: {
    NODE_ENV: '"development"',
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/Nivana.beta': {
        changeOrigin: true,
        target: 'http://test.host.cn',
        secure: false
      }
    },
    host: 'localhost',
    port: 8080,
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    devtool: '#eval-source-map',
    cacheBusting: true,
    cssSourceMap: true,
    useEslint: true
  },
  build: {
    NODE_ENV: '"production"',
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false,
    devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: false
  }
}
