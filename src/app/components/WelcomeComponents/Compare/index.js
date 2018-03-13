import React from 'react';
import * as styles from './styles.css';
import glowEffect from '../../../../assets/images/glow.png';
import MeteorShower from '../../MeteorShower';
import ExploreStaticBlock from '../../ExploreStaticBlock';
import MoreButton from '../../MoreButton/index';
import tradeImg from '../../../../assets/images/trade.png';
import earnImg from '../../../../assets/images/earn.png';
import holdImg from '../../../../assets/images/hold.png';
import tradesatoshiBadge from '../../../../assets/images/tradesatoshi_badge.svg';
import miningPool from '../../../../assets/images/mining_pool.svg';
import cryptoPia from '../../../../assets/images/cryptopia.svg';
import masterNode from '../../../../assets/images/master_node.svg';
import holdSubImg from '../../../../assets/images/hold_img.svg';
import chooseWallet from '../../../../assets/images/choose_wallet.svg';
import joinEllipse from '../../../../assets/images/join_ellipse.png';
import compareStatsCloud from '../../../../assets/images/compare_stats_cloud.png';
import joinCloud1 from '../../../../assets/images/join_cloud_1.png';
import joinCloud2 from '../../../../assets/images/join_cloud_2.png';

class CompareSection extends React.Component {
  render() {
    const title = ['wow fadeInRight animated', styles.title].join(' ');
    const subtitle = ['wow fadeInLeft animated', styles.subTitle].join(' ');
    const glownImage = ['d-none d-lg-block', styles.glowImg].join(' ');
    const sectionDescription = ['wow fadeInLeft animated text-white col-sm-12 col-md-6 offset-md-3', styles.sectionDescription].join(' ');
    const joinTitle = ['wow slideInUp animated text-center', styles.joinTitle].join(' ');
    const joinsubTitle = ['text-white', styles.joinsubTitle].join(' ');

    return (
      <section id="compare_section" className="call-to-section compare_section">
        <div className={styles.particleContainer}>
          <MeteorShower opacity={0.3} />
        </div>
        <div className={glownImage}>
          <img src={glowEffect} role="presentation" />
        </div>

        <div className="container-fluid">
          <div className="col-md-10 offset-md-1 col-sm-12">
            <div className={title}>STATISTICS</div>
            <div className={subtitle}>EXPLORE</div>
            <div className="row">
              <p className={sectionDescription}>
                Being a new cryptocurrency, Quillon offers a low barrier for entry while at the same time having the best return on investment of the more serious masternode based coins today. Invest now and win big!
              </p>
            </div>
          </div>
        </div>
        <br /><br /><br /><br /><br /><br />
        <div className="container">
          <div className="col-lg-12 mt-5">
            <div className="row">
              <div className="col-md-8 col-sm-12">
                <div className="row">
                  <div className="col-6">
                    <ExploreStaticBlock imgName="group.png" name="NUMBER OF\nMASTERNODES" value="1254" />
                  </div>
                  <div className="col-6">
                    <ExploreStaticBlock imgName="forma.png" name="QLN IN\nCIRCULATION" value="3.500.000" />
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-6">
                    <ExploreStaticBlock imgName="hashrate.png" name="HASHRATE\nIN GH/S" value="452.92" />
                  </div>
                  <div className="col-6">
                    <ExploreStaticBlock imgName="group.png" name="CURRENT BLOCK\nNUMBER" value="281.377" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 pt-5">
                <br />
                <img src={compareStatsCloud} className={styles.compareStatsCloud} role="presentation" />
                <h4 className={styles.compareStats}>COMPARE LIVE STATS</h4>
                <p className="text-left">quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed ot maucumsan </p>
                <div className="float-left">
                  <MoreButton label="BLOCKEXPLORER" btnWidth="180px"> </MoreButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={joinCloud1} role="presentation" className={styles.joinCloud1} />
        <img src={joinCloud2} role="presentation" className={styles.joinCloud2} />

        <div id="join_section" className="container-fluid">
          <div className="col-lg-12 col-sm-12">
            <div className={joinTitle}>JOIN</div>
            <h4 className={joinsubTitle}>NETWORK</h4>
            <br /> <br />
            <div className="row">
              <p className={sectionDescription}>
                Being a new cryptocurrency, Quillon offers a low barrier for entry while at the same time having the best return on investment of the more serious masternode based coins today. Invest now and win big!
              </p>
            </div>
          </div>
        </div>
        <br /><br /><br /><br /><br />
        <div className="container">
          <div className="row hi-icon-effect-5 hi-icon-effect-5c">
            <div className="col-md-4">
              <img className={styles.joinBlockImg} src={tradeImg} role="presentation" />
              <div className={styles.joinBlockTitle}> TRADE </div>
              <div className="row">
                <img className={['hi-icon', styles.joinBlockSubImg].join(' ')} src={tradesatoshiBadge} role="presentation" />
              </div>
              <div className="row">
                <img className={styles.joinBlockSubImg} src={cryptoPia} role="presentation" />
              </div>
            </div>
            <div className="col-md-4">
              <img className={styles.joinBlockImg} src={earnImg} role="presentation" />
              <div className={styles.joinBlockTitle}> EARN </div>
              <div className="row">
                <img className={styles.joinBlockSubImg} src={miningPool} role="presentation" />
              </div>
              <div className="row">
                <img className={styles.joinBlockSubImg} src={masterNode} role="presentation" />
              </div>
            </div>
            <div className="col-md-4">
              <img className={styles.joinBlockImg} src={holdImg} role="presentation" />
              <div className={styles.joinBlockTitle}> HOLD </div>
              <div className="row">
                <img className={styles.joinBlockHoldTop} src={holdSubImg} role="presentation" />
              </div>
              <div className="row">
                <img className={styles.joinBlockHoldBottom} src={chooseWallet} role="presentation" />
              </div>
            </div>
          </div>
        </div>
        <img className={styles.joinEllipse} src={joinEllipse} role="presentation" />
      </section>
    );
  }
}
export default CompareSection;
