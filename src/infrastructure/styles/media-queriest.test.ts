import { assert } from 'chai';

import { mediaQueries } from './media-queries';

describe('media-queries', () => {
  it('media query function generates correct strings', () => {
    const screenSizes = {
      small: 100,
      medium: 200,
    };

    const mq = mediaQueries(screenSizes);

    assert.strictEqual(mq.smallOnly, 'screen and (max-width: 100px)');
    assert.strictEqual(mq.small, 'screen and (min-width: 101px)');
    assert.strictEqual(mq.mediumOnly, 'screen and (max-width: 200px)');
    assert.strictEqual(mq.medium, 'screen and (min-width: 201px)');
  });
});
