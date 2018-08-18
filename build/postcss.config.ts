import { mediaQueries, properties } from './variables';

export default (loader) => [
  require('postcss-cssnext')({
    features: {
      customProperties: { variables: properties },
      customMedia: { extensions: mediaQueries },
    },
  }),
];
