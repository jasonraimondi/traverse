import * as enzyme from 'enzyme';
import * as React from 'react';
import { App } from './App';

it('renders Unknown Name when no name entered', () => {
  const hello = enzyme.shallow(<App version={1.0} />);
  expect(hello.find('.your-name').text()).toEqual('Unknown Name');
});

it('renders correct version', () => {
  const hello = enzyme.shallow(<App version={1.1} />);
  expect(hello.find('.version').text()).toEqual('Version: 1.1');
});
