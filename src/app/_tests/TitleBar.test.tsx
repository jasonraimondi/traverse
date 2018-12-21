import { assert } from 'chai';
import { mount } from 'enzyme';
import * as React from 'react';

import { TitleBar } from '@/app/TitleBar';

describe('<TitleBar />', () => {
  test('displays list items', () => {
    const language = { value: 'typescript', title: 'TypeScript'};
    const component = mount(<TitleBar frequency={'weekly'} language={language}/>);

    assert.strictEqual(component.find('.selected-frequency').text(), 'Weekly');
    assert.strictEqual(component.find('.selected-language').text(), 'TypeScript');
  });
});
