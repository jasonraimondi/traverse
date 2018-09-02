import { IActionResponse } from '../action-response';

export const SET_FREQUENCY = '[FREQUENCY] Set Frequency';

export type SetFrequencyType = (frequency: string) => IActionResponse<string>;

export const setFrequencyAction: SetFrequencyType = (frequency: string) => {
  return {
    type: SET_FREQUENCY,
    payload: frequency,
  };
};
