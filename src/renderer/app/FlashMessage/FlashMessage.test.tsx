import { assert } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';

import { FlashMessages } from '@/renderer/app/FlashMessage/FlashMessages';
import { FlashMessageService } from '@/renderer/infrastructure/services/FlashMessage';

describe('<FlashMessages />', () => {
  let component;
  let flashMessage;

  beforeEach(() => {
    flashMessage = FlashMessageService.create();
    component = shallow(<FlashMessages flash={flashMessage}/>);
  });

  test('success messages', (done) => {
    flashMessage.success('success 1', 50000);
    assert.lengthOf(component.find('.success'), 1);
    done();
  });

  test('error messages', (done) => {
    flashMessage.error('error 1', 50000);
    flashMessage.error('error 2', 50000);
    assert.lengthOf(component.find('.error'), 2);
    done();
  });
});
