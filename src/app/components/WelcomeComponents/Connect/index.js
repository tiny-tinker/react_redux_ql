import React from 'react';
import * as styles from './styles.css';
import CloudComponent from './../../Cloud';

import IconOther from '../../../../assets/images/icon_other.png';

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

          <CloudComponent />
          <div className="col-sm-9 col-md-8">
            <div className="row">
              <div className="col-2">
                <a href="#" className={styles.connectIcon}> <i className="fa fa-facebook wow fadeInUp  animated"> </i> </a>
              </div>
              <div className="col-2">
                <a href="#" className={styles.connectIcon}> <i className="fa fa-instagram wow fadeInUp  animated"> </i> </a>
              </div>
              <div className="col-2">
                <a href="#" className={styles.connectIcon}> <i className="fa fa-twitter wow fadeInUp  animated"> </i> </a>
              </div>
              <div className="col-2">
                <a href="#" className={styles.connectIcon}> <i className="fa fa-github wow fadeInUp  animated"> </i> </a>
              </div>
              <div className="col-2">
                <a href="#"> <img src={IconOther} className={lastIcon} /> </a>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};

export default ConnectSection;
