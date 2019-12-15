import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { CustomTextField } from 'app/components/common/formInput'
import { isSucceededStatus } from 'app/constants'
import { CommonReducer, RootReducer } from 'app/interfaces'
import { AuthSignInDTO } from 'app/interfaces/auth'
import { authSignInRequest } from 'app/redux/auth/auth.actions'
import { Field, Form, Formik } from 'formik'
import { History } from 'history'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  password: Yup.string().required('Введите пароль')
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

interface ValidateEmailProps {
  contextEmail: string | null
  signIn: (dto: AuthSignInDTO) => void,
  signInState: CommonReducer,
  history: History
}

const SignInComponent = (props: ValidateEmailProps) => {
  useEffect(() => {
    if (isSucceededStatus(props.signInState.status)) {
      props.history.push('/')
    }
  }, [props.signInState.status])

  const classes = useStyles({})
  if (!props.contextEmail) {
    return <Redirect to='/auth'/>
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Войти
        </Typography>
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            password: '',
            email: props.contextEmail
          }}
          onSubmit={(values) => {
            props.signIn(values)
          }}
        >
          {({ values, errors, submitForm, setFieldValue, handleSubmit, isSubmitting }) => {
            return (
              <Form>
                <div>
                  <Field
                    name="password"
                    label='Password'
                    type='password'
                    component={CustomTextField}
                  />
                </div>
                <Button onClick={submitForm}>Войти</Button>
              </Form>
            )
          }}
        </Formik>
      </div>
    </Container>
  )
}

const mapStateToProps = (state: RootReducer, ownProps) => ({
  ...ownProps,
  contextEmail: state.auth.contextEmail,
  signInState: state.auth.signIn
})

const mapDispatchToProps = (dispatch => ({
  signIn: (payload) => dispatch(authSignInRequest(payload))
}))

const SignIn = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInComponent)

export default SignIn
