const path = require('path');
const { merge } = require('lodash');
const baseConfig = require('./webpack.config.base');

const entry = {
  bundle: path.resolve(__dirname, '..', 'src/index.ts'),
};

const devtool = 'cheap-module-eval-source-map';

const output = {
  path: path.resolve(__dirname, '..', 'dist'),
  filename: '[name].js',
  library: 'ReactMindMap',
  libraryTarget: 'umd',
};

module.exports = merge(baseConfig, {
  mode: 'development',
  entry,
  devtool,
  output,
});