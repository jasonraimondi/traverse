import { Configuration } from 'webpack';
import { smart } from 'webpack-merge';

import { baseConfig } from './webpack.base';

export default smart(baseConfig, {
  target: 'electron-main',
  node: {
    __dirname: false, // see https://github.com/electron/electron/issues/5107#issuecomment-229396204
    __filename: false,
  },
  entry: {
    index: './src/main.ts',
  },
} as Configuration);
