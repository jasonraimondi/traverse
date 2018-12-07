import { assert } from 'chai';
import { mount } from 'enzyme';
import * as React from 'react';

import { LanguageList } from './LanguageList';

describe('<LanguageList />', () => {
  test('loads all languages', () => {
    const ALL_LANGUAGES = require('../../infrastructure/data/all-languages.json');
    const POPULAR_LANGUAGES = require('../../infrastructure/data/popular-languages.json');
    const HANDLE_SET_LANGUAGE = jest.fn();
    const component = mount(<LanguageList
      selectedLanguage='typescript'
      allLanguageList={ALL_LANGUAGES}
      popularLanguageList={POPULAR_LANGUAGES}
      handleSetLanguage={HANDLE_SET_LANGUAGE}
    />);

    component.setState({  selectedLanguageListType: 'all'});

    assert.lengthOf(component.find('.language-list-item'), 304);
  });
});
