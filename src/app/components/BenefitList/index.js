import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { CSSTransitionGroup } from 'react-transition-group';

import { makeSelectBenefits, makeActiveBenefit } from './selectors';
import * as actions from './actions';

import BenefitSelection from './BenefitSelection';
import BenefitShow from './BenefitShow';

class BenefitLists extends Component {
  static createBenefitListItems(benefits, benefitClick, activeBenefits) {
    // console.log(this.props.benefits);
    return benefits.map((benefit) => (
      <BenefitSelection key={benefit.id} benefit={benefit} handleClick={benefitClick} activeId={activeBenefits[activeBenefits.length - 1].id} />
    ));
  }

  render() {
    const { rootClass, benefits, benefitClick, activeBenefits } = this.props;
    const items = activeBenefits.map((item, i) => (
      <BenefitShow key={item.id} activeBenefit={item} />
    ));
    return (
      <div className={rootClass}>
        <div className="col-md-11 offset-md-1 col-sm-12">
          <div className="row">
            <div className="col-xl-6 col-md-6 col-sm-12">
              { BenefitLists.createBenefitListItems(benefits, benefitClick, activeBenefits) }
            </div>
            <div className="wow animated bounceInRight col-xl-6 col-md-6 col-sm-12">
              <CSSTransitionGroup
                transitionName="bounce"
                transitionEnterTimeout={900}
                transitionLeaveTimeout={900}
              >
                {items}
              </CSSTransitionGroup>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  benefits: makeSelectBenefits(),
  activeBenefits: makeActiveBenefit(),
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
  activeBenefits: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(BenefitLists);
