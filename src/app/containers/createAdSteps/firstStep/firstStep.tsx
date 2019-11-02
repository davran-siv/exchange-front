import { Button, createStyles, makeStyles, Snackbar, Theme } from '@material-ui/core'
import { amber, green } from '@material-ui/core/colors'
import Categories from 'app/containers/categories/categories'
import { Formik } from 'formik'
import React, { Fragment } from 'react'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  categoryId: Yup.string().required('Выберите категорию')
})

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

    success: {
      backgroundColor: green[600]
    },
    error: {
      backgroundColor: theme.palette.error.dark
    },
    info: {
      backgroundColor: theme.palette.primary.main
    },
    warning: {
      backgroundColor: amber[700]
    },
    icon: {
      fontSize: 20
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing(1)
    },
    message: {
      display: 'flex',
      alignItems: 'center'
    }
  })
)

const CreateAdFirstStep = (props: any) => {
  const classes = useStyles({})

  return (
    <Formik
      initialValues={{
        categoryId: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {({ values, errors, submitForm, setFieldValue }) => {
        const onCategorySelect = (categoryId) => {
          setFieldValue('categoryId', categoryId)
        }
        const onCategoryDeselect = () => {
          setFieldValue('categoryId', '')
        }

        return (
          <Fragment>
            <Categories
              onSelect={onCategorySelect}
              onDeselect={onCategoryDeselect}
              value={values.categoryId}
            />
            <Button onClick={submitForm}>Дальше</Button>
            <Snackbar
              className={classes['error']}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              open={!!errors.categoryId}
              // autoHideDuration={6000}
              ContentProps={{
                'aria-describedby': 'message-id'
              }}
              message={<span id="message-id">{errors.categoryId}</span>}
            />
          </Fragment>
        )
      }}
    </Formik>
  )
}

export default CreateAdFirstStep