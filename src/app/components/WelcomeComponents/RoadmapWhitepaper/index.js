import React from 'react';
import * as styles from './styles.css';

import PropTypes from 'prop-types';

import dot from '../../../../assets/images/roadmap_dot.png';
import clicked_dot from '../../../../assets/images/roadmap_clicked_dot.png';
import roadmap_line from '../../../../assets/images/roadmap_line.png';

const RoadNode = function RoadNode({id, topic, date}){
  const rotate = [styles.rotated, "rotated"+id].join(" ");
  const activedDot = [styles.img, styles.activeDot].join(" ");
  return(
    <div className={rotate}>
      <div className={styles.text}>
        <div> <span className={styles.span1}> {topic} </span> </div>
        <div> <span className={styles.span2}> {date} </span> </div>
      </div>
      <img src={dot} className={styles.img}/>
      <img src={clicked_dot} className={activedDot}/>
    </div>
  )
};

RoadNode.propTypes = {
  id: PropTypes.string,
  topic:PropTypes.string,
  date:PropTypes.string,
};

const RoadmapSection = function RoadmapSection(){
  const title = ["wow fadeInLeft animated", styles.roadmapTitle].join(" ");
  const subTitle = ["wow fadeInUp  animated", styles.roadmapSubTitle].join(" ");
  const subTitleDetail = [styles.subTitleDetail].join(" ");

  const rotate2 = ["rotated", styles.rotated2].join(" ");
  const rotate3 = ["rotated", styles.rotated3].join(" ");
  const rotate4 = ["rotated", styles.rotated4].join(" ");
  const rotate5 = ["rotated", styles.rotated5].join(" ");
  const rotate6 = ["rotated", styles.rotated6].join(" ");
  const rotate7 = ["rotated", styles.rotated7].join(" ");
  const activeDot = [styles.img, styles.activeDot].join(" ");

  return(
    <section id="roadmap_section">
      <div className={title}>
        ROAD MAP
      </div>
      <div>
        <div className={subTitle}>
          ROAD MAP
        </div>
        <div className={subTitleDetail}>
          quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh im
        </div>
      </div>
      <div className="container">
        <div className="row">
            <div className={styles.main}>
              <img className={styles.roadmap_line} width="1200" src={roadmap_line}/>
              <RoadNode id={"1"} topic={"POW PHASE PERIOD"} date={"JANUARY 30TH 2016"}/>
              <RoadNode id={"2"} topic={"POW PHASE PERIOD"} date={"JANUARY 30TH 2016"}/>
              <RoadNode id={"3"} topic={"SAMPLE TITLE HERE"} date={"JANUARY 30TH 2016"}/>
              <RoadNode id={"4"} topic={"SECOND SAMPLE TITLE HERE"} date={"JANUARY 30TH 2016"}/>
              <RoadNode id={"5"} topic={"SAMPLE TITLE HERE"} date={"JANUARY 30TH 2016"}/>
              <RoadNode id={"6"} topic={"SAMPLE TITLE HERE"} date={"JANUARY 30TH 2016"}/>
              <RoadNode id={"7"} topic={"SAMPLE TITLE HERE"} date={"JANUARY 30TH 2016"}/>

          </div>
        </div>
      </div>
    </section>
  )
};


const RoadmapWhitepaperSection = function RoadmapWhitepaperSection() {
  return(
    <div className="roadmap_whitepaper">
      <RoadmapSection/>
    </div>
  )
};

export default RoadmapWhitepaperSection;
