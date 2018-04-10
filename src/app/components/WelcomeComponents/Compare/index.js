import React from 'react';
import * as styles from './styles.css';
import { Parallax, Background } from 'react-parallax';
import glowEffect from '../../../../assets/images/glow.png';
import MeteorShower from '../../MeteorShower';
import ExploreStaticBlock from '../../ExploreStaticBlock';
import MoreButton from '../../MoreButton/index';
import tradeImg from '../../../../assets/images/trade.png';
import earnImg from '../../../../assets/images/earn.png';
import holdImg from '../../../../assets/images/hold.png';
import tradesatoshiBadge from '../../../../assets/images/tradesatoshi_badge.svg';
import tradesatoshiBadgeHover from '../../../../assets/images/tradesatoshi_badge_hover.svg';
import miningPool from '../../../../assets/images/mining_pool.svg';
import miningPoolHover from '../../../../assets/images/mining_pool_hover.svg';
import cryptoPia from '../../../../assets/images/cryptopia.svg';
import cryptoPiaHover from '../../../../assets/images/cryptopia_hover.svg';
import masterNode from '../../../../assets/images/master_node.svg';
import masterNodeHover from '../../../../assets/images/master_node_hover.svg';
import ubuntu from '../../../../assets/images/ubuntu.svg';
import ubuntuHover from '../../../../assets/images/ubuntu_hover.svg';
import windows from '../../../../assets/images/windows.svg';
import windowsHover from '../../../../assets/images/windows_hover.svg';
import mac from '../../../../assets/images/apple.svg';
import macHover from '../../../../assets/images/apple_hover.svg';
import chooseWallet from '../../../../assets/images/choose_wallet.svg';
// import joinEllipse from '../../../../assets/images/join_ellipse.png';
import compareStatsCloud from '../../../../assets/images/compare_stats_cloud.png';
import joinCloud1 from '../../../../assets/images/join_cloud_1.png';
import joinCloud2 from '../../../../assets/images/join_cloud_2.png';

