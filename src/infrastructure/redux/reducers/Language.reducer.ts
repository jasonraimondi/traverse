
// blank string = all languages
import { SET_LANGUAGE } from '@/infrastructure/redux/actions/SetLanguageAction';

const INITIAL_STATE = { title: 'TypeScript', value: 'typescript'};

export const languageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};
