import { fromJS } from 'immutable';
import {BENEFIT_SELECTED} from './constants';

const initialState = fromJS({
  benefits: [{
    id: '1',
    image: 'privacy_conscious.png',
    image_active: 'privacy_conscious_active.png',
    title: 'PRIVACY CONSCIOUS',
    subtitle: 'We believe that a successful currency ensures the privacy of its user. Therefore we have state-of-the-art features to give you the safety you need.',
    description: 'Quillon always keeps your privacy at its heart. We are aiming to ensure the security of your personal information at all times. To do so we are are hiding the sender address, the recipient as well as not providing a rich list. We have an implementation of the LibZeroCoin protocol which we are working had to improve upon to create a superior user experience. In the next few months we intend to roll out both a TOR Network integration and a double anonymous send and receive model. Quillon will always aim to improve its security and privacy features. ',
  }, {
    id: '2',
    image: 'community_oriented.png',
    image_active: 'community_oriented_active.png',
    title: 'COMMUNITY ORIENTED',
    subtitle: 'A currencies success depends on its community. Therefore we allow our community to play an active part in defining the future of Quillon through our self-governance and voting mechanisms.',
    description: 'Our community is vital to us and will be our primary focus. We are building a strong network using existing solutions like Slack, Twitter, Telegram and more to stay in contact with our community and to make sure we hear their feedback at all times. More than that we aim to allow the holders of a Masternode to vote on proposals to make Quillon a truly self-governing currency which always acts in the interest of its stakeholders. To facilitate community interaction and allow it to add value we will further make sure to offer bounties to allow and reward individual contribution',
  }, {
    id: '3',
    image: 'user_focused.png',
    image_active: 'user_focused_active.png',
    title: 'USER FOCUSED',
    subtitle: 'Simplifying the way people interact with cryptocurrencies is paramount for mainstream adoption. An inclusive user experience is the goal of everything we do.',
    description: 'Our user focus extends beyond taking part in deciding our roadmap. It is our aim to provide everyone a superior user experience through interactive tutorials, video guides, in depth documentation and explanations of our features. We believe that currently cryptocurrencies are too exclusive and don’t allow for many people to take part in them either through mining, staking, hosting a masternode or simply owning them. Simplifying access, availability, usability and in doing so reducing the barriers that currently exist and prohibit mainstream adoption. We intend to do so both through a superior web experience as well as by providing easy API access to our solution',
  }, {
    id: '4',
    image: 'decentralized.png',
    image_active: 'decentralized_active.png',
    title: 'DECENTRALIZED',
    subtitle: 'The simplicity of our staking mechanism aims to facilitate both a decentralized network and decentralized governance for Quillon. They are core to our success. ',
    description: 'Quillon aims to become a truly decentralized currency which provides a reward to everyone holding the currency and will enable the abiliy for everyone to help with finding new blocks along the blockchain via the so-called proof of stake algorithm. To ensure for existing coins to be distributed evenly in the early stages of our currency we will utilize mining similar to well-known currencies like bitcoin. A fully decentralized governance through community agreed budgeting and spreading our coins to a wide range of potential stakeholders through faucets, bounties and giveaways will ensure that Quillon actually becomes a safe investment for the privacy oriented layman.  ',
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
