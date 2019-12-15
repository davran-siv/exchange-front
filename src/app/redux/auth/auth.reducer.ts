import { DataStatusType, EmailStatus } from 'app/constants'
import { Action, CommonReducer } from 'app/interfaces'
import { authActionTypes } from 'app/redux/auth/auth.actions'
import createReducer from 'app/redux/createReducer'

export interface ValidateEmailDTO extends CommonReducer {
  result: any,
}

export interface AuthReducerDTO {
  validateEmail: ValidateEmailDTO
  contextEmail: string,
  signUp: CommonReducer
  signIn: CommonReducer
}

const defaultState: AuthReducerDTO = {
  validateEmail: {
    status: DataStatusType.NOT_TOUCHED,
    result: null,
    errorText: ''
  },
  contextEmail: '',
  signUp: {
    status: DataStatusType.NOT_TOUCHED,
    errorText: ''
  },
  signIn: {
    status: DataStatusType.NOT_TOUCHED,
    errorText: ''
  }
}

export const authReducer = createReducer<authActionTypes, AuthReducerDTO>(defaultState, {
  [authActionTypes.AUTH_VALIDATE_EMAIL_REQUEST](state: AuthReducerDTO, action: Action<authActionTypes, { email: string }>) {
    return {
      ...state,
      validateEmail: {
        ...state.validateEmail,
        status: DataStatusType.REQUESTED
      },
      contextEmail: action.payload.email
    }
  },
  [authActionTypes.AUTH_VALIDATE_EMAIL_SUCCESS](state: AuthReducerDTO, action: Action<authActionTypes, { status: EmailStatus }>) {
    return {
      ...state,
      validateEmail: {
        result: action.payload.status,
        status: DataStatusType.SUCCEEDED
      }
    }
  },
  [authActionTypes.AUTH_SIGN_UP_REQUEST](state: AuthReducerDTO, action: Action<authActionTypes>) {
    return {
      ...state,
      signUp: {
        ...state.signUp,
        status: DataStatusType.REQUESTED
      }
    }
  },
  [authActionTypes.AUTH_SIGN_UP_SUCCESS](state: AuthReducerDTO, action: Action<authActionTypes>) {
    return {
      ...state,
      signUp: {
        ...state.signUp,
        status: DataStatusType.REQUESTED
      }
    }
  },
  [authActionTypes.AUTH_SIGN_UP_ERROR](state: AuthReducerDTO, action: Action<authActionTypes, { errorText: string }>) {
    return {
      ...state,
      signUp: {
        ...state.signUp,
        status: DataStatusType.REQUESTED,
        errorText: action.payload.errorText
      }
    }
  },
  [authActionTypes.AUTH_SIGN_IN_REQUEST](state: AuthReducerDTO, action: Action<authActionTypes>) {
    return {
      ...state,
      signIn: {
        ...state.signIn,
        status: DataStatusType.REQUESTED
      }
    }
  },
  [authActionTypes.AUTH_SIGN_IN_SUCCESS](state: AuthReducerDTO, action: Action<authActionTypes>) {
    return {
      ...state,
      signIn: {
        ...state.signIn,
        status: DataStatusType.SUCCEEDED
      }
    }
  },
  [authActionTypes.AUTH_SIGN_IN_ERROR](state: AuthReducerDTO, action: Action<authActionTypes, { errorText: string }>) {
    return {
      ...state,
      signIn: {
        ...state.signIn,
        status: DataStatusType.ERROR,
        errorText: action.payload.errorText
      }
    }
  },
  [authActionTypes.AUTH_SIGN_OUT](state: AuthReducerDTO, action: Action<authActionTypes>) {
    return {
      ...state,
      validateEmail: {
        ...state.validateEmail,
        status: DataStatusType.NOT_TOUCHED
      },
      signUp: {
        ...state.signUp,
        status: DataStatusType.NOT_TOUCHED
      },
      signIn: {
        ...state.signIn,
        status: DataStatusType.NOT_TOUCHED
      }
    }
  }
})
