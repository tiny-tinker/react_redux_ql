import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles.css';

class RoadmapShow extends React.Component{

  componentDidUpdate(){
    this.reanimateAnimation();
  }

  reanimateAnimation() {
    const container = this.refs.container;

    container.classList.remove("wow");
    container.classList.remove("fadeInRight");
    container.classList.remove("animated");
    // container.classList.remove("fadeIn");
    // console.log(container.classList);

    setTimeout(() =>{
      container.classList.add("wow");
      container.classList.add("fadeInRight");
      container.classList.add("animated");
      //container.classList.add("fadeIn");
      }, 10);
  }
  render() {
    const roadDiv = [styles.roadDiv, "fadeIn"].join(" ");
    const activeRoadmap = this.props.activeRoadmap;

    return(
      <div className="col-sm-6">
        <div ref="container" className={styles.roadDiv} id="roadDescription">
          <div className={styles.roadDetailTitle}> {activeRoadmap.title} </div>
          <div className={styles.roadDetailDate}> {activeRoadmap.date} </div>
          <div className={styles.roadDetails}>
            {activeRoadmap.description}
          </div>
        </div>
      </div>
    );
  }
}

RoadmapShow.propTypes = {
  activeRoadmap: PropTypes.object,
};

export default RoadmapShow;

