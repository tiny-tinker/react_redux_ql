/*
 * Welcome Page
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

export default class WelcomePage extends React.PureComponent{
  render() {
    return (
      <div>
        <h1> Welcome to Quillon</h1>
      </div>
    );
  }
}
