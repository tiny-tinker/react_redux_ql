import React from 'react';
import * as styles from './styles.css';

import dot from '../../../../assets/images/roadmap_dot.png';
import clicked_dot from '../../../../assets/images/roadmap_clicked_dot.png';
import roadmap_line from '../../../../assets/images/roadmap_line.png';

const RoadmapSection = function RoadmapSection(){
  const subTitle = ["wow fadeInLeft  animated", styles.subTitle].join(" ");
  const subTitle_description = ["wow fadeInLeft  animated", styles.subTitle_description].join(" ");
  const rotate1 = ["rotated", styles.rotated1].join(" ");
  const rotate2 = ["rotated", styles.rotated2].join(" ");
  const rotate3 = ["rotated", styles.rotated3].join(" ");
  const rotate4 = ["rotated", styles.rotated4].join(" ");
  const rotate5 = ["rotated", styles.rotated5].join(" ");
  const rotate6 = ["rotated", styles.rotated6].join(" ");
  const rotate7 = ["rotated", styles.rotated7].join(" ");


  return(
    <section id="roadmap_section" className="roadmap_section">
      <div className={styles.titleEffect}>
        ROAD MAP
      </div>
      <div>
        <div className={subTitle}>
          ROAD MAP
        </div>
        <div className={subTitle_description}>
          quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh im
        </div>
      </div>
      <div className="">
        <div className="row">
          <div className="row text-center">

            <div className="main">
              <img id="roadmap_line" width="1200" src={roadmap_line}/>
              <div className={rotate1}>
                <div className="text">
                  <div> <span className={styles.span1}> POW PHASE PERIOD </span> </div>
                  <div> <span className={styles.span2}> JANUARY 30TH 2016 </span> </div>
                </div>
                <img src={dot}/>
                <img src={clicked_dot} className="activeDot"/>
              </div>

              <div className={rotate2}>
                <div className="text">
                  <div> <span className={styles.span1}> POW PHASE PERIOD </span> </div>
                  <div> <span className={styles.span2}> JANUARY 30TH 2016 </span> </div>
                </div>
                <img src={dot}/>
                <img src={clicked_dot} className="activeDot"/>
              </div>

              <div className={rotate3}>
                <div className="text">
                  <div> <span className={styles.span1}> SAMPLE TITLE HERE </span> </div>
                  <div> <span className={styles.span2}> AUGUST 17TH 2016 </span> </div>
                </div>
                <img src={dot}/>
                <img src={clicked_dot} className="activeDot"/>
              </div>

              <div className={rotate4}>
                <div className="text">
                  <div> <span className={styles.span1}> SECOND SAMPLE TITLE HERE </span> </div>
                  <div> <span className={styles.span2}> JANUARY 30TH 2016 </span> </div>
                </div>
                <img src={dot}/>
                <img src={clicked_dot} className="activeDot"/>
              </div>

              <div className={rotate5}>
                <div className="text">
                  <div> <span className={styles.span1}> SAMPLE TITLE HERE </span> </div>
                  <div> <span className={styles.span2}> JANUARY 30TH 2016 </span> </div>
                </div>
                <img src={dot}/>
                <img src={clicked_dot} className="activeDot"/>
              </div>

              <div className={rotate6}>
                <div className="text">
                  <div> <span className={styles.span1}> SAMPLE TITLE HERE </span> </div>
                  <div> <span className={styles.span2}> JANUARY 30TH 2016 </span> </div>
                </div>
                <img src={dot}/>
                <img src={clicked_dot} className="activeDot"/>
              </div>

              <div className={rotate7}>
                <div className="text">
                  <div> <span className={styles.span1}> SAMPLE TITLE HERE </span> </div>
                  <div> <span className={styles.span2}> JANUARY 30TH 2016 </span> </div>
                </div>
                <img src={dot}/>
                <img src={clicked_dot} className="activeDot"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="arrowButton">
              <div id="button_left">  </div>
              <div id="button_right">  </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div>

            </div>
            <div>

            </div>
          </div>
        </div>
      </div>


    </section>
  )
};

export default RoadmapSection;
