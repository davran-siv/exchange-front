import { EmailStatus } from 'app/constants/email'

export interface UserValidateEmailResponseDTO {
  status: EmailStatus
}

export interface UserCreateRequestDTO {
  firstName: string
  lastName: string
  password: string
  email: string
}

export interface UserResponseDTO {
  id: string
  firstName: string
  lastName: string
  email: string
  photo: string | null
  isEmailVerified: boolean
  phoneNumber: string | null
  isPhoneVerified: boolean
}
