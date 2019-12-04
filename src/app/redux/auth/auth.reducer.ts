import { DataStatusType, EmailStatus } from 'app/constants'
import { Action, UserResponseDTO } from 'app/interfaces'
import { authActionsDTO } from 'app/redux/auth/auth.actions'
import createReducer from 'app/redux/createReducer'

export interface ValidateEmailDTO {
  status: DataStatusType,
  result: any,
  errorText: string
}

interface CurrentUserDTO {
  user: UserResponseDTO | null,
  status: DataStatusType,
  errorText: string
}

export interface AuthReducerDTO {
  validateEmail: ValidateEmailDTO
  contextEmail: string
  currentUser: CurrentUserDTO
}

const defaultState: AuthReducerDTO = {
  validateEmail: {
    status: DataStatusType.NOT_TOUCHED,
    result: null,
    errorText: ''
  },
  contextEmail: '',
  currentUser: {
    user: null,
    status: DataStatusType.NOT_TOUCHED,
    errorText: ''
  }
}

export const authReducer = createReducer<authActionsDTO, AuthReducerDTO>(defaultState, {
  [authActionsDTO.AUTH_VALIDATE_EMAIL_REQUEST](state: AuthReducerDTO, action: Action<authActionsDTO, { email: string }>) {
    return {
      ...state,
      validateEmail: {
        ...state.validateEmail,
        status: DataStatusType.REQUESTED
      },
      contextEmail: action.payload.email
    }
  },
  [authActionsDTO.AUTH_VALIDATE_EMAIL_SUCCESS](state: AuthReducerDTO, action: Action<authActionsDTO, { status: EmailStatus }>) {
    return {
      ...state,
      validateEmail: {
        result: action.payload.status,
        status: DataStatusType.SUCCEEDED
      }
    }
  },
  [authActionsDTO.AUTH_SIGN_UP_REQUEST](state: AuthReducerDTO, action: Action<authActionsDTO>) {
    return {
      ...state,
      currentUser: {
        status: DataStatusType.REQUESTED
      }
    }
  },
  [authActionsDTO.AUTH_SIGN_UP_SUCCESS](state: AuthReducerDTO, action: Action<authActionsDTO, UserResponseDTO>) {
    return {
      ...state,
      currentUser: {
        status: DataStatusType.SUCCEEDED,
        user: action.payload
      }
    }
  },
  [authActionsDTO.AUTH_SIGN_UP_ERROR](state: AuthReducerDTO, action: Action<authActionsDTO, { errorText: string }>) {
    return {
      ...state,
      currentUser: {
        status: DataStatusType.ERROR,
        errorText: action.payload.errorText
      }
    }
  }
})
