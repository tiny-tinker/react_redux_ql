import React from 'react';
import * as styles from './styles.css';

import RoadmapSection from './../RoadMap';
import WhitePaperSection from './../WhitePaper';
import MeteorShowerRoadmap from './../../MeteorShowerRoadmap';


const RoadmapWhitepaperSection = function RoadmapWhitepaperSection() {
  return (
    <div className="roadmap_whitepaper">
      <MeteorShowerRoadmap opacity={0.3} />
      <RoadmapSection />
      <WhitePaperSection />
    </div>
  );
};

export default RoadmapWhitepaperSection;
