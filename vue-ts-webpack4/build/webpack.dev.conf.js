/**
 * @author:huangwenhao at 2018.12.25
 */
'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.conf')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const chalk = require('chalk')
const config = require('./webpack.config')

const webpackConfig = merge(webpackBaseConfig, {
  mode: 'development',
  output: {
    path: config.dev.assetsRoot,
    publicPath: config.dev.assetsPublicPath,
    filename: utils.assetsPath('js/[name].js'),
    chunkFilename: utils.assetsPath('js/[name].js')
  },
  devtool: config.dev.devtool,
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    contentBase: false,
    compress: true,
    host: config.dev.host,
    port: config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? {
          warnings: false,
          errors: true
        }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true,
    watchOptions: {
      poll: config.dev.poll
    },
    disableHostCheck: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]
})
module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || 8080
  console.log('> Starting dev server...')
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      process.env.PORT = port
      webpackConfig.devServer.port = port
      webpackConfig.plugins.push(
        new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: [
              chalk.gray('------------------------------------'),
              '   Running: ' + chalk.magenta(`http://${webpackConfig.devServer.host}:${port}`),
              chalk.gray('------------------------------------')
            ]
          },
          onErrors: utils.createNotifierCallback()
        })
      )
      resolve(webpackConfig)
    }
  })
})
