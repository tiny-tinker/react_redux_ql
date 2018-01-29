/*
 * Welcome Page
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import Footer from '../../components/Footer';
import ConnectSection from '../../components/WelcomeComponents/Connect';
import TeamSection from '../../components/WelcomeComponents/Team';
import WhitePaperSection from '../../components/WelcomeComponents/WhitePaper';
import RoadmapSection from '../../components/WelcomeComponents/RoadMap';
import IntroductionSection from '../../components/WelcomeComponents/Introduction';
import BenefitsSection from '../../components/WelcomeComponents/Benefits';

class WelcomePage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <IntroductionSection />
        <BenefitsSection />
      </React.Fragment>
    );
  }
}

export default connect()((WelcomePage));
