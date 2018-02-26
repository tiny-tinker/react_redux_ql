import React from 'react';
import MeteorShower from '../../MeteorShower';
import * as styles from './styles.css';

import RoadmapSection from '../RoadMap';
import WhitePaperSection from './../WhitePaper';

const RoadmapWhitepaperSection = function RoadmapWhitepaperSection() {
  return (
    <div className="roadmap_whitepaper call-to-section">
      <div className={styles.particleContainer}>
        <MeteorShower opacity={0.9} sectionId={1} />
      </div>
      <RoadmapSection />
      <WhitePaperSection />
    </div>
  );
};

export default RoadmapWhitepaperSection;
