var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.jsx',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: [
      path.resolve(__dirname, 'node_modules'),
      'node_modules'
    ],
    extensions: ['', '.jsx', '.scss', '.js', '.json'],
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  module: {
    preLoaders: [
      // {
      //  exclude: /src\//,
      //  loader: 'source-map'
      // }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015","stage-0","react"]
        }
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract('style','css?postcss!sass')
      }
    ]
  },
  postcss: ( ) => [ autoprefixer( { browsers: ["last 2 version","ie 9"] } ) ],
  plugins: (
    [
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.DedupePlugin(),
      new ExtractTextPlugin('bstyle.css', { allChunks: true, disable: process.env.ENVIRONMENT !== 'production' }),
      new HtmlWebpackPlugin({
        filename: 'client/index.html'
      })
    ]
  ).concat(
    process.env.ENVIRONMENT === 'production' ? [
      new webpack.DefinePlugin( {'process.env.NODE_ENV': JSON.stringify('production')} ),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin(
        {
          output: { comments: false },
          compress: {
            warnings: false,
            conditionals: true,
            unused: true,
            comparisons: true,
            sequences: true,
            dead_code: true,
            evaluate: true,
            if_return: true,
            join_vars: true,
            negate_iife: false
          }
        }
      )
    ] : []
  ),
  stats: { colors: true },
  devtool: 'source-map',
  devServer: {
    port: process.env.PORT || 6400,
    contentBase: './client',
    historyApiFallback: true
  }
};
