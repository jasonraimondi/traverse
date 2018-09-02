import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration } from 'webpack';
import { smart } from 'webpack-merge';
import postCssConfig from '../build/postcss.config';

import { baseConfig, devMode, projectRoot } from './webpack.base';

export default smart(baseConfig, {
  target: 'electron-renderer',
  entry: {
    renderer: './src/renderer.tsx',
  },
  module: {
    rules: [
      {
        test: /\.p?css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: postCssConfig,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: projectRoot + '/src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
  ],
} as Configuration);
