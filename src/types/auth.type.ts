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

export interface CurrentUser {
  id: number
  username: string
  email: string
  role: number
  avatarUrl: string
}
