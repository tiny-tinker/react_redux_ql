import React from 'react';
import * as styles from './styles.css';

import RoadmapSection from './../RoadMap';
import WhitePaperSection from './../WhitePaper';
import StarTwinkling1 from './../../StarTwinkling1';
import StarTrail from './../../StarTrail';


const RoadmapWhitepaperSection = function RoadmapWhitepaperSection() {
  return (
    <div className="roadmap_whitepaper">
      <RoadmapSection />
      <WhitePaperSection />
    </div>
  );
};

export default RoadmapWhitepaperSection;
