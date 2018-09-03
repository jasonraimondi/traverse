import { FrequencyType } from '../../../models/Frequency.type';
import { IActionResponse } from '../action-response';

export const SET_FREQUENCY = '[FREQUENCY] Set Frequency';

export type SetFrequencyType = (frequency: FrequencyType) => IActionResponse<string>;

export const setFrequencyAction: SetFrequencyType = (frequency: FrequencyType) => {
  return {
    type: SET_FREQUENCY,
    payload: frequency,
  };
};
