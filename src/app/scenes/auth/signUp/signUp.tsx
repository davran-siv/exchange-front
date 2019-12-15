import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { CustomTextField } from 'app/components/common/formInput'
import { RootReducer, UserCreateRequestDTO } from 'app/interfaces'
import { authSignUpRequest } from 'app/redux/auth/auth.actions'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Введите имя'),
  lastName: Yup.string().required('Введите фамилию'),
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
  signUp: (user: UserCreateRequestDTO) => void
}

const SignUpComponent = (props: ValidateEmailProps) => {
  const classes = useStyles({})
  if(!props.contextEmail) {
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
          Регистрация
        </Typography>
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            firstName: '',
            lastName: '',
            password: '',
            email: props.contextEmail
          }}
          onSubmit={(values) => {
            props.signUp(values)
          }}
        >
          {({ values, errors, submitForm, setFieldValue, handleSubmit, isSubmitting }) => {
            return (
              <Form>
                <div>
                  <Field
                    name="firstName"
                    label='First name'
                    component={CustomTextField}
                  />
                </div>
                <div>
                  <Field
                    name="lastName"
                    label='Last name'
                    component={CustomTextField}
                  />
                </div>
                <div>
                  <Field
                    name="password"
                    label='Password'
                    type='password'
                    component={CustomTextField}
                  />
                </div>
                <Button onClick={submitForm}>Зарегистрироваться</Button>
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
  contextEmail: state.auth.contextEmail
})

const mapDispatchToProps = (dispatch => ({
  signUp: (user) => dispatch(authSignUpRequest(user))
}))

const SignUp = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpComponent)

export default SignUp
