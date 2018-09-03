import { properties, screenSizes } from '../src/app/styles/variables';
import { mediaQueries } from '../src/infrastructure/media-queries';

export default (loader) => [
  require('postcss-easy-import'),
  require('postcss-cssnext')({
    features: {
      customProperties: { variables: properties },
      customMedia: { extensions: mediaQueries(screenSizes) },
    },
  }),
];
