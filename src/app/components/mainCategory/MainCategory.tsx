import { Card, CardMedia, makeStyles, Theme } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    width: 200,
    height: 140
  },
  media: {
    height: 155
  },
  can: {
    // title:
  },
  want: {}
}))

interface MainCategoryProps {
  id: string
  icon: string
  title: string
}

const MainCategory = (props: MainCategoryProps) => {
  const classes = useStyles({})
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={props.icon}
        title={props.title}
      />
    </Card>
  )
}

export default MainCategory