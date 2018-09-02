import { SET_FREQUENCY } from '../actions/setFrequencyAction';

const INITIAL_STATE = 'weekly';

export const frequencyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FREQUENCY:
      return action.payload;
    default:
      return state;
  }
};
