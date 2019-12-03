import { authReducer } from 'app/redux/auth/auth.reducer'
import { History } from 'history'
// import { routerReducer, RouterState } from 'react-router-redux'
import { combineReducers } from 'redux'

export interface RootState {
  // routerReducer: RouterState,
}

export default (history: History) =>
  combineReducers({
    auth: authReducer
  });
