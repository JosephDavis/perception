'use strict';

const webpack = require('webpack');
const pkg = require('./package.json');

const year = new Date().getFullYear();
const author = pkg.author.match(/[A-Za-z]+\s[A-Za-z]+/);
const banner = `${pkg.name} ${pkg.version} Copyright ${year} ${author}, ${pkg.license}`;

module.exports = {
  entry: pkg.main,
  target: 'web',
  output: {
    path: `${__dirname}/dist`,
    filename: `${pkg.name}.min.js`,
    library: pkg.name,
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: true,
      mangle: false
    }),
    new webpack.BannerPlugin(banner)
  ]
};
