import React from 'react';
import * as styles from './styles.css';

const FooterComponent = function FooterComponent() {
  const footerTitle = ['text-white', styles.footerTitle].join(' ');
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-sm-4">
            <div className="text-left">
              <h3 className={footerTitle}> <b>Quillon</b></h3>
              <p className="text-white">  Quillon. A new stable cryptocurrency with an algorithm based central bank supporting a user friendly business to consumer software as a service platform.</p>
            </div>
          </div>
          {/*<div className="col-lg-1 offset-lg-1 col-md-1 col-sm-3"> </div>*/}
          <div className="col-lg-3 offset-lg-1 col-md-3 col-sm-3">
            <dl className={styles.menu}>
              <dd><a href="#hero" className="text-white">Home</a></dd>
              <dd><a href="#benefits_section" className="text-white">Benefits</a></dd>
              <dd><a href="#compare_section" className="text-white">Statistics</a></dd>
              <dd><a href="#join_section" className="text-white">Network</a></dd>
              <dd><a href="#roadmap_section" className="text-white">Roadmap</a></dd>
              <dd><a href="#team_section" className="text-white">Team</a></dd>
            </dl>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3">
            <dl className={styles.menu}>
              <dd><a href="#" className="text-white">Wallets</a></dd>
              <dd><a href="#" className="text-white">Tradesatoshi</a></dd>
              <dd><a href="#" className="text-white">Crytopia</a></dd>
              <dd><a href="#" className="text-white">Masternode Guide</a></dd>
              <dd><a href="#" className="text-white">Mining Pool</a></dd>
            </dl>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-2">
            <dl className={styles.menu}>
              <dd><a href="https://www.facebook.com/quilloncurrency/" target="blank" className="text-white">Facebook</a></dd>
              <dd><a href="https://www.instagram.com/quilloncurrency/" target="blank" className="text-white">Instagram</a></dd>
              <dd><a href="https://twitter.com/QuillonCurrency" target="blank" className="text-white">Twitter</a></dd>
              <dd><a href="https://github.com/QuillonCurrency" target="blank" className="text-white">GitHub</a></dd>
              <dd><a href="https://www.linkedin.com/company/quillonfoundation/" target="blank" className="text-white">LinkedIn</a></dd>
              <dd><a href="https://quilloncurrency.slack.com/" target="blank" className="text-white">Slack</a></dd>
            </dl>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
