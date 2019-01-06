import { SET_LANGUAGE } from '@/infrastructure/redux/actions/SetLanguage.action';

// blank string = all languages
const INITIAL_STATE = { title: 'TypeScript', value: 'typescript'};

export const languageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};
