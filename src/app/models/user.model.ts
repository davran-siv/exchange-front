export class UserModel {
  readonly id: string
  readonly firstName: string
  readonly lastName: string
  readonly emailAddress: string
  readonly photo: string | null
  readonly isEmailVerified: boolean

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
