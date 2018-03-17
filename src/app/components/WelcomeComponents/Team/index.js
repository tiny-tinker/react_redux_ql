import React from 'react';
import * as styles from './styles.css';

import avatar from '../../../../assets/images/team_avatar2.png';
import avatar1 from '../../../../assets/images/team1_Henning_Lubberding.png';
import avatar2 from '../../../../assets/images/team2_Mark_Reynolds.png';
import avatar3 from '../../../../assets/images/team3_Zachary_Elfman.png';
import avatar4 from '../../../../assets/images/team4_Xinzhe_Li.png';
import avatar5 from '../../../../assets/images/team5_Qiang_Dong.png';
import avatar6 from '../../../../assets/images/team7_John Magdy.png';
import avatar8 from '../../../../assets/images/team8_Chloe_Boc.png';

import teamIn from '../../../../assets/images/team_in.png';
import teamWave from '../../../../assets/images/team_wave.png';


const Profile = function Profile(props) {
  const PersonProfile = ['col-lg-6 col-md-6 col-xs-12', styles.profile].join(' ');
  const Detail = ['col-lg-8', styles.detail].join(' ');
  return (
    <div className={PersonProfile}>
      <div className="row wow fadeInLeft animated">
        <div className="col-lg-4 text-center">
          <a href="#" className="d-block mb-4 h-100">
            <img className={styles.imgCircle} src={props.photo} width="200" height="200" alt="" />
            <img className={styles.teamIn} src={teamIn} alt="" />
          </a>
        </div>
        <div className={Detail}>
          <div className={styles.name}> {props.name} </div>
          <div className={styles.seo}> {props.level} </div>
          <div className={styles.description}>
            {props.description}
          </div>
        </div>
      </div>

    </div>
  );
};

const TeamSection = function TeamSection() {
  const title = ['wow fadeInLeft animated', styles.teamTitle].join(' ');
  const subTitle = ['wow fadeInUp  animated', styles.teamSubTitle].join(' ');
  const profileContainer = ['container', styles.profileContainer].join(' ');

  const teamName = ['Henning Lubberding', 'Mark Reynolds', 'Zachary Elfman', 'Xinzhe Li', 'Qiang Dong', 'John Magdy', 'Damian Thiele', 'Chloe Boc'];
  const teamLevel = ['Founder', 'Head of Development', 'Head of Monetary Policy', 'Senior Developer', 'Senior Developer', 'Designer', 'Legal Advisor', 'Marketing'];
  const teamDescription = ['Experienced PM working on seven figure projects for premier user experience focused B2C unicorn at Dropbox and infrastructure IT giant Micro Focus.',
    'PhD in Computer Science from Boston University and MS in Mathematics from MIT. R&D Wizard. 20+ years of experience in cryptography and IT security. Cypherpunk.',
    'Experienced Macroeconomist with a MS from the London School of Economics. Spend eight years working at various hedgefunds in London.',
    'Full stack developer with seven years of experience in different languages and frameworks. Experienced in Decentralized Exchange and Blockchain technology.',
    'Majored in Computer Networking from Liaoning University of technology. 8 years of experience in web development.',
    'Freelance Designer with a focus on branding and corporate messaging. Educated in electrical engineering and passionate about blockchain technology.',
    'Blockchain and Cryptocurrency enthusiast. Deep professional expertise in privacy law. On top of cryptocurrency regulation. Law Degree from Goethe-University in Frankfurt.',
    'Marketing specialist having worked for Hubspot and previously at Micro Focus. Experienced in implementing and assessing marketing automation strategies.'];
  const teamPhoto = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar, avatar8];
  return (
    <section id="team_section">
      <div className={title}>
        PEOPLE
      </div>
      <div>
        <div className={subTitle}>
          TEAM
        </div>
        <div className={styles.teamDetail}>
          Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nelit. Duis sed od amet nibh
        </div>
      </div>
      <div className={profileContainer}>
        <div className="row">
          <Profile name={teamName[0]} level={teamLevel[0]} description={teamDescription[0]} photo={teamPhoto[0]} />
          <Profile name={teamName[1]} level={teamLevel[1]} description={teamDescription[1]} photo={teamPhoto[1]} />
          <Profile name={teamName[2]} level={teamLevel[2]} description={teamDescription[2]} photo={teamPhoto[2]} />
          <Profile name={teamName[3]} level={teamLevel[3]} description={teamDescription[3]} photo={teamPhoto[3]} />
          <Profile name={teamName[4]} level={teamLevel[4]} description={teamDescription[4]} photo={teamPhoto[4]} />
          <Profile name={teamName[5]} level={teamLevel[5]} description={teamDescription[5]} photo={teamPhoto[5]} />
          <Profile name={teamName[6]} level={teamLevel[6]} description={teamDescription[6]} photo={teamPhoto[6]} />
          <Profile name={teamName[7]} level={teamLevel[7]} description={teamDescription[7]} photo={teamPhoto[7]} />
          {/* <Profile name="Maria" />*/}
          {/* <Profile name="Maria" />*/}
          {/* <Profile name="Maria" />*/}
          {/* <Profile name="Maria" />*/}
          {/* <Profile name="Maria" />*/}
          {/* <Profile name="Maria" />*/}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
