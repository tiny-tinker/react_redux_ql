import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles.css';

const Title = function Title({ title }) {
  return (
    <div className="titleEffect">
      {title}
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
