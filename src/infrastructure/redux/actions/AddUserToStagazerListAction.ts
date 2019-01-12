import { IActionResponse } from '@/infrastructure/redux/ActionResponse';
import { UserEntity } from '@/models/User.entity';

export const ADD_USER_TO_STARGAZER_LIST = '[STARGAZER LIST] add user';

export type AddUserToStargazerListActionType =
  (user: UserEntity) => IActionResponse<UserEntity>;

export const AddUserToStagazerListAction: AddUserToStargazerListActionType = (user) => {
  return {
    type: ADD_USER_TO_STARGAZER_LIST,
    payload: user,
  };
};
