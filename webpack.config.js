const path = require('path')
const fs = require('fs')

const config = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'browser.js',
    library: 'ReactCSSObj',
    libraryExport: 'default'
  },
  mode: process.env.NODE_ENV === 'production' ? 'development' : 'production',
  resolve: {
    // otherwize const will not transpiled!!
    mainFields: ['main', 'module']
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
}

module.exports = config
