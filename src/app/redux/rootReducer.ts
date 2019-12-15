import { authReducer } from 'app/redux/auth/auth.reducer'
import { userReducer } from 'app/redux/user/user.reducer'
import { History } from 'history'
import { combineReducers } from 'redux'

export interface RootState {
  // routerReducer: RouterState,
}

export default (history: History) =>
  combineReducers({
    auth: authReducer,
    user: userReducer
  });
