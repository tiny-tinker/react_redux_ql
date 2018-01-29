import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './style.css';

class MoreButton extends React.Component {
  render() {
    const { label, pressFunction } = this.props;

    return (
      <button onClick={pressFunction} className={styles.orange_btn}>
        <span className="text-center">
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
