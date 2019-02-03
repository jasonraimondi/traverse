import AddToken from '@/renderer/app/Stargazer/AddToken/AddToken';
import { DummyUserEntity } from '@/renderer/infrastructure/model/_tests/Dummy';
import { SETTINGS_INITIAL_STATE } from '@/renderer/store/Settings/Reducer';
import { SettingsStore } from '@/renderer/store/Settings/Store';
import { assert } from 'chai';
import { mount } from 'enzyme';
import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

const user = DummyUserEntity();
const settingsState: SettingsStore = {
  ...SETTINGS_INITIAL_STATE,
  github: {
    accessToken: 'a40749035e9c4e69b54132892b051402',
    user: {
      loading: false,
      loaded: true,
      user,
      login: user.attributes.login,
    },
  },
};

const store = mockStore({settings: settingsState});

describe('<AddToken />', () => {
  let app;

  beforeEach(() => {
    store.clearActions();
    app = mount(<AddToken store={store}/>);
  });

  test('renders viewport content correctly', () => {
    const label = app.find('.access-token-label').first().text();
    assert.isTrue(label.includes('Add a Github Access Token'));
  });
});
