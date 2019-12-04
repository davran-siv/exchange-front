import { gql } from 'apollo-boost'
import { accessTokenKeyInLocalStorage, refreshTokenKeyInLocalStorage } from 'app/constants'
import { UserCreateRequestDTO } from 'app/interfaces'
import { AuthJwtTokes } from 'app/interfaces/auth'
import { authActionsDTO, authSignUpSuccess, authValidateEmailSuccess } from 'app/redux/auth/auth.actions'
import { fork, put, takeEvery } from 'redux-saga/effects'
import { apolloClient } from '../../../main'

const setTokensToLocalStorage = (dto: AuthJwtTokes) => {
  localStorage.setItem(accessTokenKeyInLocalStorage, dto.accessToken)
  localStorage.setItem(refreshTokenKeyInLocalStorage, dto.refreshToken)
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
  yield takeEvery(authActionsDTO.AUTH_VALIDATE_EMAIL_REQUEST as any, authValidateEmailRequestWorker)
}

function* authSignUpRequestWorker({ payload }: { payload: UserCreateRequestDTO }) {
  const { loading, data, networkStatus } = yield apolloClient
  .mutate({
    mutation: gql` mutation userC($user: UserCreateInput!){
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
  yield put(authSignUpSuccess(user))
  yield authorizeUser(tokens)
}

export function* authSignUpRequestWatcher() {
  yield takeEvery(authActionsDTO.AUTH_SIGN_UP_REQUEST as any, authSignUpRequestWorker)
}

const authSaga = [
  fork(authValidateEmailRequestWatcher),
  fork(authSignUpRequestWatcher)
]

export default authSaga
