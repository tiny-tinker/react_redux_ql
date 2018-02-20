import React from 'react';
import * as styles from './styles.css';
import CloudComponent from './../../Cloud';

const ConnectSection = function ConnectSection() {
  const title = ['wow fadeInLeft animated', styles.connectTitle].join(' ');
  const connectSubTitle = ['wow fadeInUp  animated', styles.connectSubTitle].join(' ');
  return (
    <section id="connect_section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-10 offset-sm-1 col-xs-12">
            <div className={title}>
              CONNECT
            </div>
            <div className={connectSubTitle}>
              LET'S CONNECT
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-10 offset-sm-1 col-xs-12">
            <div className="row">
              <div className="col-sm-6">
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
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
export default ConnectSection;
