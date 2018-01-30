import { fromJS } from 'immutable';

const initialState = fromJS({
  benefits: [{
    image: 'privacy_conscious.png',
    image_active: 'privacy_conscious_active.png',
    title: 'PRIVACY CONSCIOUS',
    subtitle: 'Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitubh ved ut impem',
    description: 'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in el fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim',
  }, {
    image: 'community_oriented.png',
    image_active: 'community_oriented_active.png',
    title: 'COMMUNITY ORIENTED',
    subtitle: 'Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitubh ved ut impem',
    description: 'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in el fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim',
  }, {
    image: 'user_focused.png',
    image_active: 'user_focused_active.png',
    title: 'USER FOCUSED',
    subtitle: 'Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitubh ved ut impem',
    description: 'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in el fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim',
  }, {
    image: 'decentralized.png',
    image_active: 'decentralized_active.png',
    title: 'COMMUNITY ORIENTED',
    subtitle: 'Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitubh ved ut impem',
    description: 'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in el fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim',
  }],
});

export default function benefitReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
