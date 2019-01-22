import { RepositoryList } from '@/app/elements/RepositoryList';
import { StargazerRepositoryListStore } from '@/infrastructure/redux/StargazerRepositoryList/Store';
import { TrendingRepositoryListStore } from '@/infrastructure/redux/TrendingRepositoryList/Store';
import { RepositoryEntity } from '@/models/Repository.entity';
import { UserEntity } from '@/models/User.entity';

export interface StargazerListReducer {
  [id: string]: UserEntity;
}

export interface CurrentStargazerReducer {
  login: string;
  repositoryList: {
    [login: string]: RepositoryEntity,
  };
}

const INITIAL_STATE: StargazerRepositoryListStore = {
  loading: false,
  loaded: false,
  currentUserId: null,
  userList: {},
  repositoryList: {},
};

export const stargazerListReducer = (state = INITIAL_STATE, action): StargazerRepositoryListStore => {
  switch (action.type) {
    // case SET_CURRENT_STARGAZER_SUCCESS:
    //   return action.payload;
    // case CLEAR_CURRENT_STARGAZER:
    //   return INITIAL_STATE;
    // case ADD_USER_TO_STARGAZER_LIST_SUCCESS:
    //   return {
    //     ...state,
    //     [action.payload.attributes.login]: action.payload,
    //   };
    // case REMOVE_USER_FROM_STARGAZER_LIST:
    //   delete state[action.payload];
    //   return {
    //     ...state,
    //   };
    default:
      return state;
  }
};
