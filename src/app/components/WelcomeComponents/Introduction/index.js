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
  const title = ['wow fadeInLeft', styles.title].join(' ');
  const scrollIndicator = ['col-lg-12', styles.scrollIndicator].join(' ');
  const sectionClass = ['hero-section-video-dark', styles.introSection].join(' ');
  const sectionDescription = ['text-center text-white', styles.robotoLight].join(' ');
  const typistCursor = {
    show: true,
    blink: true,
    element: '|',
    hideWhenDone: true,
    hideWhenDoneDelay: 500,

  };
  return (
    <section id="hero" className={sectionClass}>
      <div className={styles.particleContainer}>
        <MeteorShower opacity={0.3} sectionId={2} showMeteor={0}/>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="headlines-wrapper">
              <h1 className={title}></h1>
              <span className="skilltechtypetext">
                <Typist cursor={typistCursor}>
                  Our Stable Foundation
                  <Typist.Backspace count={21} delay={200} />
                  Your Strong Investment
                </Typist>
              </span>
              <div className="mt-5 w-100">
                <div className="col-12 col-sm-6 offset-sm-3">
                  <p className={sectionDescription}>
                    Quillon. A new stable cryptocurrency with an algorithm based central bank supporting a user friendly business to consumer software as a service platform. Featuring state-of-the-art privacy, self-governance, masternodes and a superior user experience.
                  </p>
                </div>
              </div>
              <MoreButton label="Explore"> </MoreButton>
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
