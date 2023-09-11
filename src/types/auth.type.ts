export interface LoginFormState {
  username: string
  password: string
}

export interface RegisterFormState {
  username: string
  email: string
  password: string
  rePassword: string
}

export interface ChangePasswordFormState extends RegisterFormState {}
