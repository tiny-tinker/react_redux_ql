import React from 'react';
import * as styles from './styles.css';
import Title from '../../SectionTitle';

import IconOther from '../../../../assets/images/icon_other.png';

const ConnectSection = function ConnectSection() {
  const subTitle =["wow fadeInLeft  animated", styles.subTitle].join(" ");

  return(
    <section id="connect_section" className="connect_section">
      <Title title = "CONNECT"/>
      <div className={subTitle}> LEL'S CONNECT </div>

      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <a href=""> <i className="fa fa-facebook connectIcon"> </i> </a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href=""> <i className="fa fa-instagram connectIcon"> </i> </a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href=""> <i className="fa fa-twitter connectIcon"> </i> </a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href=""> <i className="fa fa-github connectIcon"> </i> </a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href=""> <img src={IconOther} className={styles.lastIcon} width="76" height="76"/>  </a>
          </div>
        </div>

      </div>

    </section>
  )
};

export default ConnectSection;
