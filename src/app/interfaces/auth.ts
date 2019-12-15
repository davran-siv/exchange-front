export interface AuthJwtTokes {
  accessToken: string
  refreshToken: string
}

export interface AuthSignInDTO {
  email: string
  password: string
}
