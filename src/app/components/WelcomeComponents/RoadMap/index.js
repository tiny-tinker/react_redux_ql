import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Parallax, Background } from 'react-parallax';
import PropTypes from 'prop-types';

import { makeSelectRoadmaps, makeActiveRoadmap } from './selectors';
import * as actions from './actions';
import * as styles from './styles.css';

import RoadNode from '../../RoadmapSelection';


import roadmap_item1 from '../../../../assets/images/roadmap_item1.png';
import roadmap_item2 from '../../../../assets/images/roadmap_item2.png';
import roadmap_item3 from '../../../../assets/images/roadmap_item3.png';
import roadmap_item4 from '../../../../assets/images/roadmap_item4.png';
import roadmap_item5 from '../../../../assets/images/roadmap_item5.png';
import roadmap_item6 from '../../../../assets/images/roadmap_item6.png';
import roadmap_item7 from '../../../../assets/images/roadmap_item7.png';
import roadmap_item8 from '../../../../assets/images/roadmap_item8.png';
import roadmap_item9 from '../../../../assets/images/roadmap_item9.png';
import roadmap_item10 from '../../../../assets/images/roadmap_item10.png';

import arrow_up from '../../../../assets/images/arrow_up.png';
import arrow_down from '../../../../assets/images/arrow_down.png';
import roadmap_line_new from '../../../../assets/images/roadmap_line_vertical.png';
import roadmap_cloud from '../../../../assets/images/roadmap_cloud.png';

class RoadmapSection extends React.Component {

  static createRoadmapItems(roadmaps, roadmapClick, activeRoadmap) {
    // console.log(this.props.roadmaps);
    return roadmaps.map((roadmap) => (
      <RoadNode key={roadmap.id} roadmap={roadmap} handleClick={roadmapClick} activeId={activeRoadmap.id} />
    ));
  }

  render() {
    const title = ['wow fadeInLeft animated', styles.roadmapTitle].join(' ');
    const subTitle = ['wow fadeInUp', styles.roadmapSubTitle].join(' ');
    const subTitleDetail = [styles.subTitleDetail].join(' ');

    const arrowDiv = ['col-2', styles.arrowDiv].join(' ');
    const roadCol6 = ['col-sm-6', styles.roadCol6].join(' ');
    const roadRow = ['row pl-5', styles.roadRow].join(' ');
    const carousel = ['col-md-1', 'carousel', styles.carousel].join(' ');
    const linedot = ['col-md-2', styles.line_dot_Div].join(' ');
    const roadDiv = ['wow fadeInRight', styles.roadDiv].join(' ');

    return (
      <div id="roadmap_section">
        <div className={title}>
          ROADMAP
        </div>
        <div>
          <div className={subTitle}>
            ROADMAP
          </div>
          <div className={subTitleDetail}>
            <p> Take a look at our roadmap to see how we intent to fulfill our vision. Over the coming weeks and months we have a lot in store to bring you the most successful currency possible! </p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className={arrowDiv}>
              <div className="row">
                <img src={arrow_up} id="arrow_up" width="50" height="50" />
              </div>
              <div className="row">
                <img src={arrow_down} id="arrow_down" width="50" height="50" />
              </div>
            </div>
            <div className={roadCol6}>
              <div className={roadRow}>
                <div className="col-md-8">
                </div>
                <div className={carousel}>
                  <img src={roadmap_item1} />
                  <img src={roadmap_item2} />
                  <img src={roadmap_item3} />
                  <img src={roadmap_item4} />
                  <img src={roadmap_item5} />
                  <img src={roadmap_item6} />
                  <img src={roadmap_item7} />
                  <img src={roadmap_item8} />
                  <img src={roadmap_item9} />
                  <img src={roadmap_item10} />
                </div>
                <div className={linedot}>
                  <img src={roadmap_line_new} className={styles.roadmap_line_new} />
                  <div className={styles.dotDiv}>
                    <div id="dot_up" />
                    <div id="dot_down" />
                    <div id="dot_bright" />
                  </div>
                </div>
                <div className="col-md-1">
                </div>
              </div>
            </div>
            <div className="col-md-6 col-10">
              <div className={roadDiv} id="roadDiv">
                <div className={styles.roadDetailTitle} id="itemTitle"> 1POW PHASE PERIOD </div>
                <div className={styles.roadDetails} id="itemDetail">
                  1Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nt taciton neqtum nunc. Etiatas,  massa nisl quis neque. Sein orci enim
                </div>
              </div>
            </div>
          </div>
          <div className={['mr-auto', styles.roadmap_cloud].join(' ')}>
            <Parallax
              strength={200}
              bgImage={roadmap_cloud}
              bgClassName="cloud-parallax-img"
              className="cloud-parallax"
            >
            </Parallax>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  roadmaps: makeSelectRoadmaps(),
  activeRoadmap: makeActiveRoadmap(),
});

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: {
      ...ownProps.actions,
      ...bindActionCreators({ ...actions }, dispatch),
    },
    roadmapClick(roadmap) {
      dispatch(actions.selectRoadmap(roadmap));
    },
  };
}
RoadmapSection.propTypes = {
  roadmaps: PropTypes.array,
  roadmapClick: PropTypes.func,
  activeRoadmap: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(RoadmapSection);
