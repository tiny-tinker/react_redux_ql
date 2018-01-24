import React from 'react';
import * as styles from './styles.css';
import Title from '../../SectionTitle';

import dot from '../../../../assets/images/roadmap_dot.png';

const RoadmapSection = function RoadmapSection(){
  const subTitle = ["wow fadeInLeft  animated", styles.subTitle].join(" ");

  return(
    <section id="roadmap_section" className="roadmap_section">
      <Title title="ROAD MAP"/>
      <div>
        <div className={subTitle}>
          ROAD MAP
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="row text-center">

            <div className="baseDiv">
              <div>
                <div className={styles.div1}> <span className={styles.span1}> JANUARY 30TH 2016 </span> </div>
                <div  className={styles.div2}> <span className={styles.span2}> POW PHASE PERIOD </span> </div>
              </div>
              <div className={styles.img}> <img src={dot} /> </div>
            </div>

            <div className="baseDiv">
              <div>
                <div className={styles.div1}> <span className={styles.span1}> JANUARY 30TH 2016 </span> </div>
                <div  className={styles.div2}> <span className={styles.span2}> POW PHASE PERIOD </span> </div>
              </div>
              <div className={styles.img}> <img src={dot} /> </div>
            </div>



          </div>
        </div>
      </div>
    </section>
  )
};

export default RoadmapSection;
