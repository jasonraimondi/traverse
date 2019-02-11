// tslint:disable-next-line:no-var-requires
require('dotenv').config();

import {resolve} from 'path';
import createStyledComponentsTransformer from 'typescript-plugin-styled-components';
import * as webpack from 'webpack';
import {Configuration} from 'webpack';

export const devMode = process.env.NODE_ENV !== 'production';
export const projectRoot = resolve(__dirname, '../');

const styledComponentsTransformer = createStyledComponentsTransformer();

export const baseConfig: Configuration = {
  mode: devMode ? 'development' : 'production',
  devtool: devMode ? 'cheap-module-eval-source-map' : false,
  context: projectRoot,
  output: {
    path: projectRoot + '/dist',
  },
  resolve: {
    alias: {
      '@': projectRoot + '/src',
    },
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        use: [
          {
            loader: 'tslint-loader',
            options: {
              emitErrors: false,
              failOnHint: true,
              typeCheck: false,
              tsConfigFile: projectRoot + '/tsconfig.json',
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              getCustomTransformers: () => ({
                before: [styledComponentsTransformer],
              }),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      env: {
        SEGMENT_KEY: JSON.stringify(process.env.SEGMENT_KEY),
      },
    }),
  ],
};
