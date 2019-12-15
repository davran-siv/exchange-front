import { UserResponseDTO } from 'app/interfaces'

export enum userActionTypes {
  USER_ME_REQUEST = '[USER] ME REQUEST',
  USER_ME_SUCCESS = '[USER] ME SUCCESS',
  USER_ME_ERROR = '[USER] ME ERROR',
  USER_SET_CURRENT_USER = '[USER] SET CURRENT USER',
  USER_REMOVE_CURRENT_USER = '[USER] REMOVE CURRENT USER'

}


export const userMeRequest = () => ({
  type: userActionTypes.USER_ME_REQUEST
})

export const userMeSuccess = () => ({
  type: userActionTypes.USER_ME_SUCCESS
})

export const userMeError = (errorText: string) => ({
  type: userActionTypes.USER_ME_ERROR,
  payload: { errorText }
})

export const userSetCurrentUser = (user: UserResponseDTO) => ({
  type: userActionTypes.USER_SET_CURRENT_USER,
  payload: { user }
})

export const userRemoveCurrentUser = () => ({
  type: userActionTypes.USER_REMOVE_CURRENT_USER
})
