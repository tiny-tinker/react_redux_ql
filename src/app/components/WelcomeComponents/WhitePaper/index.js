import React from 'react';
import MoreButton from '../../MoreButton';
import * as styles from './styles.css';

const WhitePaperSection = function WhitePaperSection() {
  const title = ['wow fadeInLeft ', styles.whitepaperTitle].join(' ');
  const subTitle = ['wow fadeInUp ', styles.whitepaperSubTitle].join(' ');

  const content = ['col-md-6 col-12', styles.content].join(' ');
  return (
    <section id="whitepaper_section">
      <div className={title}>
        KNOW MORE
      </div>
      <div>
        <div className={subTitle}>
          WHITEPAPER
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-10 col-xs-12">
            <div className={content}>
              <p className={styles.description}>
                Our roadmap is the result of extensive research and development which we are happy to share in more detail through our whitepaper. The result of hours of work from our whole team the Quillon Whitepaper aims to give the interested investor, user and developer a deeper look at our intent. It covers the importance of a great user experience, the necessity of privacy in cryptocurrency as well as smart contracts and its applications in financial- and user-focused services on the Quillon Blockchain. It also gives you a deep insight into the technical specifications, supply schedule and more.
              </p>
              <div className="mt-5">
                <MoreButton label="Download Now" btnWidth="160px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhitePaperSection;
