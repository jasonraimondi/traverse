export const CLEAR_CURRENT_STARGAZER = '[CLEAR CURRENT_STARGAZER] set';

export const ClearCurrentStargazerAction = () => {
  return {
    type: CLEAR_CURRENT_STARGAZER,
    payload: null,
  };
};
