import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { makeSelectBenefits, makeActiveBenefit } from './selectors';
import * as actions from './actions';
import * as styles from './styles.css';

import MoreButton from '../../MoreButton';
import BenefitLists from '../../../components/BenefitList';

class BenefitsSection extends React.Component {
  render() {
    const title = ['wow fadeInLeft animated', styles.title].join(' ');
    const subTitle = ['wow fadeInLeft animated text-left ', styles.subTitle].join(' ');
    const sectionDescription = ['mt-2 text-left text-white', styles.section_description].join(' ');

    const { benefits, activeBenefit, benefitClick } = this.props;
    return (
      <section id="benefits_section" className="call-to-section benefits_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-sm-12">
              <div className={title}>OUR <br /> BENEFITS</div>
              <div className={subTitle}>
                <div>OUR <br /> BENEFITS</div>
                <div className="row">
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <p className={sectionDescription}>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit  odio s eu felis</p>
                  </div>
                </div>
                <MoreButton label="learn more" />
              </div>
            </div>
          </div>
          <BenefitLists rootClass={'row benefits'} benefits={benefits} activeBenefit={activeBenefit} benefitClick={benefitClick} />
        </div>
      </section>
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
BenefitsSection.propTypes = {
  benefits: PropTypes.array,
  benefitClick: PropTypes.func,
  activeBenefit: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(BenefitsSection);
