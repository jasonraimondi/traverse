import { assert } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';

import { EmptyTrendingRepositoryList } from '@/renderer/app/TrendingRepos/components/EmptyTrendingRepositoryList';
import { ILanguage } from '@/renderer/app/TrendingRepos/components/LanguageList';
import { FrequencyType } from '@/renderer/infrastructure/model/Frequency.type';

describe('<EmptyTrendingRepositoryList />', () => {
  test('die roller passes click function up', () => {
    const language: ILanguage = { title: 'Typescript', value: 'typescript'};
    const frequency: FrequencyType = 'weekly';
    const component = shallow(<EmptyTrendingRepositoryList language={language} frequency={frequency}/>);

    const githubLink = component.find('.open-link-externally').at(0).props().href;
    assert.isTrue(githubLink.includes(frequency));
    assert.isTrue(githubLink.includes(language.value));
  });
});
