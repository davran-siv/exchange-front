import { gql } from 'apollo-boost'
import { accessTokenKeyInLocalStorage, refreshTokenKeyInLocalStorage } from 'app/constants'
import { UserCreateRequestDTO } from 'app/interfaces'
import { AuthJwtTokes } from 'app/interfaces/auth'
import {
  authActionTypes,
  authSignInSuccess,
  authSignUpError,
  authSignUpSuccess,
  authValidateEmailSuccess
} from 'app/redux/auth/auth.actions'
import { userRemoveCurrentUser, userSetCurrentUser } from 'app/redux/user/user.actions'
import { fork, put, takeEvery } from 'redux-saga/effects'
import { apolloClient } from '../../../main'

const setTokensToLocalStorage = (dto: AuthJwtTokes) => {
  localStorage.setItem(accessTokenKeyInLocalStorage, dto.accessToken)
  localStorage.setItem(refreshTokenKeyInLocalStorage, dto.refreshToken)
}

export const getAccessToken = () => localStorage.getItem(accessTokenKeyInLocalStorage)
export const removeTokens = () => {
  localStorage.removeItem(accessTokenKeyInLocalStorage)
  localStorage.removeItem(refreshTokenKeyInLocalStorage)
}

function authorizeUser(dto: AuthJwtTokes) {
  setTokensToLocalStorage(dto)
}

function* authValidateEmailRequestWorker({ payload }: { payload: { email: string } }) {
  const { loading, data, networkStatus } = yield apolloClient
  .query({
    query: gql` query userGetEmailStatus($email: String!){
        userGetEmailStatus(email: $email){
            status
        }

    }
    `,
    variables: { email: payload.email }
  })
  const { status } = data.userGetEmailStatus
  yield put(authValidateEmailSuccess({ status }))
}

export function* authValidateEmailRequestWatcher() {
  yield takeEvery(authActionTypes.AUTH_VALIDATE_EMAIL_REQUEST as any, authValidateEmailRequestWorker)
}

function* authSignUpRequestWorker({ payload }: { payload: UserCreateRequestDTO }) {
  const { loading, data, networkStatus } = yield apolloClient
  .mutate({
    mutation: gql` mutation userCreate($user: UserCreateInput!){
        userCreate(user: $user){
            user {
                id,
                firstName,
                lastName,
                email,
                isEmailVerified,
                isPhoneVerified,
                phoneNumber,
                photo
            },
            tokens {
                accessToken,
                refreshToken
            }
        }
    }
    `,
    variables: { user: payload }
  })
  const {
    user: { __typename, ...user },
    tokens: { __typename: tokensTypename, ...tokens }
  } = data.userCreate
  yield put(authSignUpSuccess())
  yield put(userSetCurrentUser(user))
  yield authorizeUser(tokens)
}

export function* authSignUpRequestWatcher() {
  yield takeEvery(authActionTypes.AUTH_SIGN_UP_REQUEST as any, authSignUpRequestWorker)
}

function* authSignInRequestWorker({ payload }: { payload: UserCreateRequestDTO }) {
  try {
    const { loading, data, networkStatus } = yield apolloClient
    .query({
      query: gql` query authLoginByCredentials($auth: AuthLoginByCredentialsQuery!){
          authLoginByCredentials(auth: $auth){
              user {
                  id,
                  firstName,
                  lastName,
                  email,
                  isEmailVerified,
                  isPhoneVerified,
                  phoneNumber,
                  photo
              },
              tokens {
                  accessToken,
                  refreshToken
              }
          }
      }
      `,
      variables: { auth: payload }
    })
    const {
      user: { __typename, ...user },
      tokens: { __typename: tokensTypename, ...tokens }
    } = data.authLoginByCredentials
    yield put(authSignInSuccess())
    yield put(userSetCurrentUser(user))
    yield authorizeUser(tokens)
  } catch (e) {
    console.error('[SAGA] authSignInRequestWorker => ', e)
    yield put(authSignUpError(e))
  }
}

export function* authSignInRequestWatcher() {
  yield takeEvery(authActionTypes.AUTH_SIGN_IN_REQUEST as any, authSignInRequestWorker)
}

function* authSignOutWorker() {
  yield put(userRemoveCurrentUser())
  removeTokens()
}

export function* authSignOutWatcher() {
  yield takeEvery(authActionTypes.AUTH_SIGN_OUT as any, authSignOutWorker)
}

const authSaga = [
  fork(authValidateEmailRequestWatcher),
  fork(authSignUpRequestWatcher),
  fork(authSignInRequestWatcher),
  fork(authSignOutWatcher)
]

export default authSaga
