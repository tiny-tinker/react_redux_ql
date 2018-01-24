import React from 'react';
import * as styles from './styles.css';
import Title from '../../SectionTitle';

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
    </section>
  )
};

export default RoadmapSection;
