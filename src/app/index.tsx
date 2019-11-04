import { Container } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import PrimarySearchAppBar from 'app/containers/header/Header'
import { Root } from 'app/containers/Root'
import CreateAd from 'app/scenes/createAd/CreateAd'
import HomeScene from 'app/scenes/home/Home'
import theme from 'app/styles/theme'
import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import { Route, Router, Switch } from 'react-router'

// render react DOM
export const App = hot(({ history }) => (
  <ThemeProvider theme={theme}>
    <Root>
      <Router history={history}>
        <PrimarySearchAppBar/>
        <Container>
          <Switch>
            <Route path="/" component={HomeScene} exact/>
            <Route path="/create-ad" component={CreateAd}/>
          </Switch>
        </Container>
      </Router>
    </Root>
  </ThemeProvider>
))
