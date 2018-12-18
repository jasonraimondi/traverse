import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration } from 'webpack';
import { smart } from 'webpack-merge';

import { baseConfig, projectRoot } from './webpack.base';

export default smart(baseConfig, {
  target: 'electron-renderer',
  entry: {
    renderer: './src/renderer.tsx',
  },
  module: {
    rules: [
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
      template: projectRoot + '/index.html',
    }),
  ],
} as Configuration);