class CompareSection extends React.Component {
  render() {
    const title = ['wow fadeInRight', styles.title].join(' ');
    const subtitle = ['wow fadeInLeft', styles.subTitle].join(' ');
    const glownImage = ['d-none d-lg-block', styles.glowImg].join(' ');
    const sectionDescription = ['wow fadeInLeft text-white col-sm-12 col-md-6 offset-md-3', styles.sectionDescription].join(' ');
    const joinTitle = ['wow slideInUp text-center', styles.joinTitle].join(' ');
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
            <div className={title}>EXPLORE</div>
            <div className={subtitle}>STATISTICS</div>
            <div className="row">
              <p className={sectionDescription}>
                Explore the impact Quillon is looking to make. Featuring masternodes, and a proof of work consensus algorithm, Quillon is able to lay the foundation for a bright future. A coin that’s build to last and protect your investment!
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
                    <ExploreStaticBlock imgName="forma.png" name="QLN IN\nCIRCULATION" value="3500000" />
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-6">
                    <ExploreStaticBlock imgName="hashrate.png" name="HASHRATE\nIN GH/S" value="452.92" />
                  </div>
                  <div className="col-6">
                    <ExploreStaticBlock imgName="shape.png" name="CURRENT BLOCK\nNUMBER" value="281.377" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 pt-5">
                <br />
                <div className={styles.compareStatsCloud}>
                  <Parallax
                    strength={100}
                    bgImage={compareStatsCloud}
                    bgClassName="cloud-parallax-img"
                    className="cloud-parallax"
                  >
                  </Parallax>
                </div>
                <h4 className={styles.compareStats}>COMPARE LIVE STATS</h4>
                <p className="text-left">Check out Quillon with statistics taken directly from our block explorer. All the information you need, directly at your fingertips.</p>
                <div className="float-left">
                  <MoreButton label="Blockexplorer" btnWidth="180px"> </MoreButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 position-relative">
          <div className={[styles.joinCloud1].join(' ')}>
            <Parallax
              strength={200}
              bgImage={joinCloud1}
              bgClassName="cloud-parallax-img"
              className="cloud-parallax"
            >
            </Parallax>
          </div>
          <div className={[styles.joinCloud2].join(' ')}>
            <Parallax
              strength={200}
              bgImage={joinCloud2}
              bgClassName="cloud-parallax-img"
              className="cloud-parallax"
            >
            </Parallax>
          </div>
        </div>
        <div id="join_section" className="container-fluid">
          <div className="col-lg-12 col-sm-12">
            <div className={joinTitle}>JOIN</div>
            <h4 className={joinsubTitle}>NETWORK</h4>
            <br /> <br />
            <div className="row">
              <p className={sectionDescription}>
                Being a new cryptocurrency, Quillon offers a low barrier for entry. Join our network today and become one of the first to take advantage of our revolutionary monetary policy. You can trade, hold and earn our currency via the links below!
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
              <div className="row hover12">
                <div className="d-block mx-auto">
                  <figure>
                    <img className={['bottom', styles.joinBlockSubImg].join(' ')} src={tradesatoshiBadge} role="presentation" />
                    <img className={['top ', styles.joinBlockSubImg].join(' ')} src={tradesatoshiBadgeHover} role="presentation" />
                  </figure>
                </div>
              </div>
              <div className="row hover12">
                <div className="d-block mx-auto">
                  <figure>
                    <img className={['bottom', styles.joinBlockSubImg].join(' ')} src={cryptoPia} role="presentation" />
                    <img className={['top', styles.joinBlockSubImg].join(' ')} src={cryptoPiaHover} role="presentation" />
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <img className={styles.joinBlockImg} src={earnImg} role="presentation" />
              <div className={styles.joinBlockTitle}> EARN </div>
              <div className="row hover12">
                <div className="d-block mx-auto miningpoolDiv">
                  <figure>
                    <img className={['bottom', styles.joinBlockSubImg].join(' ')} src={miningPool} role="presentation" />
                    <img className={['top', styles.joinBlockSubImg].join(' ')} src={miningPoolHover} role="presentation" />
                  </figure>
                </div>
              </div>
              <div className="row hover12">
                <div className="d-block mx-auto">
                  <figure>
                    <img className={['bottom', styles.joinBlockSubImg].join(' ')} src={masterNode} role="presentation" />
                    <img className={['top', styles.joinBlockSubImg].join(' ')} src={masterNodeHover} role="presentation" />
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <img className={styles.joinBlockImg} src={holdImg} role="presentation" />
              <div className={styles.joinBlockTitle}> HOLD </div>
              <div className={[styles.margin_top_18px, 'row pl-3 pr-3'].join(' ')}>
                <div className="col-3 hover12 ml-auto">
                  <div className="d-block">
                    <figure>
                      <img className={['bottom', styles.joinBlockHoldTop].join(' ')} src={windows} role="presentation" />
                      <img className={['top', styles.joinBlockHoldTop].join(' ')} src={windowsHover} role="presentation" />
                    </figure>
                  </div>
                </div>
                <div className="col-3 hover12 mx-auto">
                  <div className="d-block">
                    <figure>
                      <img className={['bottom', styles.joinBlockHoldTop].join(' ')} src={mac} role="presentation" />
                      <img className={['top', styles.joinBlockHoldTop].join(' ')} src={macHover} role="presentation" />
                    </figure>
                  </div>
                </div>
                <div className="col-3 hover12 mr-auto">
                  <div className="d-block">
                    <figure>
                      <img className={['bottom', styles.joinBlockHoldTop].join(' ')} src={ubuntu} role="presentation" />
                      <img className={['top', styles.joinBlockHoldTop].join(' ')} src={ubuntuHover} role="presentation" />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="d-block mx-auto">
                  <figure>
                    <img className={['bottom', styles.joinBlockHoldBottom].join(' ')} src={chooseWallet} role="presentation" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<img className={styles.joinEllipse} src={joinEllipse} role="presentation" />*/}
      </section>
    );
  }
}
export default CompareSection;
