import { UserValidateEmailResponseDTO } from 'app/interfaces'
import { UserModel } from 'app/models'
import { UserService, UserServiceImplementation } from 'app/services'
import { action, observable } from 'mobx'

export class  UserStore {
  constructor(fixtures?: UserModel[]) {
    this.users = fixtures
    this.service = new UserServiceImplementation()
  }

  private service: UserService


  @observable public users: UserModel[]
  @observable public validateEmailStatus: UserValidateEmailResponseDTO | null

  @action
  validateEmail = async (email: string): Promise<void> => {
    const {status} = await this.service.validateEmail(email)
    console.log('store validateEmail => ', status)
    this.validateEmailStatus = { status}
  }
}
