import defHttp from '../http'
import type { ChangeProfileReq } from '@/types/user.type'

export function reqGetUserInfo() {
  return defHttp.get('/user/userInfo')
}
export function reqChangeProfile(data: ChangeProfileReq) {
  return defHttp.patch('/user/changeProfile', data)
}

export function reqGetUserInfoById(data: { id: number }) {
  return defHttp.post('/user/userInfoById', data)
}
