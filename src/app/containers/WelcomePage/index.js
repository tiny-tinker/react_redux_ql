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
import TeamConnectSection from '../../components/WelcomeComponents/TeamConnect';
import RoadmapWhitepaperSection from '../../components/WelcomeComponents/RoadmapWhitepaper';
import IntroductionSection from '../../components/WelcomeComponents/Introduction';
import BenefitsSection from '../../components/WelcomeComponents/Benefits';


class WelcomePage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <IntroductionSection />
        <BenefitsSection />
        <RoadmapWhitepaperSection />
        <TeamConnectSection />
        <Footer />
      </React.Fragment>
    );
  }
}

export default connect()((WelcomePage));
