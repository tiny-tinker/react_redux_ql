import React from 'react';
import * as styles from './styles.css';
import Title from '../../SectionTitle';

import avatar from '../../../../assets/images/team_avatar2.png';
import teamIn from '../../../../assets/images/team_in.png';


const Profile = function Profile() {
  const PersonProfile = ["col-lg-6 col-md-6 col-xs-12", styles.profile].join(" ");
  const Dtail = ["col-lg-8", styles.detail].join(" ");
  return (
    <div className={PersonProfile}>
      <div className="row">
        <div className="col-lg-4">
          <a href="#" className="d-block mb-4 h-100">
            <img className={styles.imgCircle} src={avatar} width = "250" height = "250" alt=""/>
            <img className={styles.teamIn} src={teamIn}  alt=""/>
          </a>
        </div>
        <div className={Dtail}>
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
  const subTitle =["wow fadeInLeft  animated", styles.subTitle].join(" ");

  return(
    <section id="team_section" className="team_section">
      <Title title="PEOPLE"/>
      <div>
        <div className={subTitle}>
          TEAM
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="row text-center">

            <Profile/>
            <Profile/>
            <Profile/>
            <Profile/>
            <Profile/>
            <Profile/>
            <Profile/>

          </div>
        </div>
      </div>
    </section>
  )
};

export default TeamSection;
