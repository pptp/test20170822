/* eslint-disable */

var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

const precss       = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    'babel-polyfill',
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
        exclude: /(node_modules)/,
        loaders: ['babel-loader']
      },
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        use: 'json-loader'
      },
      {
        test: /\.html$/,
        exclude: /(node_modules)/,
        loader: "file-loader?name=[name].[ext]",
      },
      {
        test: /\.(png|gif)$/i,
        exclude: /(node_modules)/,
        loader: 'file-loader'
      },
      {
        test: /\.less$/,
        exclude: /(node_modules)/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
    ]
  },
  devtool: 'source-map',
  // devtool: 'eval',
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
    }),

    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer({
            browsers: [
              'last 3 version',
              'ie >= 10',
            ],
          }),
        ],
        context: './src',
      },
    }),
  ]
}