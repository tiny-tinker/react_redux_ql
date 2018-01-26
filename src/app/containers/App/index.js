/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import * as actions from './actions';
import Models from '../../common/models';
import Header from '../../components/Header';
import { makeSelectUser, makeSelectNotifications } from './selectors';
import { getItem } from '../../utils/localStorage';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.loadUserFromToken();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        {this.props.children}
      </React.Fragment>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  loadUserFromToken: PropTypes.func.isRequired,
  notifications: PropTypes.arrayOf(Models.Notification),
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  notifications: makeSelectNotifications(),
});

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: {
      ...ownProps.actions,
      ...bindActionCreators({ ...actions }, dispatch),
    },
    loadUserFromToken() {
      const token = getItem('token');
      if (token) dispatch(actions.authFromToken(token));
    },
    logout() {
      dispatch(actions.removeLoggedUser());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
