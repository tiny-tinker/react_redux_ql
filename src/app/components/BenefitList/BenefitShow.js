import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './BenefitShow.css';

const BenefitShow = function BenefitShow({ activeBenefit }) {
  const titleContainer = ['row', styles.title_container].join(' ');
  const imgSrc = require(`./../../../assets/images/${activeBenefit.image_active}`);
  const dividerClass = ['d-none d-md-block', styles.divider].join(' ');
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={titleContainer}>
          <div className={styles.container_img}>
            <img src={imgSrc} />
          </div>
          <div className={styles.title}>
            {activeBenefit.title}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className={styles.description}>
              {activeBenefit.description}
            </p>
          </div>
        </div>
      </div>
      <hr className={dividerClass} />
    </React.Fragment>
  );
};

BenefitShow.propTypes = {
  activeBenefit: PropTypes.object,
};

export default BenefitShow;
