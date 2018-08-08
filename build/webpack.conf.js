'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

const projectRoot = path.resolve(__dirname, '../');

const babelLoader = {
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    presets: [
      ['@babel/preset-env']
    ],
    compact: false
  }
};

const postCssLoader = {
  loader: 'postcss-loader',
  options: {
    config: {
      path: projectRoot + '/build/postcss.config.js'
    }
  }
};

const scssLoader = {
  loader: 'sass-loader',
  options: {
    implementation: require("dart-sass")
  }
};

const plugins = [
  new HtmlWebpackPlugin({
    template: projectRoot + '/src/index.html'
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[hash].css',
    chunkFilename: '[id].[hash].css',
  }),
];

module.exports = {
  mode: devMode ? 'development' : 'production',
  devtool: devMode ? 'eval-cheap-module-source-map' : false,
  context: projectRoot,
  entry: {
    'main': './src/main.ts',
    'style': './src/scss/style.scss',
  },
  output: {
    path: projectRoot + '/dist',
    filename: devMode ? '[name].package.js' : '[name].[hash].package.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          babelLoader,
          {loader: 'ts-loader'}
        ]
      },
      {
        test: /\.scss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          postCssLoader,
          scssLoader,
        ],
      }
    ]
  },
  plugins
};
