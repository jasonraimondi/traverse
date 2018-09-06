import { SET_LANGUAGE } from '../actions/SetLanguage.action';

// blank string = all languages
const INITIAL_STATE = '';

export const languageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};
