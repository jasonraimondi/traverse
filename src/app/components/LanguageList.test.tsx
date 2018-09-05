import { expect } from 'chai';
import { mount } from 'enzyme';
import * as React from 'react';

import { LanguageList } from './LanguageList';

describe('<LanguageList />', () => {
  test('loads all languages', () => {
    const ALL_LANGUAGES = require('../../infrastructure/data/all-languages.json');
    const HANDLE_SET_LANGUAGE = jest.fn();
    const component = mount(<LanguageList
      selectedLanguage='typescript'
      languageList={ALL_LANGUAGES}
      handleSetLanguage={HANDLE_SET_LANGUAGE}
    />);
    expect(component.find('.language-list-item')).to.have.lengthOf(304);
  });
});
