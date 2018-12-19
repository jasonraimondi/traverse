import {resolve} from 'path';
import createStyledComponentsTransformer from 'typescript-plugin-styled-components';
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
};
