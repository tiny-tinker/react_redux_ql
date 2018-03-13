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
              <p className="text-white">  lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, nisi nc. Etiam pharetra, erat sed ferms neque. Suspendisse in orci enim</p>
            </div>
          </div>
          <div className="col-lg-2 offset-lg-1 col-md-2 col-sm-3"> </div>
          <div className="col-lg-2 offset-lg-1 col-md-2 col-sm-3">
            <dl className={styles.menu}>
              <dd><a href="" className="text-white">About us</a></dd>
              <dd><a href="" className="text-white">Roadmap</a></dd>
              <dd><a href="" className="text-white">Connect</a></dd>
              <dd><a href="" className="text-white">Wallets</a></dd>
              <dd><a href="" className="text-white">Exchanges</a></dd>
              <dd><a href="" className="text-white">Mining pool</a></dd>
              <dd><a href="" className="text-white">Guides</a></dd>
            </dl>
          </div>
          <div className="col-lg-6 col-sm-6"> </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
