import React from 'react';
import PropTypes from 'prop-types';

import BenefitSelection from './BenefitSelection';

const BenefitList = function BenefitList() {
  return (
    <div className="row">
      <div className="col-sm-10 offset-sm-1 col-xs-12">
        <div className="row">
          <div className="col-sm-5 col-xs-12">
            <BenefitSelection />
          </div>
          <div className="col-sm-7 col-xs-12">
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitList;
