import { DataStatusType } from 'app/constants'
import { AuthReducerDTO } from 'app/redux/auth/auth.reducer'
import { UserReducerDTO } from 'app/redux/user/user.reducer'

export interface Action<T, P = null> {
  type: T;
  payload: P;
}


export interface RootReducer {
  auth: AuthReducerDTO
  user: UserReducerDTO
}

export interface CommonReducer {
  status: DataStatusType
  errorText: string
}
