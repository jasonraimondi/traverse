import { flashMessage } from '@/app/FlashMessage/FlashMessage';
import { FlashMessages } from '@/app/FlashMessage/FlashMessages';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';

describe('<FlashMessages />', () => {
  let component;

  beforeEach(() => {
    flashMessage.messageList$.next({});
    component = shallow(<FlashMessages/>);
  });

  test('error messages', () => {
    flashMessage.error('error 1');
    flashMessage.error('error 2');
    assert.lengthOf(component.find('.error'), 2);
  });

  test('success messages', () => {
    flashMessage.success('success 1');
    assert.lengthOf(component.find('.success'), 1);
  });
});
