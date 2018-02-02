import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles.css';

import dot from '../../../assets/images/roadmap_dot.png';
import clicked_dot from '../../../assets/images/roadmap_clicked_dot.png';

class RoadNode extends React.Component{
  render(){
    const {roadmap, handleClick} = this.props;
    const rotate = [styles.rotated, "rotated"+roadmap.id, "rotatedDiv"].join(" ");
    const activedDotShow = [styles.img, styles.activeDotShow].join(" ");
    const activedDotHide = [styles.img, styles.activeDotHide].join(" ");
    return(
      <div className={rotate} onClick={() => handleClick(roadmap)}>
        <div className={styles.text}>
          <div> <span className={styles.span1}> {roadmap.title} </span> </div>
          <div> <span className={styles.span2}> {roadmap.date} </span> </div>
        </div>
        <img src={dot} className={styles.img}/>
        <img src={clicked_dot} className={activedDotHide}/>
      </div>
    );
  }
}

RoadNode.propTypes = {
  roadmap: PropTypes.object,
  roadmapClick: PropTypes.func,
};

export default RoadNode;
