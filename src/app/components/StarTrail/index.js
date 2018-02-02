import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles.css';

class StarTrail extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }
  componentDidUpdate() {
    this.updateCanvas();
  }
  updateCanvas() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    const { random, PI, max } = Math;

    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    const size = 1900 * window.devicePixelRatio * 2;
    const center = {
      x: size / 2,
      y: size / 2,
    };
    canvas.width = size;
    canvas.height = size;
    function circle(x, y) {
      const amt = random() * 0.125 + 0.0125;
      for (let i = 0; i < 1900; i += random() * 5 + 1) {
        const offset = random() * 280;
        const radius = random() * size + 10;

        ctx.strokeStyle = `rgba(255,255,255,${random()}`;
        ctx.lineWidth = 0.025 + random() * 0.25;
        ctx.beginPath();
        ctx.arc(x, y, radius, offset * 2 * PI, amt * 2 * PI + offset * 2 * PI);
        ctx.stroke();
      }
    }
    circle(center.x, center.y);
  }

  render() {
    return (
      <canvas className={styles.starTrail} ref="canvas" />
    );
  }
}

export default StarTrail;
