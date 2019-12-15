import { EmailStatus } from 'app/constants'
import { UserCreateRequestDTO } from 'app/interfaces'
import { AuthSignInDTO } from 'app/interfaces/auth'

export enum authActionTypes {
  AUTH_VALIDATE_EMAIL_REQUEST = '[AUTH] VALIDATE EMAIL REQUEST',
  AUTH_VALIDATE_EMAIL_SUCCESS = '[AUTH] VALIDATE EMAIL SUCCESS',
  AUTH_VALIDATE_EMAIL_ERROR = '[AUTH] VALIDATE EMAIL ERROR',

  AUTH_SIGN_UP_REQUEST = '[AUTH] SIGN UP REQUEST',
  AUTH_SIGN_UP_SUCCESS = '[AUTH] SIGN UP SUCCESS',
  AUTH_SIGN_UP_ERROR = '[AUTH] SIGN UP ERROR',

  AUTH_SIGN_IN_REQUEST = '[AUTH] SIGN IN REQUEST',
  AUTH_SIGN_IN_SUCCESS = '[AUTH] SIGN IN SUCCESS',
  AUTH_SIGN_IN_ERROR = '[AUTH] SIGN IN ERROR',

  AUTH_SIGN_OUT = '[AUTH] SIGN OUT',

  AUTH_ME_REQUEST = '[AUTH] ME REQUEST',
  AUTH_ME_SUCCESS = '[AUTH] ME SUCCESS',
  AUTH_ME_ERROR = '[AUTH] ME ERROR'
}

export const authValidateEmailRequest = (email: string) => ({
  type: authActionTypes.AUTH_VALIDATE_EMAIL_REQUEST,
  payload: { email }
})

export const authValidateEmailSuccess = ({ status }: { status: EmailStatus }) => ({
  type: authActionTypes.AUTH_VALIDATE_EMAIL_SUCCESS,
  payload: { status }
})

export const authValidateEmailError = (errorText: string) => ({
  type: authActionTypes.AUTH_VALIDATE_EMAIL_ERROR,
  payload: { errorText }
})

export const authSignUpRequest = (payload: UserCreateRequestDTO) => ({
  type: authActionTypes.AUTH_SIGN_UP_REQUEST,
  payload
})

export const authSignUpSuccess = () => ({
  type: authActionTypes.AUTH_SIGN_UP_SUCCESS
})

export const authSignUpError = (errorText: string) => ({
  type: authActionTypes.AUTH_SIGN_UP_ERROR,
  payload: { errorText }
})

export const authSignInRequest = (payload: AuthSignInDTO) => ({
  type: authActionTypes.AUTH_SIGN_IN_REQUEST,
  payload
})

export const authSignInSuccess = () => ({
  type: authActionTypes.AUTH_SIGN_IN_SUCCESS
})

export const authSignInError = (errorText: string) => ({
  type: authActionTypes.AUTH_SIGN_IN_ERROR,
  payload: { errorText }
})

export const authSignOut = () => ({
  type: authActionTypes.AUTH_SIGN_OUT
})
