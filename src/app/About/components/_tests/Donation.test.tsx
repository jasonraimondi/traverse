import { assert } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';

import { Donation } from '@/app/About/components/Donation';

describe('<Donation />', () => {
  test('wallet and address are displayed', () => {
    const address = 'donation-address';
    const walletType = 'ether';
    const component = shallow(<Donation address={address} walletType={walletType} />);
    assert.strictEqual(
      component.find('.donation-address').text(),
      address,
    );
    assert.strictEqual(
      component.find('.wallet-type').text(),
      walletType,
    );
  });
});
