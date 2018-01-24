import React from 'react';
import { IndexLink } from 'react-router';
import logo from '../../../assets/images/logo.png';
import * as styles from './styles.css';
const HeaderComponent = function HeaderComponent() {
  return (
    <div>
      <header>
        <div id="st-logo">
          <IndexLink to="/">
            <img src={logo} alt="Quillon" />
          </IndexLink>
        </div>
      </header>

      <div id="st-nav">
        <a href="#0" className="st-nav-trigger">
          Menu<span> </span>
        </a>

        <nav id="st-main-nav">
          <ul>
            <li>
              <a className="page-scroll hvr-underline-from-center" href="#app">home</a>
            </li>
            <li>
              <a className="page-scroll hvr-underline-from-center" href="#about_us">about us</a>
            </li>
            <li>
              <a className="page-scroll hvr-underline-from-center" href="#compare">compare</a>
            </li>
            <li>
              <a className="page-scroll hvr-underline-from-center" href="#network">network</a>
            </li>
            <li>
              <a className="page-scroll hvr-underline-from-center" href="#roadmap">roadmap</a>
            </li>
            <li>
              <a className="page-scroll hvr-underline-from-center" href="#team">team</a>
            </li>
            <li>
              <a className="page-scroll hvr-underline-from-center" href="#contact">contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

HeaderComponent.propTypes = {
};

export default HeaderComponent;

