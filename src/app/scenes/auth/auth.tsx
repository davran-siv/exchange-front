import ValidateEmail from 'app/scenes/auth/validateEmail/validateEmail'
import React from 'react'
import { Route, Switch } from 'react-router'

const Auth = (props: any) => {
  return (
    <div>
      <Switch>
        <Route path={'/auth'} component={ValidateEmail}/>
      </Switch>
    </div>
  )
}

export default Auth
