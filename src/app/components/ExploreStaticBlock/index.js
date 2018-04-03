import React from 'react';
import Waypoint from 'react-waypoint';
import PropTypes from 'prop-types';
import CountUp, { startAnimation } from 'react-countup';
import * as styles from './styles.css';

class ExploreStaticBlock extends React.Component {
  constructor(props) {
    super(props);
    this.handleWaypointEnter = this.handleWaypointEnter.bind(this);
    this.state = { bAnimationTriggered: false};
  }

  handleWaypointEnter() {
    if (this.state.bAnimationTriggered == false) {
      this.state.bAnimationTriggered = true;
      startAnimation(this.myCountUp);
    }
  }

  render() {
    const { imgName, name, value } = this.props;
    const imgSrc = require(`./../../../assets/images/${imgName}`);
    const imgClass = ['mb-3', styles.img].join(' ');
    const valueClass = ['wow mt-3', styles.value].join(' ');
    const newName = name.split('\\n').map((item, i) => <h4 className={styles.name} key={i}>{item}</h4>);
    return (
      <React.Fragment>
        <img className={imgClass} src={imgSrc} role="presentation" />
        <div className="clearfix" />
        {newName}
        <h4 className={valueClass}>
          <Waypoint
            onEnter={this.handleWaypointEnter}
          />
          <CountUp
            start={0}
            end={value}
            seperator="."
            duration={2.75}
            redraw="true"
            useEasing="true"
            ref={(countUp) => {
              this.myCountUp = countUp;
            }}
          />
        </h4>
      </React.Fragment>
    );
  }
}

ExploreStaticBlock.propTypes = {
  imgName: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
};

export default ExploreStaticBlock;
