const path = require('path')
const fs = require('fs')

const config = {
  entry: path.join(__dirname, 'dist/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'react-cssobj.min.js',
  },
  mode: process.env.NODE_ENV == 'production' ? 'development' : 'production',
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        "presets":[
          "es2015",
          "react"
        ]
      }
    }]
  }
}

module.exports = config