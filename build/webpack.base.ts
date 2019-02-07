import {resolve} from 'path';
import createStyledComponentsTransformer from 'typescript-plugin-styled-components';
import {Configuration} from 'webpack';

export const devMode = process.env.NODE_ENV !== 'production';
export const projectRoot = resolve(__dirname, '../');

const styledComponentsTransformer = createStyledComponentsTransformer();

const babelLoader = {
  loader: 'babel-loader',
  options: {
    presets: [
      '@babel/preset-env',
    ],
    plugins: [
      '@babel/plugin-transform-regenerator',
      '@babel/plugin-proposal-async-generator-functions',
      '@babel/proposal-class-properties',
      '@babel/proposal-object-rest-spread',
    ],
    compact: !devMode,
  },
};

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
          // babelLoader,
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
