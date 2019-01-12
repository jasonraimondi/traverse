import { ListType } from '@/app/TrendingRepos/components/LanguageListPicker';
import { SET_LANGUAGE_LIST_TYPE } from '@/infrastructure/redux/actions/SetLanguageListTypeAction';

const INITIAL_STATE: ListType = 'popular';

export const languageListTypeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LANGUAGE_LIST_TYPE:
      return action.payload;
    default:
      return state;
  }
};
