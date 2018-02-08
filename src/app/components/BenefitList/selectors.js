import { createSelector } from 'reselect';

const selectBenefit = (state) => state.get('benefit');
const makeSelectBenefits = () => createSelector(
  selectBenefit,
  (benefitState) => benefitState.get('benefits').toJS(),
);

const activeBenefit = (state) => state.get('benefit').get('benefits').toJS().find((item) => item.id == state.get('benefit').get('active'));

const makeActiveBenefit = () => createSelector(
  activeBenefit,
  (benefit) => [benefit]
);
export {
  selectBenefit,
  makeSelectBenefits,
  makeActiveBenefit,
};
