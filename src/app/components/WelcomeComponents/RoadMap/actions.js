import {
  ROADMAP_SELECTED,
} from './constants';

export const selectRoadmap = (roadmap) => {
  console.log('You clicked on roadmap: ', roadmap.id);
  return {
    type: ROADMAP_SELECTED,
    payload: roadmap,
  };
};
