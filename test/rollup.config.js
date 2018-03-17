const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');

const inputOptions = {
  input: 'src/test1.js',
  plugins:[
    babel({
      "presets":[
        [
          "env",
          {
            "modules": false
          }
        ],
        "react"
      ],
      babelrc: false
    }),
    resolve(),
    commonjs({
      namedExports: { '../node_modules/classnames/index.js': ['default' ] }
    }),
  ],
};

const outputOptions = {
  output: {
    file: 'iife.js',
    format: 'iife',
    name: 'test1'
  },
};

module.exports = Object.assign({}, inputOptions, outputOptions)

async function build() {
  const bundle = await rollup.rollup(inputOptions)
  const { code, map } = await bundle.generate(outputOptions)
  console.log(code)
  await bundle.write(outputOptions)
}

build()


