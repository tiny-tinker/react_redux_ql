/*
 * Introduction Section
 *
 * This is the introduction section of Welcome Page
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Typist from 'react-typist';
import MoreButton from '../../MoreButton/index';
import ScrollIndicator from '../../ScrollIndicator';
import planet from '../../../../assets/video/planet.mov';
import poster from '../../../../assets/video/particle-video-v1-dark.jpg';
import * as styles from './style.css';

const IntroductionSection = function IntroductionSection() {
  const title = ['wow fadeInLeft animated', styles.title].join(' ');
  const titlePos = ['headlines-wrapper', styles.pos_title].join(' ');
  const scrollIndicator = ['col-lg-12', styles.scrollIndicator].join(' ');

  return (
    <section id="hero" className="hero-section-video-dark">
      <div className="video-overlay"> </div>
      <div className="stars"> </div>
      <div className="twinkling"> </div>
      <div className="hero-video">
        <video autoPlay loop poster={poster}>
          <source src={planet} type="video/mp4" />
          Your browser does not support the video tag
        </video>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className={title}>INTRODUCTION </h1>
          </div>
          <div className="col-lg-12">
            <div className={titlePos}>
              <span className="skilltechtypetext">
                <Typist>
                  NEW OPPORTUNITY
                  <Typist.Backspace count={15} delay={200} />
                  JUST A CLICK AWAY
                </Typist>
              </span>
              <div className="row mt-5">
                <div className="col-12 col-sm-6 offset-sm-3">
                  <p className="text-center text-white">
                    Quillon. A new cryptocurrency featuring state of the art privacy features, self-governance and masternodes while changing the game through a focus on a superior user experience. Join us now!
                  </p>
                </div>
              </div>
              <MoreButton label="explore"> </MoreButton>
            </div>
          </div>
          <div className={scrollIndicator}>
            <ScrollIndicator />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
