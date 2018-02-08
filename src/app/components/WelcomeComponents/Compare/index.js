import React from 'react';
import ReactHighcharts from 'react-highcharts';
import Highcharts from 'highcharts';
import * as styles from './styles.css';
import glowEffect from '../../../../assets/images/glow.png';
import waveImage from '../../../../assets/images/wave_large.png';
import compareVerticalImg from '../../../../assets/images/compare_vertical.png';
import Progressbar from '../../Progressbar';
import MeteorShower from '../../MeteorShower';

class CompareSection extends React.Component {
  render() {
    const title = ['wow fadeInRight animated', styles.title].join(' ');
    const subtitle = ['wow fadeInLeft animated', styles.subTitle].join(' ');
    const glownImage = ['d-none d-lg-block', styles.glowImg].join(' ');
    const cviClass = ['d-none d-lg-block', styles.compareVertical].join(' ');
    const sectionDescription = ['wow fadeInLeft animated text-white col-sm-12 col-md-6 offset-md-3', styles.sectionDescription].join(' ');
    const investmentTitle = ['wow slideInUp animated text-center', styles.investmentTitle].join(' ');
    const investmentSection = ['row col-md-10 offset-md-1 col-sm-12', styles.investmentSection].join(' ');
    const investmentSubtitle = ['text-white text-left', styles.investmentSubtitle].join(' ');
    const colors = Highcharts.map(Highcharts.getOptions().colors, (color) => ({
      radialGradient: {
        cx: 0.5,
        cy: 0.3,
        r: 0.7,
      },
      stops: [
          [0, color],
          [1, Highcharts.Color(color).brighten(-0.3).get('rgb')], // darken
      ],
    }));

    // Piechart Configuration
    const config = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        type: 'pie',
      },
      title: {
        text: '',
      },
      subTitle: {
        text: '',
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          colors,
          distance: -100,
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
            distance: -50,
            filter: {
              property: 'percentage',
              operator: '>',
              value: 4,
            },
          },
        },
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
          name: 'IE',
          y: 56.33,
        }, {
          name: 'Chrome',
          y: 24.03,
          sliced: true,
          selected: true,
        }, {
          name: 'Firefox',
          y: 10.38,
        }, {
          name: 'Safari',
          y: 4.77,
        }, {
          name: 'Opera',
          y: 0.91,
        }, {
          name: 'Other',
          y: 0.2,
        }],
      }],
    };


    return (
      <section id="compare_section" className="call-to-section compare_section">
        <div className={styles.particleContainer}>
          <MeteorShower opacity={0.3} />
        </div>
        <div className={glownImage}>
          <img src={glowEffect} role="presentation" />
        </div>
        <div className={cviClass}>
          <img src={compareVerticalImg} role="presentation" />
        </div>
        <div className="container-fluid">
          <div className="col-md-10 offset-md-1 col-sm-12">
            <div className={title}>COMPARE</div>
            <div className={subtitle}>COMPARE</div>
            <div className="row">
              <p className={sectionDescription}>
                Being a new cryptocurrency, Quillon offers a low barrier for entry while at the same time having the best return on investment of the more serious masternode based coins today. Invest now and win big!
              </p>
            </div>
          </div>
          <div className="col-md-10 offset-md-1">
            <div className="row mt-lg-5">
              <div className="col-6 col-sm-6 col-md-6 col-lg-4 mt-lg-5">
                <ReactHighcharts config={config} />
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-4 mt-lg-5">
                <ReactHighcharts config={config} />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 ">
                <h1 className="text-white text-left">OUR LIVE STATS</h1>
                <p className="text-white text-left">Gain an overview of Quillon. Nodes, Blocks, Hash and more all at a glance!</p>
              </div>
            </div>
          </div>
          <div className="row d-inline-block mt-3 mt-lg-5 ">
            <img src={waveImage} className="d-block mx-auto w-100" role="presentation" />
          </div>
          <div className="col-lg-12 col-sm-12">
            <div className={investmentTitle}>
              INVESTMENT
            </div>
            <div className={investmentSection}>
              <div className="col-sm-12 col-md-6 col-lg-5">
                <h1 className={investmentSubtitle}>
                  QUILLION IS NOW LEADING IN THE ROI BETWEEN OTHER COINS
                </h1>
                <p className="text-white text-left">
                  quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh im
                </p>
              </div>
              <div className="col-sm-12 col-md-6 col-lg">
                <p className="text-left">QUILLON 600%</p>
                <Progressbar valueMin={0} valueMax={100} valueNow={100} height="7px" color1="#f94526" color2="#ff7800" borderRadius="20px" />
                <br />
                <p className="text-left">ZCOIN 40%</p>
                <Progressbar valueMin={0} valueMax={100} valueNow={40} height="7px" color1="#347dff" color2="#3190f0" borderRadius="20px" />
                <br />
                <p className="text-left">PIVIX 7%</p>
                <Progressbar valueMin={0} valueMax={100} valueNow={7} height="7px" color1="#347dff" color2="#3190f0" borderRadius="20px" />
                <br />
                <p className="text-left">DASH 5%</p>
                <Progressbar valueMin={0} valueMax={100} valueNow={5} height="7px" color1="#347dff" color2="#3190f0" borderRadius="20px" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CompareSection;
