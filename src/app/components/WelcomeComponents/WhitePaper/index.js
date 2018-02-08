import React from 'react';
import * as styles from './styles.css';

const WhitePaperSection = function WhitePaperSection(){
  const title = ["wow fadeInLeft  animated", styles.whitepaperTitle].join(" ");
  const subTitle = ["wow fadeInUp  animated", styles.whitepaperSubTitle].join(" ");
  const buttonDownload = ["wow fadeInLeft animated", styles.buttonDownload].join(" ");

  const content = ["col-sm-6", styles.content].join(" ");
  return(
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
          <div className="col-sm-10 offset-sm-1 col-xs-12">
            <div className={content}>
              <p className={styles.description}>
                Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accequat auctor eu in elit. Class aptent taciti sociosrna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra enim
              </p>
              <div>
                <button id = "downbutton" type="button" className={buttonDownload}> <i className="fa fa-file fileIcon"> </i> download our whitepaper </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default WhitePaperSection;
