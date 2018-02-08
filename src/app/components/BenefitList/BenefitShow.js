import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './BenefitShow.css';

class BenefitShow extends React.Component {
  render() {
    const activeBenefit = this.props.activeBenefit;
    const titleContainer = ['row', styles.title_container].join(' ');
    const imgSrc = require(`./../../../assets/images/${activeBenefit.image_active}`);
    const dividerClass = ['d-none d-md-block', styles.divider].join(' ');
    const containerClass = ['d-none d-md-block animated', styles.container].join(' ');
    return (
      <div ref="container" className={containerClass}>
        <div className={titleContainer}>
          <div className={styles.container_img}>
            <img src={imgSrc} role="presentation" />
          </div>
          <div className={styles.title}>
            {activeBenefit.title}
          </div>
        </div>
        <div className="row mr-0">
          <div className="col-12">
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
