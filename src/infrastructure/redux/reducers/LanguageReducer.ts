import { SET_LANGUAGE } from '../actions/setLanguageAction';

const INITIAL_STATE = 'all';

export const languageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};
