import defHttp from '../http'
import type { ChangeProfileReq } from '@/types/user.type'
import type { ChangeCodeBody, UserCodeReqBody } from '@/types/http.type'

export const reqGetUserInfo = () => defHttp.get('/user/userInfo')
export const reqChangeProfile = (data: ChangeProfileReq) => defHttp.patch('/user/changeProfile', data)
export const reqGetUserCode = (data: UserCodeReqBody) => defHttp.post('/user/userCode', data)
export const reqChangeUserCode = (data: ChangeCodeBody) => defHttp.patch('/user/changeCode', data)
