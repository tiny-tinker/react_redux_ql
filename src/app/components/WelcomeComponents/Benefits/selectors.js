import { createSelector } from 'reselect';

const selectBenefit = (state) => state.get('benefit');
const makeSelectBenefits = () => createSelector(
  selectBenefit,
  (benefitState) => benefitState.get('benefits').toJS(),
);

export {
  selectBenefit,
  makeSelectBenefits,
};
