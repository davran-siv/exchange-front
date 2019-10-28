import { Card, CardContent, CardMedia, makeStyles, Theme } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    padding: 10,
    width: 150,
    height: 120,
    borderRadius: 28,
    fontSize: 14
  },
  media: {
    backgroundSize: 'contain',
    height: 55
  },
  content: {
    paddingLeft: 0,
    paddingRight: 0,
    textAlign: 'center'
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
      <CardContent className={classes.content}>{props.title}</CardContent>
    </Card>
  )
}

export default MainCategory