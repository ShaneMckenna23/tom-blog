import * as React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import routes from '../../globals/routes';

import Login from '../Login';
import Users from '../Users';

import history from '../../globals/history';

class Main extends React.Component {
  render() {
    return (
        <Router history={history}>
            <Switch>
              <Route exact={true} path={routes.home} component={Login} />
              <Route
                exact={true}
                path={routes.users}
                component={Users}
              />
            </Switch>
        </Router>
    );
  }
}

export default Main