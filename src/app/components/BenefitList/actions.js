import {
  BENEFIT_SELECTED,
} from '../WelcomeComponents/Benefits/constants';

export const selectBenefit = (benefit) => {
  return {
    type: BENEFIT_SELECTED,
    payload: benefit,
  };
};
