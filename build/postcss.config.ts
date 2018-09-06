import { mediaQueries } from '../src/infrastructure/styles/media-queries';

export default (loader) => {
  const variables = require('../src/infrastructure/data/variables.json');
  return [
    require('postcss-easy-import'),
    require('postcss-cssnext')({
      features: {
        customProperties: { variables: variables.properties },
        customMedia: { extensions: mediaQueries(variables.screenSizes) },
      },
    }),
  ];
};
