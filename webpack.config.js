const path = require('path')
const fs = require('fs')

const config = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'browser.js',
    library: 'ReactCSSObj',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  mode: process.env.NODE_ENV === 'production' ? 'development' : 'production',
  resolve: {
    // otherwize const will not transpiled when exclude: /node_modules/
    // mainFields: ['main', 'module']
  },
  externals: {
    react : {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React' // indicates global variable
    }
  },
  module: {
    rules: [{
      test: /\.js?$/,
      // exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
}

module.exports = config
