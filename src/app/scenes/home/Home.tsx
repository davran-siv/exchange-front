import { Box, Container, Grid, Typography, withStyles } from '@material-ui/core'
import ListingCard from 'app/components/listingCard/ListingCard'
import Categories from 'app/containers/categories/categories'
import React, { Component, Fragment } from 'react'
import { RouteComponentProps } from 'react-router'

interface HomeSceneState extends RouteComponentProps<void> {
  classes: any
}

interface HomeSceneProps {

}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const useStyles = theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
})

class HomeScene extends Component<HomeSceneState, HomeSceneProps> {
  onCategorySelect = (categoryId: string) => {
    console.log(categoryId)
  }
  onCategoryDeselect = () => {
    console.log('onCategoryDeselect')
  }

  render() {
    const { classes } = this.props

    return (
      <Fragment>
        <Container className={classes.cardGrid} maxWidth="md">
          <Categories
            onSelect={this.onCategorySelect}
            onDeselect={this.onCategoryDeselect}
            value=''
          />
          <Box mt='50px'>
            <Typography variant='h1'>Все объявления</Typography>
          </Box>
          <Box mt='50px'>
            <Grid container spacing={4} justify='space-between'>
              {cards.map(card => (
                <ListingCard key={card}/>
              ))}
            </Grid>
          </Box>
        </Container>
      </Fragment>
    )
  }
}

export default withStyles(useStyles)(HomeScene)