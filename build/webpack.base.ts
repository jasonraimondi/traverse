import { resolve } from 'path';
import { Configuration } from 'webpack';

export const devMode = process.env.NODE_ENV !== 'production';
export const projectRoot = resolve(__dirname, '../');

export const baseConfig: Configuration = {
  mode: devMode ? 'development' : 'production',
  devtool: devMode ? 'cheap-module-eval-source-map' : false,
  context: projectRoot,
  output: {
    path: projectRoot + '/dist',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        use: [
          {
            loader: 'tslint-loader',
            options: {
              emitErrors: false,
              failOnHint: true,
              typeCheck: false,
              // fix: true,
              tsConfigFile: projectRoot + '/tsconfig.json',
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
    ],
  },
};
