import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles.css';

const ExploreStaticBlock = function ExploreStaticBlock({ imgName, name, value }) {
  const imgSrc = require(`./../../../assets/images/${imgName}`);
  const imgClass = ['mb-3', styles.img].join(' ');
  const valueClass = ['mt-3', styles.value].join(' ');
  const newName = name.split('\\n').map((item, i) => {
    return <h4 className={styles.name} key={i}>{item}</h4>;
  });
  return (
    <React.Fragment>
      <img className={imgClass} src={imgSrc} role="presentation" />
      <div className="clearfix" />
      {newName}
      <h4 className={valueClass}>{value}</h4>
    </React.Fragment>
  );
};

ExploreStaticBlock.propTypes = {
  imgName: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
};

export default ExploreStaticBlock;
