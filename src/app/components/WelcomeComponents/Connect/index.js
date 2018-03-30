import React from 'react';
import * as styles from './styles.css';
import CloudComponent from './../../Cloud';
import MoreButton from './../../MoreButton';

const ConnectSection = function ConnectSection() {
  const title = ['wow fadeInLeft animated', styles.connectTitle].join(' ');
  const connectSubTitle = ['wow fadeInUp  animated', styles.connectSubTitle].join(' ');
  return (
    <section id="connect_section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-10 offset-sm-1 col-12">
            <div className={title}>
              CONNECT
            </div>
            <div className={connectSubTitle}>
              LET'S CONNECT
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-10 offset-sm-1 col-12">
            <div className="row">
              <div className="col-md-12 col-lg-8 col-12">
                <div className="row">
                  <div className="col">
                    <a href="https://www.facebook.com/quilloncurrency/" target="blank" className={styles.connectIcon}> <i className="fa fa-facebook wow fadeInUp  animated"> </i> </a>
                  </div>
                  <div className="col">
                    <a href="https://www.instagram.com/quilloncurrency/" target="blank" className={styles.connectIcon}> <i className="fa fa-instagram wow fadeInUp  animated"> </i> </a>
                  </div>
                  <div className="col">
                    <a href="https://twitter.com/QuillonCurrency" target="blank" className={styles.connectIcon}> <i className="fa fa-twitter wow fadeInUp  animated"> </i> </a>
                  </div>
                  <div className="col">
                    <a href="https://github.com/QuillonCurrency" target="blank" className={styles.connectIcon}> <i className="fa fa-github wow fadeInUp  animated"> </i> </a>
                  </div>
                  <div className="col">
                    <a href="" target="blank" className={styles.connectIcon}> <i className="fa fa-linkedin-square wow fadeInUp  animated"> </i> </a>
                  </div>
                  <div className="col">
                    <a href="" target="blank" className={styles.connectIcon}> <i className="fa fa-slack wow fadeInUp  animated"> </i> </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-12 col-12 mt-md-5">
                <div className={styles.signTitle}>
                  JOIN OUR NEWSLETTER
                </div>
                <div className={styles.signDetail}>
                  <p> get exclusive content, offers and more by joining our newsletter mailing list </p>
                </div>
                <div className="row">
                  <div className={['col-12', styles.signInputContainer].join(' ')}>
                    <div id="newsletterSignUpDiv">
                      {/*<input className={styles.signInput} type="email" placeholder="enter your email address" id="emailInput" required />*/}
                      {/*<div className={styles.signInputBtn} id="btn_submit">*/}
                        {/*<MoreButton label="Sign Up" width="110px" />*/}
                      {/*</div>*/}
                    </div>
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
