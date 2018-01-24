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
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { useScroll } from 'react-router-scroll';

// fonts imported globally
import '!style-loader!css-loader!../assets/fonts/material-icons/material-icons.css';
import '!style-loader!css-loader!../assets/fonts/font-awesome/css/font-awesome.min.css';
// Particle theme library css
import '!style-loader!css-loader!../assets/plugins/bootstrap-4.0.0/css/bootstrap.css';
import '!style-loader!css-loader!../assets/css/libraries/animate.css';
// Particle custom css
import '!style-loader!css-loader!../assets/css/custom/theme.css';
import '!style-loader!css-loader!../assets/css/custom/colors.css';
// My own custom css
import '!style-loader!css-loader!global.css';

// Paritcle theme js files

import 'script-loader!../assets/plugins/html5shiv/3.7.0/html5shiv.js';
import 'script-loader!../assets/plugins/respondjs/1.4.2/respond.min.js';

// Jquery
import 'script-loader!../assets/js/libraries/jquery-2.2.4.js';

// Bootstrap Core Javascript
import 'script-loader!../assets/plugins/bootstrap-4.0.0/js/bootstrap.js';

// Javascript Libraries
import 'script-loader!../assets/js/libraries/jquery.easing.1.3';
import 'script-loader!../assets/js/libraries/typed';
import 'script-loader!../assets/js/libraries/wow.js';
import 'script-loader!../assets/js/libraries/particles.js';
import 'script-loader!../assets/js/libraries/waypoint.js';
import 'script-loader!../assets/js/libraries/jquery.counterup';


// Import selector for `syncHistoryWithStore`
import { makeSelectLocationState } from 'containers/App/selectors';

// Load favicon and manifest.json file
/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!../assets/favicon.ico';
import '!file-loader?name=[name].[ext]!./manifest.json';
/* eslint-enable import/no-unresolved, import/extensions */

import configureStore from './store';

// Import root routes
import createRoutes from './routes';

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

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={history}
      routes={createRoutes(store)}
      render={
        // Scroll to top when going to a new page, imitating default browser
        // behaviour
        applyRouterMiddleware(useScroll())
      }
    />
  </Provider>,
  document.getElementById('app')
);

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
