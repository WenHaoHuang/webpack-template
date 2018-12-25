'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('./webpack.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: 'production',
  output: {
    path: config.dll.dir,
    filename: '[name].js',
    library: '[name]'
  },
  entry: {
    libs: [
      'vue',
      'vue-router',
      'vuex',
      'vuex-class',
      'vue-property-decorator',
      'vue-class-component',
      'axios',
      'js-cookie',
      'nprogress',
      'element-ui',
      // 'element-ui/lib/theme-chalk/index.css'
    ]
  },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  performance: {
    maxAssetSize: 1024000,
    maxEntrypointSize: 2048000,
    assetFilter: assetFilename => {
      return !/\.map$/.test(assetFilename)
    }
  },
  optimization: {
    nodeEnv: 'production',
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
        cache: true,
        sourceMap: config.build.productionSourceMap,
        uglifyOptions: {
          warnings: false
        },
        // chunkFilter: (chunk) => {
        //   return chunk.name !== 'vendor'
        // }
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin([config.dll.dir], {
      root: config.dll.rootDir,
      exclude: [],
    }),
    new webpack.DllPlugin({
      path: './dll/manifest.json',
      name: '[name]',
      context: config.dll.rootDir
    }),
  ],
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }
}
