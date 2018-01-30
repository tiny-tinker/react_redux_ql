import React from 'react';
import * as styles from './styles.css';

import IconOther from '../../../../assets/images/icon_other.png';

const ConnectSection = function ConnectSection() {
  const subTitle =["wow fadeInLeft  animated", styles.subTitle].join(" ");

  return(
    <section id="connect_section" className="connect_section">
      <div className={styles.title}>
        CONNECT
      </div>

      <div className={subTitle}>
        LEL'S CONNECT
      </div>
      <p> </p>
      <p> </p>
      <p> </p>
      <p> </p>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-8">
            <div className="row">
              <div className="col-2">
                <a href="" className={styles.connectIcon}> <i className="fa fa-facebook"> </i> </a>
              </div>
              <div className="col-2">
                <a href="" className={styles.connectIcon}> <i className="fa fa-instagram"> </i> </a>
              </div>
              <div className="col-2">
                <a href="" className={styles.connectIcon}> <i className="fa fa-twitter"> </i> </a>
              </div>
              <div className="col-2">
                <a href="" className={styles.connectIcon}> <i className="fa fa-github"> </i> </a>
              </div>
              <div className="col-2">
                <a href=""> <img src={IconOther} className={styles.lastIcon}/>  </a>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  )
};

export default ConnectSection;
