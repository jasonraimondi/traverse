import { mediaQueries } from './media-queries';

describe('media-queries', () => {
  it('media query function generates correct strings', () => {
    const screenSizes = {
      small: 100,
      medium: 200,
    };

    const mq = mediaQueries(screenSizes);

    expect(mq.smallOnly).toBe('screen and (max-width: 100px)');
    expect(mq.small).toBe('screen and (min-width: 101px)');
    expect(mq.mediumOnly).toBe('screen and (max-width: 200px)');
    expect(mq.medium).toBe('screen and (min-width: 201px)');
  });
});
