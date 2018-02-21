import { createSelector } from 'reselect';

const selectRoadmap = (state) => state.get('roadmap');
const makeSelectRoadmaps = () => createSelector(
  selectRoadmap,
  (roadmapState) => roadmapState.get('roadmaps').toJS(),
);

const activeRoadmap = (state) => state.get('roadmap').get('roadmaps').toJS().find((item) => item.id == state.get('roadmap').get('active'));

const makeActiveRoadmap = () => createSelector(
  activeRoadmap,
  (roadmap) => roadmap
);
export {
  selectRoadmap,
  makeSelectRoadmaps,
  makeActiveRoadmap,
};
