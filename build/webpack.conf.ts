import { resolve } from 'path';
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import postCssConfig from './postcss.config';

const devMode = process.env.NODE_ENV !== 'production';
const projectRoot = resolve(__dirname, '../');

const postCssLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: postCssConfig
  }
};

const plugins: webpack.Plugin[] = [
  new HtmlWebpackPlugin({
    template: projectRoot + '/src/index.html'
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[hash].css',
    chunkFilename: '[id].[hash].css',
  }),
];

const config: webpack.Configuration = {
  mode: devMode ? 'development' : 'production',
  devtool: devMode ? 'cheap-module-eval-source-map' : false,
  context: projectRoot,
  entry: {
    'main': './src/main.ts',
  },
  output: {
    path: projectRoot + '/dist',
    filename: devMode ? '[name].package.js' : '[name].[hash].package.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      },
      {
        test: /\.p?css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          postCssLoader,
        ],
      }
    ]
  },
  plugins
};

export default config;
