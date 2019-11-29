import { observable } from 'mobx'

export class UserModel {
  readonly id: string
  @observable readonly firstName: string
  @observable readonly lastName: string
  @observable readonly emailAddress: string
  @observable readonly photo: string | null
  @observable readonly isEmailVerified: boolean

  constructor(model: UserModel) {
    this.id = model.id
    this.firstName = model.firstName
    this.lastName = model.lastName
    this.emailAddress = model.emailAddress
    this.photo = model.photo
    this.isEmailVerified = model.isEmailVerified
  }
}

export default UserModel
