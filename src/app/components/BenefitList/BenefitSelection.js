import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './BenefitSelection.css';

const BenefitSelection = function BenefitSelection({ benefit, handleClick }) {
  const container = ['row', styles.container].join(' ');
  const imgSrc = require(`./../../../assets/images/${benefit.image}`);

  return (
    <a onClick={() => handleClick(benefit)} className={container}>
      <div className={styles.container_img}>
        <img src={imgSrc} />
      </div>
      <div>
        <div className={styles.title}>
          { benefit.title }
        </div>
        <p className={styles.sub_title}>
          { benefit.subtitle }
        </p>
      </div>
    </a>
  );
};

BenefitSelection.propTypes = {
  benefit: PropTypes.object,
  benefitClick: PropTypes.func,
};

export default BenefitSelection;
