import React from 'react';
import * as styles from './styles.css';

const ConnectSection = function ConnectSection() {
  const title = ['wow fadeInLeft animated', styles.connectTitle].join(' ');
  const connectSubTitle = ['wow fadeInUp', styles.connectSubTitle].join(' ');
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
              <div className="col-md-12 col-lg-12 col-12">
                <div className="row">
                  <div className="col-1">
                    <a href="https://www.facebook.com/quilloncurrency/" target="blank" className={styles.connectIcon}> <i className="fa fa-facebook wow fadeInUp"> </i> </a>
                  </div>
                  <div className="col-1">
                    <a href="https://www.instagram.com/quilloncurrency/" target="blank" className={styles.connectIcon}> <i className="fa fa-instagram wow fadeInUp"> </i> </a>
                  </div>
                  <div className="col-1">
                    <a href="https://twitter.com/QuillonCurrency" target="blank" className={styles.connectIcon}> <i className="fa fa-twitter wow fadeInUp"> </i> </a>
                  </div>
                  <div className="col-1">
                    <a href="https://github.com/QuillonCurrency" target="blank" className={styles.connectIcon}> <i className="fa fa-github wow fadeInUp"> </i> </a>
                  </div>
                  <div className="col-1">
                    <a href="https://www.linkedin.com/company/quillonfoundation/" target="blank" className={styles.connectIcon}> <i className="fa fa-linkedin-square wow fadeInUp"> </i> </a>
                  </div>
                  <div className="col-1">
                    <a href="https://quilloncurrency.slack.com" target="blank" className={styles.connectIcon}> <i className="fa fa-slack wow fadeInUp"> </i> </a>
                  </div>
                  <div className="col-1">
                    <a href="https://medium.com/quillon" target="blank" className={styles.connectIcon}> <i className="fa fa-medium wow fadeInUp"> </i> </a>
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
                  <p> Get Exclusive Content, offers and more by joining our newsletter mailing list </p>
                </div>
                <div className="row">
                  <div className={['col-12 signInputContainer', styles.signInputContainer].join(' ')}>
                    <div id="newsletterSignUpDiv">

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
