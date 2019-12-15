import { gql } from 'apollo-boost'
import { isUnauthorized } from 'app/constants'
import { getAccessToken, removeTokens } from 'app/redux/auth/auth.saga'
import { userActionTypes, userSetCurrentUser } from 'app/redux/user/user.actions'
import { fork, put, takeEvery } from 'redux-saga/effects'
import { apolloClient } from '../../../main'

function* userMeRequestWorker({ payload }: { payload: { email: string } }) {
  const token = getAccessToken()

  if (!token) {
    return
  }
  const { loading, data, networkStatus } = yield apolloClient
  .query({
    query: gql` query userMe{
        userMe{
            id,
            firstName,
            lastName,
            email,
            isEmailVerified,
            isPhoneVerified,
            phoneNumber,
            photo
        }

    }
    `
  }).catch(error => {
    if (isUnauthorized(error.graphQLErrors[0].message.statusCode)) {
      removeTokens()
    }
  })
  const result = data.userMe
  yield put(userSetCurrentUser(result))
}

export function* userMeRequestWatcher() {
  yield takeEvery(userActionTypes.USER_ME_REQUEST as any, userMeRequestWorker)
}

const userSaga = [
  fork(userMeRequestWatcher)
]

export default userSaga
