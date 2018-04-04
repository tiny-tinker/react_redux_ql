import React from 'react';
import * as styles from './styles.css';

import ConnectSection from './../Connect';
import TeamSection from './../Team';


const TeamConnectSection = function TeamConnectSection() {
  return (
    <div className="team_connect">
      {/*<div className={styles.stars}> </div>*/}
      {/*<div className={styles.twinkling}> </div>*/}
      <TeamSection />
      <p> </p>
      <ConnectSection />
    </div>
  );
};

export default TeamConnectSection;
