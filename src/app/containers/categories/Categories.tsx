import { Grid } from '@material-ui/core'
import MainCategory from 'app/components/mainCategory/MainCategory'
import React from 'react'

const categories = [
  {
    id: 'real-estate',
    icon: '/assets/icons/real-estate.svg',
    title: 'Недвижимость'
  },
  {
    id: 'real-estate',
    icon: '/assets/icons/real-estate.svg',
    title: 'Недвижимость'
  },
  {
    id: 'real-estate',
    icon: '/assets/icons/real-estate.svg',
    title: 'Недвижимость'
  },
  {
    id: 'real-estate',
    icon: '/assets/icons/real-estate.svg',
    title: 'Недвижимость'
  }
]

class Categories extends React.Component<any> {
  render() {
    return (
      <Grid container spacing={4}>
        {categories.map(category => (
          <MainCategory key={category.id} {...category}/>
        ))}
      </Grid>
    )
  }
}

export default Categories