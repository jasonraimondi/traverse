import { ActionResponse } from 'Interfaces.ts';
import { FrequencyType } from '@/models/Frequency.type';

export const SET_FREQUENCY = '[FREQUENCY] Set';

export type SetFrequencyActionType = (frequency: FrequencyType) => ActionResponse<string>;

export const SetFrequencyAction: SetFrequencyActionType = (frequency: FrequencyType) => {
  return {
    type: SET_FREQUENCY,
    payload: frequency,
  };
};
