import { Container } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import PrimarySearchAppBar from 'app/containers/header/Header'
import Me from 'app/containers/me/me'
import SignIn from 'app/scenes/auth/signIn/signIn'
import SignUp from 'app/scenes/auth/signUp/signUp'
import ValidateEmail from 'app/scenes/auth/validateEmail/validateEmail'
import CreateAd from 'app/scenes/createAd/CreateAd'
import HomeScene from 'app/scenes/home/Home'
import theme from 'app/styles/theme'
import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import { Route, Router, Switch } from 'react-router'

// render react DOM
export const App = hot(({ history }) => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <PrimarySearchAppBar history={history}/>
        <Me/>
        <Container>
          <Switch>
            <Route path="/" component={HomeScene} exact/>
            <Route path="/create-ad" component={CreateAd}/>
            <Route path="/auth" component={ValidateEmail}/>
            <Route path="/sign-up" component={SignUp}/>
            <Route path="/sign-in" component={SignIn}/>
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
  )
})
