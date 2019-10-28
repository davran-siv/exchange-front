import { Box, withStyles } from '@material-ui/core'
import MainCategory from 'app/components/mainCategory/MainCategory'
import React from 'react'

const categories = [
  {
    id: 'real-estate',
    icon: '/assets/icons/category/real-estate.svg',
    title: 'Недвижимость'
  },
  {
    id: 'animal',
    icon: '/assets/icons/category/animal.svg',
    title: 'Животные'
  },
  {
    id: 'appliance',
    icon: '/assets/icons/category/appliance.svg',
    title: 'Бытовая техника'
  },
  {
    id: 'beauty',
    icon: '/assets/icons/category/beauty.svg',
    title: 'Красота и здоровье'
  },
  {
    id: 'business',
    icon: '/assets/icons/category/business.svg',
    title: 'Для бизнеса'
  },
  {
    id: 'car',
    icon: '/assets/icons/category/car.svg',
    title: 'Машины'
  },
  {
    id: 'forHomeAndGarden',
    icon: '/assets/icons/category/forHomeAndGarden.svg',
    title: 'Для дома и дачи'
  },
  {
    id: 'hobby',
    icon: '/assets/icons/category/hobby.svg',
    title: 'Хобби и отдых'
  },
  {
    id: 'personalItem',
    icon: '/assets/icons/category/personalItem.svg',
    title: 'Личные вещи'
  },
  {
    id: 'service',
    icon: '/assets/icons/category/service.svg',
    title: 'Услуги'
  }
]

const useStyles = theme => ({
  box: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 150px))',
    gridColumnGap: 20,
    gridRowGap: 20,
    justifyContent: 'space-between'
  }
})


class Categories extends React.Component<any> {
  render() {
    const { classes } = this.props
    return (
      <Box className={classes.box}>
        {categories.map(category => (
          <MainCategory key={category.id} {...category}/>
        ))}
      </Box>
    )
  }
}

export default withStyles(useStyles)(Categories)