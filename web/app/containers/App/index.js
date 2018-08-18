/**
 *
 * App.js
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
import { Switch, Route, Redirect } from 'react-router-dom';

import MainDashLayout from 'containers/MainDashLayout';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/dashboard/" component={MainDashLayout} />
	<Redirect to="/dashboard"/>
        <Route component={NotFoundPage} />
      </Switch>
    </React.Fragment>
  );
}