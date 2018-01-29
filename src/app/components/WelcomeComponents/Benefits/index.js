import React from 'react';
import * as styles from './styles.css';

const BenefitsSection = function BenefitsSection() {
  const subTitle = ['wow fadeInLeft animated text-left ', styles.subTitle].join(' ');

  return (
    <section id="benefits_section" className="call-to-section benefits_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.title}>OUR <br /> BENEFITS</div>
            <div className={subTitle}>
              <div>OUR <br /> BENEFITS</div>
            </div>
            <p className="mt-5 text-left text-white col-sm-6 offset-sm-3 col-xs-12">Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit  odio s eu felis</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
