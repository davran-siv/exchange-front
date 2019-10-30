import { Box, Button, Typography, withStyles } from '@material-ui/core'
import MainCategory from 'app/components/mainCategory/MainCategory'
import { ICategory } from 'app/interfaces'
import React from 'react'

const categories: ICategory[] = [
  {
    id: 'realEstate',
    icon: '/assets/icons/category/real-estate.svg',
    title: 'Недвижимость',
    parentCategory: null
  },
  {
    id: 'animal',
    icon: '/assets/icons/category/animal.svg',
    title: 'Животные',
    parentCategory: null
  },
  {
    id: 'appliance',
    icon: '/assets/icons/category/appliance.svg',
    title: 'Бытовая техника',
    parentCategory: null
  },
  {
    id: 'beauty',
    icon: '/assets/icons/category/beauty.svg',
    title: 'Красота и здоровье',
    parentCategory: null
  },
  {
    id: 'business',
    icon: '/assets/icons/category/business.svg',
    title: 'Для бизнеса',
    parentCategory: null
  },
  {
    id: 'car',
    icon: '/assets/icons/category/car.svg',
    title: 'Машины',
    parentCategory: null
  },
  {
    id: 'forHomeAndGarden',
    icon: '/assets/icons/category/forHomeAndGarden.svg',
    title: 'Для дома и дачи',
    parentCategory: null
  },
  {
    id: 'hobby',
    icon: '/assets/icons/category/hobby.svg',
    title: 'Хобби и отдых',
    parentCategory: null
  },
  {
    id: 'personalItem',
    icon: '/assets/icons/category/personalItem.svg',
    title: 'Личные вещи',
    parentCategory: null
  },
  {
    id: 'service',
    icon: '/assets/icons/category/service.svg',
    title: 'Услуги',
    parentCategory: null
  }
]

const subcategories: ICategory[] = [
  {
    id: 'commercialProperty',
    title: 'Коммерческая недвижимость',
    parentCategory: {
      id: 'realEstate',
      icon: '/assets/icons/category/real-estate.svg',
      title: 'Недвижимость',
      parentCategory: null
    }
  },
  {
    id: 'shop',
    title: 'Магазины',
    parentCategory: {
      id: 'commercialProperty',
      title: 'Коммерческая недвижимость'
    }
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

interface CategoriesProps {
  onSelect: (categoryId: string) => void,
  classes: any
}

interface CategoriesState {
  selectedMainCategory: ICategory | null
  selectedSubcategories: ICategory[]
  subcategories: ICategory[]
}

class Categories extends React.Component<CategoriesProps, CategoriesState> {
  state = {
    selectedMainCategory: null,
    selectedSubcategories: [],
    subcategories: []
  }

  getSubCategories = async (categoryId: string): Promise<ICategory[]> => {
    return subcategories.filter(it => it.parentCategory.id === categoryId)
  }

  onClick = async (category: ICategory): Promise<void> => {
    console.log('category => ', category)
    if (!category.parentCategory) {
      this.setState({ selectedMainCategory: category })
    } else {
      this.setState({
        selectedSubcategories: [...this.state.selectedSubcategories, category]
      })
    }
    const subcategories = await this.getSubCategories(category.id)
    this.setState({ subcategories })
    if (!subcategories.length) {
      this.props.onSelect(category.id)
    }
  }

  render() {
    const { classes } = this.props
    return (
      <Box className={classes.box}>
        {categories.map(category => (
          <MainCategory
            key={category.id}
            isActive={
              this.state.selectedMainCategory
              && this.state.selectedMainCategory.id === category.id
            }
            category={category}
            onClick={this.onClick}
          />
        ))}
        {this.state.selectedSubcategories.map(category => (
          <Typography key={category.id}>{category.title}</Typography>
        ))}
        {this.state.subcategories.map(category => (
          <Button key={category.id} onClick={() => this.onClick(category)}>{category.title}</Button>
        ))}
      </Box>
    )
  }
}

export default withStyles(useStyles)(Categories)