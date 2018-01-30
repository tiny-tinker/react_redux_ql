import React from 'react';
import * as styles from './styles.css';

import avatar from '../../../../assets/images/team_avatar2.png';
import teamIn from '../../../../assets/images/team_in.png';
import IconOther from '../../../../assets/images/icon_other.png';


const Profile = function Profile() {
  const PersonProfile = ['col-lg-6 col-md-6 col-xs-12', styles.profile].join(' ');
  const Detail = ['col-lg-8', styles.detail].join(' ');
  return (
    <div className={PersonProfile}>
      <div className="row wow fadeInLeft animated">
        <div className="col-lg-4">
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
          <Profile />
          <Profile />
          <Profile />
        </div>
      </div>
    </section>
  );
};


const ConnectSection = function ConnectSection() {
  const title = ['wow fadeInLeft animated', styles.connectTitle].join(' ');
  const connectSubTitle = ['wow fadeInUp  animated', styles.connectSubTitle].join(' ');
  const lastIcon = ['wow fadeInUp  animated', styles.lastIcon].join(' ');
  return (
    <section id="connect_section">
      <div className={title}>
        CONNECT
      </div>

      <div className={connectSubTitle}>
        LEL'S CONNECT
      </div>
      <p> </p>

      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-8">
            <div className="row">
              <div className="col-2">
                <a href="" className={styles.connectIcon}> <i className="fa fa-facebook wow fadeInUp  animated"> </i> </a>
              </div>
              <div className="col-2">
                <a href="" className={styles.connectIcon}> <i className="fa fa-instagram wow fadeInUp  animated"> </i> </a>
              </div>
              <div className="col-2">
                <a href="" className={styles.connectIcon}> <i className="fa fa-twitter wow fadeInUp  animated"> </i> </a>
              </div>
              <div className="col-2">
                <a href="" className={styles.connectIcon}> <i className="fa fa-github wow fadeInUp  animated"> </i> </a>
              </div>
              <div className="col-2">
                <a href=""> <img src={IconOther} className={lastIcon} />                      </a>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};


const TeamConnectSection = function TeamConnectSection() {
  return (
    <div className="team_connect">
      <TeamSection />
      <p> </p>
      <ConnectSection />
    </div>
  );
};

export default TeamConnectSection;
