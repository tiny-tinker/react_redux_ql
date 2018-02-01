import { fromJS } from 'immutable';
import {BENEFIT_SELECTED} from './constants';

const initialState = fromJS({
  benefits: [{
    id: '1',
    image: 'privacy_conscious.png',
    image_active: 'privacy_conscious_active.png',
    title: 'PRIVACY CONSCIOUS',
    subtitle: 'Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitubh ved ut impem',
    description: 'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in el fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim',
  }, {
    id: '2',
    image: 'community_oriented.png',
    image_active: 'community_oriented_active.png',
    title: 'COMMUNITY ORIENTED',
    subtitle: 'Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitubh ved ut impem',
    description: 'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in el fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim',
  }, {
    id: '3',
    image: 'user_focused.png',
    image_active: 'user_focused_active.png',
    title: 'USER FOCUSED',
    subtitle: 'Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitubh ved ut impem',
    description: 'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in el fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim',
  }, {
    id: '4',
    image: 'decentralized.png',
    image_active: 'decentralized_active.png',
    title: 'DECENTRALIZED',
    subtitle: 'Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitubh ved ut impem',
    description: 'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in el fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim',
  }],
  active: 1,
});

export default function benefitReducer(state = initialState, action) {
  switch (action.type) {
    case BENEFIT_SELECTED:
      return state.set('active', action.payload.id);
    default:
      return state;
  }
}
