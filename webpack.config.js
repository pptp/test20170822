/* eslint-disable */

var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

module.exports = {
  entry: [
    './src/index.js',
    'webpack-dev-server/client?http://127.0.0.1:3000',
    'webpack/hot/dev-server'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
  target: 'web',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader']
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.html$/,
        loader: "file-loader?name=[name].[ext]",
      },
      {
        test: /\.png$/i,
        loader: 'file-loader'
      }
    ]
  },
  devtool: 'eval',
  devServer: {
    contentBase: './dist/',
    hot: true,
    port: '3000',
    inline: true
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      src: path.join(__dirname, 'src'),
      components: path.join(__dirname, 'src', 'components')
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      $dirname: '__dirname',
    })
  ]
}