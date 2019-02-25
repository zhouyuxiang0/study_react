const path = require('path');
const nodeExternals = require('webpack-node-externals');

const merge = require('webpack-merge');
const config = require('./webpack.base.js');

const serverConfig = {
  target: 'node',
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [nodeExternals()], // 使require的一些 不打包 比如express不会被webpack打包
};

module.exports = merge(config, serverConfig);
