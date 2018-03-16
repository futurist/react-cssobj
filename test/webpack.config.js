const path = require('path')
const fs = require('fs')

const specs = 'specs'
const baseDir = path.join(__dirname, specs)
const entry = {}
fs.readdirSync(baseDir).forEach(f=>{
  if(/^test/.test(f))
    entry[f.replace(/\.\w+$/,'')] = path.join(baseDir, f)
})
console.log(entry)

const config = {
  entry,
  output: {
    path: path.join(baseDir, 'dist'),
    filename: '[name].js',
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
}

module.exports = config