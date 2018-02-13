import { fromJS } from 'immutable';
import {ROADMAP_SELECTED} from './constants';

const initialState = fromJS({
  roadmaps: [{
    id: '1',
    title: 'POW PHASE PERIOD1',
    date: '1January 30th 2016',
    description: '1Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nt taciton neqtum nunc. Etiatas,  massa nisl quis neque. Sein orci enim',
  }, {
    id: '2',
    title: 'POW PHASE PERIOD2',
    date: '2January 30th 2016',
    description: '2Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nt taciton neqtum nunc. Etiatas,  massa nisl quis neque. Sein orci enim',
  }, {
    id: '3',
    title: 'SAMPLE TITLE HERE',
    date: '3January 30th 2016',
    description: '3Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nt taciton neqtum nunc. Etiatas,  massa nisl quis neque. Sein orci enim',
  }, {
    id: '4',
    title: 'SECOND SAMPLE TITLE HERE',
    date: '4January 30th 2016',
    description: '4Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nt taciton neqtum nunc. Etiatas,  massa nisl quis neque. Sein orci enim',
  }, {
    id: '5',
    title: 'POW PHASE PERIOD5',
    date: '5January 30th 2016',
    description: '5Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nt taciton neqtum nunc. Etiatas,  massa nisl quis neque. Sein orci enim',
  }, {
    id: '6',
    title: 'POW PHASE PERIOD6',
    date: '6January 30th 2016',
    description: '6Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nt taciton neqtum nunc. Etiatas,  massa nisl quis neque. Sein orci enim',
  }, {
    id: '7',
    title: 'POW PHASE PERIOD7',
    date: '7January 30th 2016',
    description: '7Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nt taciton neqtum nunc. Etiatas,  massa nisl quis neque. Sein orci enim',
  }],
  active: 1,
});

export default function roadmapReducer(state = initialState, action) {
  switch (action.type) {
    case ROADMAP_SELECTED:
      return state.set('active', action.payload.id);
    default:
      return state;
  }
}
