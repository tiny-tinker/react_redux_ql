import React from 'react';
import * as styles from './styles.css';

const BenefitsSection = function BenefitsSection() {
  const subTitle = ["wow fadeInLeft animated", styles.subTitle].join(' ');

  return (
    <section id="benefits_section" className="call-to-section benefits_section">
      <div className={styles.title_1}>OUR</div>
      <div className={styles.title_2}>BENEFITS</div>
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
