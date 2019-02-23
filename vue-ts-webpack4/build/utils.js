'use strict'
const path = require('path')
const config = require('./webpack.config')
const isProd = process.env.NODE_ENV === 'production'

exports.resolve = dir => {
  return path.join(__dirname, '..', dir)
}

exports.assetsPath = dir => {
  const assetsSubDirectory = isProd ? config.build.assetsSubDirectory : config.dev.assetsSubDirectory
  // return path.posix.join(assetsSubDirectory, _path)
  return path.posix.join(assetsSubDirectory, dir)
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')
  return (severity, errors) => {
    if (severity !== 'error') return
    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()
    notifier.notify({
      title: 'Enquiry',
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}
