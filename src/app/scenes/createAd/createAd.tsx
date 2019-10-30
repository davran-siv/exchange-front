import { Container, Typography } from '@material-ui/core'
import Categories from 'app/containers/categories/categories'
import React from 'react'

class CreateAd extends React.Component<any> {
  onCategorySelect = (categoryId: string) => {
    console.log(categoryId)
  }

  render() {
    return (
      <Container>
        <Typography variant='h1'>Создание нового объявления</Typography>
        <Typography variant='h5' color='secondary'>Создание нового объявления</Typography>
        <Categories onSelect={this.onCategorySelect}/>
      </Container>
    )
  }
}

export default CreateAd