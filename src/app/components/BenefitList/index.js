import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BenefitSelection from './BenefitSelection';
import BenefitShow from './BenefitShow';

class BenefitLists extends Component {
  static createBenefitListItems(benefits, benefitClick) {
    // console.log(this.props.benefits);
    return benefits.map((benefit) => (
      <BenefitSelection key={benefit.id} benefit={benefit} handleClick={benefitClick} />
    ));
  }

  render() {
    const { rootClass, benefits, benefitClick, activeBenefit } = this.props;
    return (
      <div className={rootClass}>
        <div className="col-md-10 offset-md-1 col-sm-12">
          <div className="row">
            <div className="col-xl-5 col-md-6 col-sm-12">
              { BenefitLists.createBenefitListItems(benefits, benefitClick) }
            </div>
            <div className="col-xl-7 col-md-6 col-sm-12">
              <BenefitShow activeBenefit={activeBenefit} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BenefitLists.propTypes = {
  rootClass: PropTypes.string,
  benefits: PropTypes.array,
  benefitClick: PropTypes.func,
  activeBenefit: PropTypes.object,
};

export default BenefitLists;
