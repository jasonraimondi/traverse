import { mediaQueries } from '../settings/variables';
import { properties } from './variables';

export default (loader) => [
  require('postcss-easy-import'),
  require('postcss-cssnext')({
    features: {
      customProperties: { variables: properties },
      customMedia: { extensions: mediaQueries() },
    },
  }),
];
