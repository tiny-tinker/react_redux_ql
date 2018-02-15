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
import MeteorShower from '../../MeteorShower';
import * as styles from './style.css';

const IntroductionSection = function IntroductionSection() {
  const title = ['wow fadeInLeft animated', styles.title].join(' ');
  const scrollIndicator = ['col-lg-12', styles.scrollIndicator].join(' ');
  const sectionClass = ['hero-section-video-dark', styles.introSection].join(' ');
  const sectionDescription = ['text-center text-white', styles.robotoLight].join(' ');
  return (
    <section id="hero" className={sectionClass}>
      <div className={styles.particleContainer}>
        <MeteorShower opacity={0.3} sectionId={2} />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="headlines-wrapper">
              <h1 className={title}>INTRODUCTION </h1>
              <span className="skilltechtypetext">
                <Typist>
                  NEW OPPORTUNITY
                  <Typist.Backspace count={15} delay={200} />
                  JUST A CLICK AWAY
                </Typist>
              </span>
              <div className="mt-5 w-100">
                <div className="col-12 col-sm-6 offset-sm-3">
                  <p className={sectionDescription}>
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
