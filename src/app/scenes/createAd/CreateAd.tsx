import { Container, Typography } from '@material-ui/core'
import CreateAdFirstStep from 'app/containers/createAdSteps/firstStep/FirstStep'
import CreateAdSecondStep from 'app/containers/createAdSteps/secondStep/SecondStep'
import CreateAdForthStep from 'app/containers/createAdSteps/forthStep/ForthStep'
import React from 'react'
import { Route, Switch } from 'react-router'


class CreateAd extends React.Component<any> {
  render() {
    return (
      <Container>
        <Typography variant='h1'>Создание нового объявления</Typography>
        <Typography variant='h5' color='secondary'>
          Для заполнения потребуется около 5 минут
        </Typography>
        <Switch>
          <Route path="/create-ad" component={CreateAdFirstStep} exact/>
          <Route path="/create-ad/:id/second" component={CreateAdSecondStep} exact/>
          <Route path="/create-ad/:id/forth" component={CreateAdForthStep} exact/>
        </Switch>
      </Container>
    )
  }
}

export default CreateAd