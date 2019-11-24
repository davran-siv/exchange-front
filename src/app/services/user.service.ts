import { EmailStatus } from 'app/constants/email'
import { UserValidateEmailResponseDTO } from 'app/interfaces'

interface UserService {
  validateEmail(email: string): Promise<UserValidateEmailResponseDTO>
}

export class UserServiceImplementation implements UserService {
  async validateEmail(email: string): Promise<UserValidateEmailResponseDTO> {
    return {
      status: EmailStatus.exists
    }
  }
}

