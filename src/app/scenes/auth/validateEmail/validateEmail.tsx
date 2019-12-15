import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { CustomTextField } from 'app/components/common/formInput'
import { EmailStatus, isSucceededStatus } from 'app/constants'
import { RootReducer } from 'app/interfaces'
import { authValidateEmailRequest } from 'app/redux/auth/auth.actions'
import { ValidateEmailDTO } from 'app/redux/auth/auth.reducer'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required('Введите вашу почту')
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

interface ValidateEmailProps extends ValidateEmailDTO {
  validateEmail: (email: string) => void,
}

const ValidateEmailComponent = (props: ValidateEmailProps) => {
  const classes = useStyles({})
  if (isSucceededStatus(props.status)) {
    switch (props.result) {
      case EmailStatus.free:
        return <Redirect to='/sign-up'/>
      case EmailStatus.exists:
      case EmailStatus.notConfirmed:
        return <Redirect to='/sign-in'/>
    }
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Вход
        </Typography>
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            email: ''
          }}
          onSubmit={(values) => {
            props.validateEmail(values.email)
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

const mapStateToProps = (state: RootReducer, ownProps) => {
  return {
    ...ownProps,
    ...state.auth.validateEmail
  }
}

const mapDispatchToProps = (dispatch => ({
  validateEmail: (email) => dispatch(authValidateEmailRequest(email))
}))

const ValidateEmail = connect(
  mapStateToProps,
  mapDispatchToProps
)(ValidateEmailComponent)

export default ValidateEmail
