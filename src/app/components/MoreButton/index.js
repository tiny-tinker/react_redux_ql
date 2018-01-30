import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './style.css';

class MoreButton extends React.Component {
  render() {
    const { label, pressFunction } = this.props;
    const labelClass = ['text-center', styles.label].join(' ');
    return (
      <button onClick={pressFunction} className={styles.orange_btn}>
        <span className={labelClass}>
          { label }
        </span>
      </button>
    );
  }
}

MoreButton.propTypes = {
  label: PropTypes.string,
  pressFunction: PropTypes.func,
};

export default MoreButton;
