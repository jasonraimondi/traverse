import theme from '@/infrastructure/styles/theme';
import { assert } from 'chai';

describe('theme', () => {
  test('screen data', () => {
    const screenData = require('@/infrastructure/data/screens');
    assert.deepStrictEqual(screenData, theme.screens);
  });
  test('media queries', () => {
    const small = stripSpacesAndNewlines(theme.mediaQuery.smallOnly`background-color: blue`);
    assert.isTrue(small.includes('@media screen and (max-width: 320px) {'));
    assert.isTrue(small.includes('background-color: blue'));
    assert.strictEqual(6, Object.keys(theme.mediaQuery).length);
  });
});

function stripSpacesAndNewlines(arr: string[]): string {
  return arr.join('').replace(/^\s+|\s+$/g, '');
}
