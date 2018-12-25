/**
 * @author:huangwenhao at 2018.12.25
 */
'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.conf')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const config = require('./webpack.config')

const webpackConfig = merge(webpackBaseConfig, {
  mode: 'production',
  output: {
    path: config.build.assetsRoot,
    publicPath: config.build.assetsPublicPath,
    filename: utils.assetsPath('js/[name].js?v=[chunkhash:4]'),
    chunkFilename: utils.assetsPath('js/[name].js?v=[chunkhash:4]')
  },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
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
          priority: 20,
        },
        libs: {
          test: /[\\/]node_modules[\\/]/,
          name: 'chunk-libs',
          priority: 10,
          chunks: 'initial',
        },
        commons: {
          test: utils.resolve('src/components'),
          name: 'chunk-commons',
          priority: 5,
          chunks: 'all',
          minChunks: 3,
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
          warnings: false
        },
        // chunkFilter: (chunk) => {
        //   return chunk.name !== 'vendor'
        // }
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin([config.build.assetsSubDirectory], {
      root: config.build.assetsRoot,
      exclude: [],
    }),
    // new webpack.DllReferencePlugin({
    //   context: config.dll.rootDir,
    //   name: 'vendor',
    //   manifest: require('../dll/manifest.json')
    // }),
    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/[name].css?v=[contenthash:4]')
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css(.*)$/,
      // cssProcessor: require('cssnano'),
      // cssProcessorOptions: {
      //   safe: true,
      //   discardComments: {
      //     removeAll: true
      //   }
      // },
      canPrint: true
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new CopyWebpackPlugin([{
      from: config.build.staticRoot,
      to: config.build.assetsSubDirectory,
      ignore: ['.*']
    }]),
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(js|css)$' // 压缩 js 与 css
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }
})

module.exports = webpackConfig
