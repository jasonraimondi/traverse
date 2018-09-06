import * as dayjs from 'dayjs';

export type FrequencyType = 'daily'|'weekly'|'monthly'|'quarterly'|'yearly';

export function frequencyTypeDate(frequency: FrequencyType, start?: dayjs.Dayjs) {
  let dateJump;

  switch (frequency) {
    case 'daily':
      dateJump = 2; // daily shows 2 days for a better chance at having results
      break;
    case 'weekly':
      dateJump = 7;
      break;
    case 'monthly':
      dateJump = 30;
      break;
    case 'quarterly':
      dateJump = 90;
      break;
    case 'yearly':
      dateJump = 365;
      break;
  }

  if (!start) {
    start = dayjs();
  }

  return {
    to: start.format('YYYY-MM-DD'),
    from: start.add(1, 'day').subtract(dateJump, 'day').format('YYYY-MM-DD'),
  };
}
