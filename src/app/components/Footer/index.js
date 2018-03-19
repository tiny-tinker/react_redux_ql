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
          <div className="col-lg-1 offset-lg-1 col-md-1 col-sm-3"> </div>
          <div className="col-lg-3 offset-lg-1 col-md-3 col-sm-3">
            <dl className={styles.menu}>
              <dd><a href="#hero" className="text-white">1. Links at top menu</a></dd>
              <dd><a href="#join_section" className="text-white">2. Links on network section</a></dd>
              <dd><a href="#connect_section" className="text-white">3. Links in connect area</a></dd>
            </dl>
          </div>
          <div className="col-lg-6 col-sm-6"> </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
