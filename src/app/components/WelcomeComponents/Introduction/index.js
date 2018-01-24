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
import planet from '../../../../assets/videos/planet.mov';
import pexles from '../../../../assets/images/pexels.png';
import * as styles from './style.css';

const IntroductionSection = function IntroductionSection() {
  const imgClass = [
    'w-100',
    'position-absolute',
    styles.pexels_img,
  ].join(' ');

  const introductionClass = [
    styles.section_intro,
    'introduction-section',
  ].join(' ');
  return (<section id="introduction_section" className={introductionClass}>
     <div className="container-fluid">
       <div className="row w-100 position-absolute">
         <video className={styles.video_90} autoPlay loop>
           <source src={planet} type="video/mp4" />
           Your browser does not support the video tag
         </video>
         <img src={pexles} className={imgClass} alt="" />
       </div>
       <div className="row">
         <div className="col-lg-12">
           <div id="particles-js"></div>
             <div className="headlines-wrapper">
               <h1 className="text-center">Introduction</h1>
             </div>
         </div>
       </div>
     </div>
  </section>);
};

export default IntroductionSection;
