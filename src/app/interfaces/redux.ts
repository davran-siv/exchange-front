import { AuthReducerDTO } from 'app/redux/auth/auth.reducer'

export interface Action<T, P = null> {
  type: T;
  payload: P;
}


export interface RootReducer {
  auth: AuthReducerDTO
}
