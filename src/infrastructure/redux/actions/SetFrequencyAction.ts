import { IActionResponse } from '@/infrastructure/redux/ActionResponse';
import { FrequencyType } from '@/models/Frequency.type';

export const SET_FREQUENCY = '[FREQUENCY] Set';

export type SetFrequencyActionType = (frequency: FrequencyType) => IActionResponse<string>;

export const SetFrequencyAction: SetFrequencyActionType = (frequency: FrequencyType) => {
  return {
    type: SET_FREQUENCY,
    payload: frequency,
  };
};
