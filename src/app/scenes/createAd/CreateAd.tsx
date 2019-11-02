import { Container, Typography } from '@material-ui/core'
import React from 'react'


class CreateAd extends React.Component<any> {
  render() {
    return (
      <Container>
        <Typography variant='h1'>Создание нового объявления</Typography>
        <Typography variant='h5' color='secondary'>
          Для заполнения потребуется около 5 минут
        </Typography>
        {/*<Switch>*/}
        {/*  <Route path="/create-ad/some" component={CreateAdFirstStep} exact/>*/}
        {/*  <Route path="/create-ad/:id/can" component={CreateAdSecondStep} exact/>*/}
        {/*</Switch>*/}
      </Container>
    )
  }
}

export default CreateAd