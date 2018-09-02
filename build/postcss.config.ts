import { mediaQueries, properties } from '../src/app/styles/variables';

export default (loader) => [
  require('postcss-easy-import'),
  require('postcss-cssnext')({
    features: {
      customProperties: { variables: properties },
      customMedia: { extensions: mediaQueries() },
    },
  }),
];
