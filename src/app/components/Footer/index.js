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
              <h3 className={footerTitle}> <b>quillon</b></h3>
              <p className="text-white">  Quillon. A new stable cryptocurrency with an algorithm based central bank supporting a user friendly business to consumer software as a service platform.</p>
            </div>
          </div>
          {/*<div className="col-lg-1 offset-lg-1 col-md-1 col-sm-3"> </div>*/}
          <div className="col-lg-3 offset-lg-1 col-md-3 col-sm-3">
            <dl className={styles.menu}>
              <dd><a href="#hero" className="text-white">Home</a></dd>
              <dd><a href="#" className="text-white">Benefits</a></dd>
              <dd><a href="#" className="text-white">Statistics</a></dd>
              <dd><a href="#" className="text-white">Network</a></dd>
              <dd><a href="#" className="text-white">Roadmap</a></dd>
              <dd><a href="#" className="text-white">Team</a></dd>
            </dl>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3">
            <dl className={styles.menu}>
              <dd><a href="#hero" className="text-white">Wallets</a></dd>
              <dd><a href="#" className="text-white">- Windows</a></dd>
              <dd><a href="#" className="text-white">- Linux</a></dd>
              <dd><a href="#" className="text-white">- Mac OS</a></dd>
              <dd><a href="#" className="text-white">Tradesatoshi</a></dd>
              <dd><a href="#" className="text-white">Crytopia</a></dd>
              <dd><a href="#" className="text-white">Masternode Guide</a></dd>
              <dd><a href="#" className="text-white">Mining Pool</a></dd>
            </dl>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-2">
            <dl className={styles.menu}>
              <dd><a href="#hero" className="text-white">Facebook</a></dd>
              <dd><a href="#" className="text-white">Instagram</a></dd>
              <dd><a href="#" className="text-white">Twitter</a></dd>
              <dd><a href="#" className="text-white">GitHub</a></dd>
            </dl>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
