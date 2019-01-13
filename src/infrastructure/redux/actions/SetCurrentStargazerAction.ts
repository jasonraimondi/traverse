import { IActionResponse } from '@/infrastructure/redux/ActionResponse';
import { UserEntity } from '@/models/User.entity';

export const SET_CURRENT_STARGAZER = '[CURRENT CURRENT_STARGAZER] set';

export type SetCurrentStargazerActionType =
  (user: UserEntity) => IActionResponse<UserEntity>;

export const SetCurrentStargazerAction: SetCurrentStargazerActionType = (user) => {
  return {
    type: SET_CURRENT_STARGAZER,
    payload: user,
  };
};
