import React from 'react';
import Particles from 'react-particles-js';

import * as styles from './styles.css';
import ParticleConfig from './particlesjs-config.json';
import BenefitLists from '../../../components/BenefitList';

class BenefitsSection extends React.Component {

  render() {
    const title = ['wow fadeInLeft', styles.title].join(' ');
    const subTitle = ['wow fadeInLeft text-left ', styles.subTitle].join(' ');
    const sectionDescription = ['mt-2 text-left text-white', styles.section_description].join(' ');
    const polgyonContainer = ['row', styles.polygonContainer].join(' ');

    return (
      <section id="benefits_section" className="call-to-section benefits_section">
        <div className="container-fluid">
          <div className={polgyonContainer}>
            <div className="col-md-6 offset-md-6 col-sm-12">
              <Particles
                params={ParticleConfig}
                height={500}
              />
            </div>
          </div>
          <div className="container-fluid">
            <div className="col-md-10 offset-md-1 col-sm-12">
              <div className={title}>OUR <br /> BENEFITS</div>
              <div className={subTitle}>
                <div>OUR <br /> BENEFITS</div>
                <div className="row ml-0 mr-0">
                  <div className="ml-0 pl-0 col-md-6 col-sm-12 col-xs-12">
                    <p className={sectionDescription}>Run by the independent Non-Profit Quillon Foundation we focus on the privacy and security of your investment. Our governance model and embedded budgeting allows us to concentrate solely on our users, reducing corporate influence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BenefitLists rootClass={'row benefits'} />
        </div>
      </section>
    );
  }
}

export default BenefitsSection;
