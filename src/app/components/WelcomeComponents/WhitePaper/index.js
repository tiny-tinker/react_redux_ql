import React from 'react';
import * as styles from './styles.css';

const WhitePaperSection = function WhitePaperSection(){
  const subTitle = ["wow fadeInLeft  animated", styles.subTitle].join(" ");
  const downloadButton = ["", styles.buttonDownload].join(" ");
  const content = ["col-lg-6", styles.content].join(" ");

  return(
    <section id="whitepaper_section" className="whitepaper_section">
      <div className={styles.titleEffect}>
        KNOW MORE
      </div>
      <div>
        <div className={subTitle}>
          WHITE PAPER
        </div>
      </div>
      <div className="row">
        <div className={content}>
          <p className={styles.description}>
            Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accequat auctor eu in elit. Class aptent taciti sociosrna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra enim
          </p>
          <div id = "downbutton" className="wow fadeInRight hvr-sweep-to-right  animated">
            <button type="button" className={downloadButton}> <i className="fa fa-file fileIcon"> </i> download our whitepaper </button>
          </div>
        </div>
      </div>
    </section>
  )
};

export default WhitePaperSection;
