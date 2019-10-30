import { Button, Card, CardContent, CardMedia, makeStyles, Theme } from '@material-ui/core'
import { ICategory } from 'app/interfaces'
import React from 'react'

interface UseStylesProps {
  isActive: boolean
}

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    padding: 10,
    width: 150,
    height: 120,
    borderRadius: 28,
    fontSize: 14,
    border: (props: UseStylesProps) => props.isActive ? '1px solid blue' : 'none'
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
  category: ICategory
  onClick: (category: ICategory) => void
  isActive?: boolean
}

const MainCategory = (props: MainCategoryProps) => {
  const classes = useStyles({ isActive: props.isActive })
  const onClick = () => props.onClick(props.category)
  return (
    <Button onClick={onClick}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.category.icon}
          title={props.category.title}
        />
        <CardContent className={classes.content}>{props.category.title}</CardContent>
      </Card>
    </Button>
  )
}

export default MainCategory