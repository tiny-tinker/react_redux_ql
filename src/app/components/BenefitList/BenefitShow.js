import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './BenefitShow.css';

class BenefitShow extends React.Component {
  render() {
    const activeBenefit = this.props.activeBenefit;
    const titleContainer = ['col-lg-9 col-md-10 col-sm-10 col-12', styles.title_container].join(' ');
    const imgSrc = require(`./../../../assets/images/${activeBenefit.image_active}`);
    const dividerClass = ['d-none d-md-block', styles.divider].join(' ');
    const containerClass = ['d-none d-md-block animated', styles.container].join(' ');

    return (
      <div ref="container" className={containerClass}>
        <div className="row">
          <div className={titleContainer}>
            <div className={styles.container_img}>
              <img src={imgSrc} role="presentation" />
            </div>
            <div className={styles.title}>
            <span>
              {activeBenefit.title}
            </span>
            </div>
          </div>
        </div>
        <div className="row mr-0 mt-sm-5">
          <div className="col-lg-10 col-md-10 col-sm-10 col-12">
            <p className={styles.description}>
              {activeBenefit.description}
            </p>
          </div>
        </div>
        <hr className={dividerClass} />
      </div>
    );
  }
}

BenefitShow.propTypes = {
  activeBenefit: PropTypes.object,
};

export default BenefitShow;
