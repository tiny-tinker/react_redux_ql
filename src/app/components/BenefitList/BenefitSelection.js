import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './BenefitSelection.css';

const BenefitSelection = function BenefitSelection({ benefit, handleClick, activeId }) {
  const container = ['row', styles.container].join(' ');
  let titleClass;
  let imgSrc;

  imgSrc = require(`./../../../assets/images/${benefit.image}`);
  if (benefit.id != activeId) {
    imgSrc = require(`./../../../assets/images/${benefit.image}`);
    titleClass = styles.title;
  } else {
    imgSrc = require(`./../../../assets/images/${benefit.image_active}`);
    titleClass = [styles.title, styles.title_active].join(' ');
  }

  return (
    <div onClick={() => handleClick(benefit)} className={container}>
      <div className={styles.container_img}>
        <img src={imgSrc} />
      </div>
      <div>
        <div className={titleClass}>
          { benefit.title }
        </div>
        <p className={styles.sub_title}>
          { benefit.subtitle }
        </p>
      </div>
    </div>
  );
};


BenefitSelection.propTypes = {
  benefit: PropTypes.object,
  handleClick: PropTypes.func,
  activeId: PropTypes.string,
};

export default BenefitSelection;
