import { gql } from 'apollo-boost'
import { UserValidateEmailResponseDTO } from 'app/interfaces'
import { apolloClient } from '../../main'

export interface UserService {
  validateEmail(email: string): Promise<UserValidateEmailResponseDTO>
}

export class UserServiceImplementation implements UserService {
  async validateEmail(email: string): Promise<UserValidateEmailResponseDTO> {
    const { loading, data, networkStatus } = await apolloClient
    .query({
      query: gql` query userGetEmailStatus($email: String!){
          userGetEmailStatus(email: $email){
              status
          }

      }
      `,
      variables: {email}
    })
    return data.userGetEmailStatus
  }
}

