import authSaga from 'app/redux/auth/auth.saga'
import { all } from 'redux-saga/effects'

export default function* startForman() {
  yield all([
    ...authSaga
  ]);
}
