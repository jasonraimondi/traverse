import { ClearErrorMessageAction } from '@/infrastructure/redux/actions/ClearErrorMessage.action';
import { assert } from 'chai';

import { SetErrorMessageAction } from '@/infrastructure/redux/actions/SetErrorMessage.action';
import { errorMessageReducer } from '@/infrastructure/redux/reducers/ErrorMessage.reducer';

describe('ErrorMessagePicker Reducer', () => {
  test('INITIAL_STATE is set to weekly', () => {
    const action = { type: undefined };
    const initialState = null;

    assert.strictEqual(errorMessageReducer(undefined, action), initialState);
  });

  test('SET_ERROR_MESSAGE updates the errorMessage reducer properly', () => {
    const action = SetErrorMessageAction('I am an error message');
    const expectedState = 'I am an error message';

    assert.strictEqual(errorMessageReducer(undefined, action), expectedState);
  });

  test('CLEAR_ERROR_MESSAGE updates the errorMessage reducer properly', () => {
    const action = ClearErrorMessageAction();
    const expectedState = null;

    assert.strictEqual(errorMessageReducer('Initial State', action), expectedState);
  });
});
