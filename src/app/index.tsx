import { Root } from 'app/containers/Root'
import HomeScene from 'app/scenes/Home/home'
import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import { Route, Router, Switch } from 'react-router-dom'
import './styles/appStyles.scss'

// render react DOM
export const App = hot(({ history }) => (
  <Root>
    <Router history={history}>
      <Switch>
        <Route path="/" component={HomeScene}/>
      </Switch>
    </Router>
  </Root>
));
