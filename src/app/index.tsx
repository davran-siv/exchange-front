import { Root } from 'app/containers/Root';
import { TodoApp } from 'app/containers/TodoApp';
import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, Router, Switch } from 'react-router';

// render react DOM
export const App = hot(({ history }) => (
  <Root>
    <Router history={history}>
      <Switch>
        <Route path="/" component={TodoApp} />
      </Switch>
    </Router>
  </Root>
));
