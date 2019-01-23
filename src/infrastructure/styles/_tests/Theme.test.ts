import { assert } from 'chai';

import { themeConfig } from '@/infrastructure/styles/Theme';

describe('theme', () => {
  test('screen searchRepositoryData', () => {
    const screenData = require('@/infrastructure/data/screens');
    assert.deepStrictEqual(screenData, themeConfig.screens);
  });
  test('media queries', () => {
    const small = stripSpacesAndNewlines(themeConfig.mediaQuery.smallOnly`background-color: blue`);
    assert.isTrue(small.includes('@media screen and (max-width: 320px) {'));
    assert.isTrue(small.includes('background-color: blue'));
    assert.strictEqual(6, Object.keys(themeConfig.mediaQuery).length);
  });
});

function stripSpacesAndNewlines(arr: string[]): string {
  return arr.join('').replace(/^\s+|\s+$/g, '');
}
