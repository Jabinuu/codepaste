import defHttp from '../http'
import type { ChangeProfileReq } from '@/types/user.type'

export const reqGetUserInfo = () => defHttp.get('/user/userInfo')
export const reqChangeProfile = (data: ChangeProfileReq) => defHttp.patch('/user/changeProfile', data)
export const reqGetUserInfoById = (data: { id: number }) => defHttp.post('/user/userInfoById', data)
