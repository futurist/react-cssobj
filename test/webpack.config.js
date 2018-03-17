const path = require('path')
const fs = require('fs')

const baseDir = path.join(__dirname, 'src')
const wwwDir = path.join(__dirname, 'www')
const entry = {}
fs.readdirSync(baseDir).forEach(f=>{
  if(/^test/.test(f))
    entry[f.replace(/\.\w+$/,'')] = path.join(baseDir, f)
})
console.log(entry)

const config = {
  entry,
  output: {
    path: path.join(wwwDir, 'dist'),
    filename: '[name].js',
  },
  mode: process.env.NODE_ENV == 'production' ? 'development' : 'production',
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
}

module.exports = config