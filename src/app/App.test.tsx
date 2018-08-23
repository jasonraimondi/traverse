import * as enzyme from 'enzyme';
import * as React from 'react';
import { App } from './App';

it('renders Unknown Name when no name entered', () => {
  const app = enzyme.shallow(<App version={1.0}/>);
  expect(app.find('.your-name').text()).toEqual('Your Name: Unknown Name');
});

it('renders correct version', () => {
  const app = enzyme.shallow(<App version={1.1}/>);
  expect(app.find('.version').text()).toEqual('Version: 1.1');
});

it('renders the correct name after updating the input value', () => {
  const app = enzyme.shallow(<App version={1.1}/>);
  app.find('input').simulate('change', { target: { value: 'Jason Raimondi' } });
  expect(app.find('.your-name').text()).toEqual('Your Name: Jason Raimondi');
});
