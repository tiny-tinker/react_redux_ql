import {
  BENEFIT_SELECTED,
} from './constants';

export const selectBenefit = (benefit) => {
  console.log('You clicked on benefit: ', benefit.id);
  return {
    type: BENEFIT_SELECTED,
    payload: benefit,
  };
};
