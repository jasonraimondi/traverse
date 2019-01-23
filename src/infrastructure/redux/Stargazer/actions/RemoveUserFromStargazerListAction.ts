import { flashMessage } from '@/app/FlashMessage/FlashMessage';
import { ActionResponse } from '@/infrastructure/redux/Interfaces';

export const REMOVE_USER_FROM_STARGAZER_LIST = '[CURRENT_STARGAZER LIST] remove user';

export type RemoveUserFromStargazerListActionType = (username: string) => ActionResponse<string>;

export const RemoveUserFromStargazerListAction: RemoveUserFromStargazerListActionType = (user) => {
  flashMessage.success('User Removed!');
  return {
    type: REMOVE_USER_FROM_STARGAZER_LIST,
    payload: user,
  };
};
