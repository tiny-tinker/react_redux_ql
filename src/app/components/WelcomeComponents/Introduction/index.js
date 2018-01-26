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
import planet from '../../../../assets/video/planet.mov';
import poster from '../../../../assets/video/particle-video-v1-dark.jpg';

const IntroductionSection = function IntroductionSection() {
  return (
    <section id="hero" className="hero-section-video-dark">
      <div className="video-overlay"> </div>
      <div className="hero-video">
        <video autoPlay loop poster={poster}>
          <source src={planet} type="video/mp4" />
          Your browser does not support the video tag
        </video>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="headlines-wrapper">
              <span className="skilltechtypetext">
                <span className="typed-cursor">|</span>
              </span>
              <p className="mt-5 text-center text-white">Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollici</p>
              <p className="text-center text-white">tudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagi</p>
              <p className="text-center text-white">tis sem nibh id elit. Duis sed odio s eu felis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
