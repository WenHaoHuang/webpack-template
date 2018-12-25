'use strict'
const utils = require('./utils')
const config = require('./webpack.config')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDev = process.env.NODE_ENV !== 'production'

const webpackBaseConfig = {
  entry: utils.resolve('src/main.ts'),
  resolve: {
    extensions: ['.js', '.vue', '.ts', '.tsx', '.json', '.scss', '.css'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@src': utils.resolve('src'),
      '@static': utils.resolve('static'),
      '@assets': utils.resolve('src/assets'),
      '@components': utils.resolve('src/components'),
      '@mixins': utils.resolve('src/mixins'),
      '@router': utils.resolve('src/router'),
      '@store': utils.resolve('src/store'),
      '@styles': utils.resolve('src/styles'),
      '@views': utils.resolve('src/views')
    }
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              appendTsxSuffixTo: [/\.vue$/]
            }
          },
          {
            loader: 'tslint-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [utils.resolve('src')]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: utils.resolve('src/styles/_var.scss')
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[hash:8].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[ext]?v=[hash:4]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[ext]?v=[hash:4]')
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: utils.resolve('src/template.html'),
      filename: 'index.html',
      inject: true,
      favicon: utils.resolve('src/assets/logo.png'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    })
  ]
}

module.exports = webpackBaseConfig
