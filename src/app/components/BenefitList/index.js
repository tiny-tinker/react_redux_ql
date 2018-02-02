import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectBenefits, makeActiveBenefit } from './selectors';
import * as actions from './actions';

import BenefitSelection from './BenefitSelection';
import BenefitShow from './BenefitShow';

class BenefitLists extends Component {
  static createBenefitListItems(benefits, benefitClick, activeBenefit) {
    // console.log(this.props.benefits);
    return benefits.map((benefit) => (
      <BenefitSelection key={benefit.id} benefit={benefit} handleClick={benefitClick} activeId={activeBenefit.id} />
    ));
  }

  render() {
    const { rootClass, benefits, benefitClick, activeBenefit } = this.props;
    return (
      <div className={rootClass}>
        <div className="col-md-10 offset-md-1 col-sm-12">
          <div className="row">
            <div className="col-xl-5 col-md-6 col-sm-12">
              { BenefitLists.createBenefitListItems(benefits, benefitClick, activeBenefit) }
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

const mapStateToProps = createStructuredSelector({
  benefits: makeSelectBenefits(),
  activeBenefit: makeActiveBenefit(),
});

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: {
      ...ownProps.actions,
      ...bindActionCreators({ ...actions }, dispatch),
    },
    benefitClick(benefit) {
      dispatch(actions.selectBenefit(benefit));
    },
  };
}

BenefitLists.propTypes = {
  rootClass: PropTypes.string,
  benefits: PropTypes.array,
  benefitClick: PropTypes.func,
  activeBenefit: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(BenefitLists);
