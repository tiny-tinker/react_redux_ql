import React from 'react';

import * as styles from './styles.css';
import MeteorShower from '../../MeteorShower';

import joinImg1 from '../../../../assets/images/join1.png';
import joinImg2 from '../../../../assets/images/join2.png';
import joinImg3 from '../../../../assets/images/join3.png';
import joinImg4 from '../../../../assets/images/join4.png';
import joinImg5 from '../../../../assets/images/join5.png';
import joinDot from '../../../../assets/images/joinDot.png';

class JoinSection extends React.Component {
  render() {
    const title = ['wow fadeInLeft animated', styles.title].join(' ');
    const subTitle = ['wow fadeInLeft animated text-left ', styles.subTitle].join(' ');
    const carousellg = ['carousel_lg', styles.carousel].join(' ');
    const carouselmd = ['carousel_md', styles.carousel].join(' ');
    const carouselsm = ['carousel_sm', styles.carousel].join(' ');
    const carouselxs = ['carousel_xs', styles.carousel_xs].join(' ');
    const topic = ['row', styles.topicDiv].join(' ');
    const dots = ['col-md-10 offset-md-1 col-sm-12', styles.dots].join(' ');
    const dot = ['joinDot', styles.dot].join(' ');
    const dotCenter = ['joinDot', styles.dotCenter].join(' ');
    return (
      <section id="join_section" className="call-to-section join_section">
        {/* <div className={styles.videoDiv}>*/}
        {/* <video className={styles.video} autoPlay loop poster={poster}>*/}
        {/* <source src={joinVideo} type="video/mp4" />*/}
        {/* Your browser does not support the video tag*/}
        {/* </video>*/}
        {/* </div>*/}
        <div className={styles.particleContainer}>
          <MeteorShower opacity={0.3} sectionId={3} />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-sm-12">
              <div className={title}>JOIN <br /> US</div>
              <div className={subTitle}>
                <div>BECOME PART OF <br /> THE NETWORK NOW</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 offset-md-1 col-sm-12">
              <div className={styles.visible_lg}>
                <div className={carousellg}>
                  <img src={joinImg1} className={styles.image_lg} role="presentation" />
                  <img src={joinImg2} className={styles.image_lg} role="presentation" />
                  <img src={joinImg3} className={styles.image_lg} role="presentation" />
                  <img src={joinImg4} className={styles.image_lg} role="presentation" />
                  <img src={joinImg5} className={styles.image_lg} role="presentation" />
                </div>
              </div>
              <div className={styles.visible_md}>
                <div className={carouselmd}>
                  <img src={joinImg1} className={styles.image_md} role="presentation" />
                  <img src={joinImg2} className={styles.image_md} role="presentation" />
                  <img src={joinImg3} className={styles.image_md} role="presentation" />
                  <img src={joinImg4} className={styles.image_md} role="presentation" />
                  <img src={joinImg5} className={styles.image_md} role="presentation" />
                </div>
              </div>
              <div className={styles.visible_sm}>
                <div className={carouselsm}>
                  <img src={joinImg1} className={styles.image_sm} role="presentation" />
                  <img src={joinImg2} className={styles.image_sm} role="presentation" />
                  <img src={joinImg3} className={styles.image_sm} role="presentation" />
                  <img src={joinImg4} className={styles.image_sm} role="presentation" />
                  <img src={joinImg5} className={styles.image_sm} role="presentation" />
                </div>
              </div>
              <div className={styles.visible_xs}>
                <div className={carouselxs}>
                  <img src={joinImg1} className={styles.image_xs} role="presentation" />
                  <img src={joinImg2} className={styles.image_xs} role="presentation" />
                  <img src={joinImg3} className={styles.image_xs} role="presentation" />
                  <img src={joinImg4} className={styles.image_xs} role="presentation" />
                  <img src={joinImg5} className={styles.image_xs} role="presentation" />
                </div>
              </div>
            </div>
          </div>
          <div className={topic}>
            <div className="col-md-10 offset-md-1 col-sm-12">
              <span id="subtopic1" className={styles.subtopic1}> EXPLORER </span>
              <span id="subtopic2" className={styles.subtopic2}> MINING </span>
            </div>
            <div className="col-md-10 offset-md-1 col-sm-12">
              <span id="mainTopic" className={styles.topic}> WALLET </span>
            </div>
            <div className="col-md-10 offset-md-1 col-sm-12">
              <div className={styles.description}>
                <span> Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitubh ved ut impem </span>
              </div>
            </div>
            <div className={dots}>
              <img src={joinDot} role="presentation" className={dot} />
              <img src={joinDot} role="presentation" className={dot} />
              <img src={joinDot} role="presentation" className={dotCenter} />
              <img src={joinDot} role="presentation" className={dot} />
              <img src={joinDot} role="presentation" className={dot} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default JoinSection;
