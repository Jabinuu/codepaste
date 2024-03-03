import defHttp from '../http'
import type { ChangePasswordFormState, LoginFormState, RegisterFormState } from '@/types/auth.type'

export function reqRegister(data: RegisterFormState) {
  return defHttp.post('/user/register', data)
}
export function reqLogin(data: LoginFormState) {
  return defHttp.post('/user/login', data)
}
export function reqChangePassword(data: ChangePasswordFormState) {
  return defHttp.patch('/user/change', data)
}
export function reqUpdateToken(data: { username: string }) {
  return defHttp.post('/user/updateToken', data)
}
