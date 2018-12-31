'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('./webpack.config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].js?v=[chunkhash:4]'),
    chunkFilename: utils.assetsPath('js/[name].js?v=[chunkhash:4]')
  },
  performance: {
    maxAssetSize: 1024000,
    maxEntrypointSize: 2048000,
    assetFilter: assetFilename => {
      // return assetFilename.endsWith('.js')
      return !/\.map$/.test(assetFilename)
    }
  },
  optimization: {
    nodeEnv: 'production',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        elementUI: {
          test: /element-ui/,
          name: 'chunk-element-ui',
          priority: 80
        },
        libs: {
          test: /[\\/]node_modules[\\/]/,
          name: 'chunk-libs',
          priority: 60,
          chunks: 'initial'
        },
        commons: {
          test: utils.resolve('src/components'),
          name: 'chunk-commons',
          priority: 50,
          minChunks: 3
        }
      }
    },
    minimizer: [
      new OptimizeCssAssetsPlugin({}),
      new UglifyJsPlugin({
        parallel: true,
        cache: true,
        sourceMap: config.build.productionSourceMap,
        uglifyOptions: {
          compress: {
            warnings: false
          }
        }
      })
    ]
  },
  plugins: [
    // extract css into its own file
    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/[name].css?v=[hash:4]')
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css(.*)$/,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        safe: true,
        discardComments: {
          removeAll: true
        }
      },
      canPrint: true
    }),
    // keep module.id stable when vender modules does not change
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp('\\.(' + config.build.productionGzipExtensions.join('|') + ')$'),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
