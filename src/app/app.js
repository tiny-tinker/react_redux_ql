/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// fonts imported globally

import '!style-loader!css-loader!../assets/fonts/material-icons/material-icons.css';
import '!style-loader!css-loader!../assets/fonts/font-awesome/css/font-awesome.min.css';
import '!style-loader!css-loader!../assets/fonts/montserrat/css/montserrat-webfont.min.css';
import '!style-loader!css-loader!../assets/fonts/roboto/roboto.css';
import '!style-loader!css-loader!../assets/fonts/montserrat-extrabold/style.css';

// Particle theme library css
import '!style-loader!css-loader!../assets/plugins/bootstrap-4.0.0-dist/css/bootstrap.css';
// import '!style-loader!css-loader!../assets/css/libraries/animate.css';
// Particle custom css
import '!style-loader!css-loader!../assets/css/custom/theme.css';
import '!style-loader!css-loader!../assets/css/custom/colors.css';

// React Typist CSS
import '!style-loader!css-loader!../../node_modules/react-typist/dist/Typist.css';

// My own custom css
import '!style-loader!css-loader!global.css';


// Paritcle theme js files

import '!script-loader!../assets/plugins/html5shiv/3.7.0/html5shiv';
import '!script-loader!../assets/plugins/respondjs/1.4.2/respond.min';

// Jquery
import '!script-loader!../assets/js/libraries/jquery-2.2.4';

// Bootstrap Core Javascript
import '!script-loader!../assets/plugins/bootstrap-4.0.0-dist/js/bootstrap';

// Javascript Libraries
import '!script-loader!../assets/js/libraries/jquery.easing.1.3';
import '!script-loader!../assets/js/libraries/typed';
import '!script-loader!../assets/js/libraries/wow';
import '!script-loader!../assets/js/libraries/particles';
import '!script-loader!../assets/js/libraries/waypoint';
import '!script-loader!../assets/js/libraries/jquery.counterup';
import '!script-loader!../assets/js/libraries/hsform';
import '!script-loader!../app/global';

// Import selector for `syncHistoryWithStore`
// import { makeSelectLocationState } from 'containers/App/selectors';

// Load favicon and manifest.json file
/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!../assets/favicon.ico';
import '!file-loader?name=[name].[ext]!./manifest.json';
/* eslint-enable import/no-unresolved, import/extensions */

import configureStore from './store';

// Import root routes
import createRoutes from './routes';
import { makeSelectLocationState } from './containers/App/selectors';

// Create redux store with history
// this uses the singleton browserHistory provided by react-router
// Optionally, this could be changed to leverage a created history
// e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`
const initialState = {};
const store = configureStore(initialState, browserHistory);

// Sync history and store, as the react-router-redux reducer
// is under the non-default key ("routing"), selectLocationState
// must be provided for resolving how to retrieve the "route" in the state
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: makeSelectLocationState(),
});

render(
  <Provider store={store}>
    <Router
      history={history}
      routes={createRoutes(store)}
    />
  </Provider>,
  document.getElementById('page-top')
);

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
