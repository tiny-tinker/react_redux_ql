import React from 'react';
import * as styles from './styles.css';

import avatar from '../../../../assets/images/team_avatar2.png';
import teamIn from '../../../../assets/images/team_in.png';
import teamWave from '../../../../assets/images/team_wave.png';


const Profile = function Profile() {
  const PersonProfile = ['col-lg-6 col-md-6 col-xs-12', styles.profile].join(' ');
  const Detail = ['col-lg-8', styles.detail].join(' ');
  return (
    <div className={PersonProfile}>
      <div className="row wow fadeInLeft animated">
        <div className="col-lg-4 text-center">
          <a href="#" className="d-block mb-4 h-100">
            <img className={styles.imgCircle} src={avatar} width="200" height="200" alt="" />
            <img className={styles.teamIn} src={teamIn} alt="" />
          </a>
        </div>
        <div className={Detail}>
          <div className={styles.name}> MARIA THOMPSON </div>
          <div className={styles.seo}> SEO </div>
          <div className={styles.description}>
            Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean s ciosqu ad litora torqiquam massa nisl quis neque. Suspendisse in orci enim
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
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <Profile />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
