import React from 'react';
import * as styles from './styles.css';

const FooterComponent = function FooterComponent(){
  return(
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-sm-3">
              <div className={styles.alignLeft}>
                <span className={styles.title}>quillon</span>
                <p> </p>
                <p className={styles.setWhite}>  orem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, nisi nc. Etiam pharetra, erat sed ferms neque. Suspendisse in orci enim  </p>
              </div>
            </div>
            <div className="col-lg-1 col-sm-1"> </div>
            <div className="col-lg-2 col-sm-2">
              <dl className={styles.alignCenter}>
                <dd><a href="" className={styles.setWhite}>About us</a></dd>
                <dd><a href="" className={styles.setWhite}>Roadmap</a></dd>
                <dd><a href="" className={styles.setWhite}>Connect</a></dd>
              </dl>
            </div>
            <div className="col-lg-6 col-sm-6"> </div>
          </div>
        </div>
      </footer>
  )
};

export default FooterComponent;
