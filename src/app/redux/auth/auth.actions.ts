import { EmailStatus } from 'app/constants'
import { UserCreateRequestDTO, UserResponseDTO } from 'app/interfaces'

export enum authActionsDTO {
  AUTH_VALIDATE_EMAIL_REQUEST = '[AUTH] VALIDATE EMAIL REQUEST',
  AUTH_VALIDATE_EMAIL_SUCCESS = '[AUTH] VALIDATE EMAIL SUCCESS',
  AUTH_VALIDATE_EMAIL_ERROR = '[AUTH] VALIDATE EMAIL ERROR',

  AUTH_SIGN_UP_REQUEST = '[AUTH] SIGN UP REQUEST',
  AUTH_SIGN_UP_SUCCESS = '[AUTH] SIGN UP SUCCESS',
  AUTH_SIGN_UP_ERROR = '[AUTH] SIGN UP ERROR'
}

export const authValidateEmailRequest = (email: string) => ({
  type: authActionsDTO.AUTH_VALIDATE_EMAIL_REQUEST,
  payload: { email }
})

export const authValidateEmailSuccess = ({ status }: { status: EmailStatus }) => ({
  type: authActionsDTO.AUTH_VALIDATE_EMAIL_SUCCESS,
  payload: { status }
})

export const authValidateEmailError = (errorText: string) => ({
  type: authActionsDTO.AUTH_VALIDATE_EMAIL_ERROR,
  payload: { errorText }
})

export const authSignUpRequest = (payload: UserCreateRequestDTO) => ({
  type: authActionsDTO.AUTH_SIGN_UP_REQUEST,
  payload
})

export const authSignUpSuccess = (user: UserResponseDTO) => ({
  type: authActionsDTO.AUTH_SIGN_UP_SUCCESS,
  payload: user
})

export const authSignUpError = (errorText: string) => ({
  type: authActionsDTO.AUTH_SIGN_UP_ERROR,
  payload: { errorText }
})
