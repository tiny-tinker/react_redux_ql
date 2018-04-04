import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles.css';

class MeteorShower extends React.Component {
  componentDidMount() {
    if (this.props.showMeteor == 1) {
      window.addEventListener('resize', this.updateCanvas.bind(this));
      this.updateCanvas();
    }
  }

  componentDidUpdate() {
    if (this.props.showMeteor == 1) {
      this.updateCanvas();
    }
  }

  componentWillUnmount() {
    if (this.props.showMeteor == 1) {
      window.removeEventListener('resize', this.updateCanvas.bind(this));
    }
  }

  updateCanvas() {
    const background = this.refs.bgCanvas;
    const container = this.refs.cvsContainer;
    const bgCtx = background.getContext('2d');
    const width = container.clientWidth;
    const height = container.clientHeight;
    background.width = width;
    background.height = height;

    // some random points
    let points = [],
      displacement = 140,
      power = Math.pow(2, Math.ceil(Math.log(width) / (Math.log(2))));

    points[0] = (height - (Math.random() * height / 2)) - displacement;
    points[power] = (height - (Math.random() * height / 2)) - displacement;

    // create the rest of the points
    for (let i = 1; i < power; i *= 2) {
      for (let j = (power / i) / 2; j < power; j += power / i) {
        points[j] = ((points[j - (power / i) / 2] + points[j + (power / i) / 2]) / 2) + Math.floor(Math.random() * -displacement + displacement);
      }
      displacement *= 0.6;
    }

    // stars
    function Star(options) {
      this.size = Math.random() * 2;
      this.speed = Math.random() * 0.1;
      this.x = options.x;
      this.y = options.y;
    }

    Star.prototype.reset = function () {
      this.size = Math.random() * 2;
      this.speed = Math.random() * 0.1;
      this.x = width;
      this.y = Math.random() * height;
    };

    Star.prototype.update = function () {
      this.x -= this.speed;
      if (this.x < 0) {
        this.reset();
      } else {
        bgCtx.fillRect(this.x, this.y, this.size, this.size);
      }
    };

    function ShootingStar() {
      this.reset();
    }

    ShootingStar.prototype.reset = function () {
      this.x = Math.random() * width;
      this.y = 0;
      this.len = (Math.random() * 80) + 10;
      this.speed = (Math.random() * 10) + 6;
      this.size = (Math.random() * 1) + 0.1;
      // this is used so the shooting stars arent constant
      this.waitTime = new Date().getTime() + (Math.random() * 3000) + 200;
      this.active = false;
    };

    ShootingStar.prototype.update = function () {
      if (this.active) {
        this.x -= this.speed;
        this.y += this.speed;
        if (this.x < 0 || this.y >= height) {
          this.reset();
        } else {
          bgCtx.lineWidth = this.size;
          bgCtx.beginPath();
          bgCtx.moveTo(this.x, this.y);
          bgCtx.lineTo(this.x + this.len, this.y - this.len);
          bgCtx.stroke();
        }
      } else if (this.waitTime < new Date().getTime()) {
        this.active = true;
      }
    };
    const entities = [];

    // Add 2 shooting stars that just cycle.
    entities.push(new ShootingStar());
    entities.push(new ShootingStar());

    // animate background
    function animate() {
      bgCtx.fillStyle = '#05004c';
      bgCtx.fillRect(0, 0, width, height);
      bgCtx.fillStyle = '#ffffff';
      bgCtx.strokeStyle = '#ffffff';

      let entLen = entities.length;

      while (entLen--) {
        entities[entLen].update();
      }

      requestAnimationFrame(animate);
    }
    animate();
  }

  render() {
    const containerStyle = {
      overflow: 'hidden',
    };

    let bkgImgName = styles.backgroundImg;
    if (this.props.sectionId == 1) {
      bkgImgName = [styles.backgroundImg, styles.roadmapSection].join(' ');
    } else if (this.props.sectionId == 2) {
      bkgImgName = [styles.backgroundImg, styles.introSection].join(' ');
    } else if (this.props.sectionId == 3) {
      bkgImgName = [styles.backgroundImg, styles.networkSection].join(' ');
    }

    return (
      <div className="d-block w-100 h-100 position-relative" ref="cvsContainer" style={containerStyle}>
        <div className={bkgImgName} />
        {/*<div className={styles.stars} />*/}
        {/*<div className={styles.twinkling} />*/}
        <canvas ref="bgCanvas" className={styles.meteor}></canvas>
      </div>
    );
  }
}

MeteorShower.defaultProps = {
  opacity: 1.0,
  sectionId: 0,
  showMeteor: 0,
};

MeteorShower.propTypes = {
  opacity: PropTypes.number,
  sectionId: PropTypes.number,
  showMeteor: PropTypes.number,
};

export default MeteorShower;
