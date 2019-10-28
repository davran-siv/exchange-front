import { Card, CardContent, CardMedia, Grid, makeStyles, Theme, Typography } from '@material-ui/core'
import React from 'react'
// import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    maxWidth: 240
  },
  media: {
    height: 155
  },
  can: {
    // title:
  },
  want: {}
}))

const ListingCard = (props: any) => {
  const classes = useStyles({})
  return (
    <Grid item>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/assets/temporary/listing-item.png"
          title="Image title"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            Могу
          </Typography>
          <Typography>
            Сделать дизайн для сайта
          </Typography>
          <Typography gutterBottom variant="h4" component="h2">
            Хочу
          </Typography>
          <Typography>
            Разработку сайта, ремонт ходовой части, ноутбук
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default ListingCard