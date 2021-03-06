'use strict';

const path = require('path');

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  node: {
    __dirname: false,
    __filename: false
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json']
  },
  devtool: 'source-map',
  plugins: [],
  externals: {
    // https://github.com/node-hid/node-hid#electron-projects-using-node-hid
    "node-hid": 'commonjs node-hid',
    "usb": 'commonjs usb'
  }
};
