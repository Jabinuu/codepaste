import defHttp from '../http'
import type { ChangeProfileReq } from '@/types/user.type'
import type { UserCodeReqBody } from '@/types/http.type'

export const reqGetUserInfo = () => defHttp.get('/user/userInfo')
export const reqChangeProfile = (data: ChangeProfileReq) => defHttp.patch('/user/changeProfile', data)
export const reqGetUserCode = (data: UserCodeReqBody) => defHttp.post('/user/userCode', data)
