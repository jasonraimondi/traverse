import { flashMessage } from '@/infrastructure/FlashMessage';
import { IActionResponse } from '@/infrastructure/redux/ActionResponse';

export const REMOVE_USER_FROM_STARGAZER_LIST = '[CURRENT_STARGAZER LIST] remove user';

export type RemoveUserFromStargazerListActionType = (username: string) => IActionResponse<string>;

export const RemoveUserFromStargazerListAction: RemoveUserFromStargazerListActionType = (user) => {
  flashMessage.success('User Removed!');
  return {
    type: REMOVE_USER_FROM_STARGAZER_LIST,
    payload: user,
  };
};
