import { DataStatusType } from 'app/constants'
import { Action, CommonReducer, UserResponseDTO } from 'app/interfaces'
import createReducer from 'app/redux/createReducer'
import { userActionTypes } from 'app/redux/user/user.actions'

export interface UserReducerDTO {
  me: CommonReducer
  currentUser: UserResponseDTO | null
}

const defaultState: UserReducerDTO = {
  currentUser: null,
  me: {
    status: DataStatusType.NOT_TOUCHED,
    errorText: ''
  }
}

export const userReducer = createReducer<userActionTypes, UserReducerDTO>(defaultState, {
  [userActionTypes.USER_ME_REQUEST](state: UserReducerDTO, action: Action<userActionTypes>) {
    return {
      ...state,
      me: {
        status: DataStatusType.REQUESTED
      }
    }
  },
  [userActionTypes.USER_SET_CURRENT_USER](state: UserReducerDTO, action: Action<userActionTypes, { user: UserResponseDTO }>) {
    return {
      ...state,
      currentUser: action.payload.user
    }
  },
  [userActionTypes.USER_REMOVE_CURRENT_USER](state: UserReducerDTO, action: Action<userActionTypes>) {
    return {
      ...state,
      currentUser: null
    }
  }
})
