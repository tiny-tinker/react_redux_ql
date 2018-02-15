import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './style.css';

class MoreButton extends React.Component {
  render() {
    const { label, pressFunction } = this.props;
    const labelClass = ['text-center', styles.label].join(' ');
    const buttonStyle = {
      width: this.props.btnWidth,
    };

    return (
      <button onClick={pressFunction} className={styles.orange_btn} style={buttonStyle}>
        <span className={labelClass}>
          { label }
        </span>
      </button>
    );
  }
}

MoreButton.defaultProps = {
  btnWidth: '120px',
};

MoreButton.propTypes = {
  label: PropTypes.string,
  pressFunction: PropTypes.func,
  btnWidth: PropTypes.string,
};

export default MoreButton;
