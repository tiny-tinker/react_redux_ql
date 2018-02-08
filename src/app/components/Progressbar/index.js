import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles.css';

class Progressbar extends React.Component {

  render() {
    let width = (this.props.valueNow - this.props.valueMin) * 100 / (this.props.valueMax - this.props.valueMin);
    width += '%';
    const progressbarStyle = {
      backgroundImage: `linear-gradient(to right,${this.props.color1},${this.props.color2} 100%)`,
      borderRadius: this.props.borderRadius,
      width,
    };

    const progressStyle = {
      height: this.props.height,
      background: 'rgb(112,112,112)',
      borderRadius: this.props.borderRadius,
    };

    return (
      <div className="progress" style={progressStyle}>
        <div className="progressBar wow animated gradient h-100" style={progressbarStyle} role="progressbar">
        </div>
      </div>
    );
  }
}

Progressbar.defaultProps = {
  color1: 'white',
  color2: 'white',
  height: '16px',
  valueMin: 0,
  valueMax: 100,
  valueNow: 25,
  borderRadius: '30px',
};

Progressbar.propTypes = {
  color1: PropTypes.string,
  color2: PropTypes.string,
  height: PropTypes.string,
  valueMin: PropTypes.number,
  valueMax: PropTypes.number,
  valueNow: PropTypes.number,
  borderRadius: PropTypes.string,
};

export default Progressbar;
