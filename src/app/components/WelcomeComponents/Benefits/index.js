import React from 'react';
import { connect, bindActionCreators } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectBenefits } from './selectors';

import * as styles from './styles.css';

import MoreButton from '../../MoreButton';

const BenefitsSection = function BenefitsSection() {
  const title = ['wow fadeInLeft animated', styles.title].join(' ');
  const subTitle = ['wow fadeInLeft animated text-left ', styles.subTitle].join(' ');
  const sectionDescription = ['mt-2 text-left text-white', styles.section_description].join(' ');

  return (
    <section id="benefits_section" className="call-to-section benefits_section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-10 offset-sm-1 col-xs-12">
            <div className={title}>OUR <br /> BENEFITS</div>
            <div className={subTitle}>
              <div>OUR <br /> BENEFITS</div>
              <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <p className={sectionDescription}>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit  odio s eu felis</p>
                </div>
              </div>
              <MoreButton label="learn more" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const mapStateToProps = createStructuredSelector({
  benefits: makeSelectBenefits(),
});

export default connect(mapStateToProps)(BenefitsSection);
