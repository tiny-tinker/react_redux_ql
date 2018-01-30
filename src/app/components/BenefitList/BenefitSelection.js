import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './BenefitSelection.css';

const BenefitSelection = function BenefitSelection() {
  const container = ['row', styles.container].join(' ');
  return (
    <div className={container}>
      <div className={styles.container_img}>
        <img src={require('./../../../assets/images/')}
      </div>
    </div>
  );
};

export default BenefitSelection;
