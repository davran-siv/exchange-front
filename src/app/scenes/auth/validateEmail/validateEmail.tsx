import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { CustomTextField } from 'app/components/common/formInput'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required('Введите вашу почту'),
})



const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

const ValidateEmail = () => {
  const classes = useStyles({})

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            email: ''
          }}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          {({ values, errors, submitForm, setFieldValue, handleSubmit, isSubmitting }) => {
            return (
              <Form>
                <div>
                  <Field
                    name="email"
                    label='Email'
                    type='email'
                    component={CustomTextField}
                  />
                </div>
                <Button onClick={submitForm}>Дальше</Button>
              </Form>
            )
          }}
        </Formik>
      </div>
    </Container>
  )
}

export default ValidateEmail
