import defHttp from '@/services/http'
import type { CodeFromData } from '@/types/codeContentInfo.type'
import type { ChangeCodeBody, CodeRequestBody } from '@/types/http.type'

export const reqGetHotlist = (data: CodeRequestBody) => defHttp.post('./code/hotlist', data)
export const reqGetNewlist = (data: CodeRequestBody) => defHttp.post('./code/newlist', data)
export const reqGetQualitylist = (data: CodeRequestBody) => defHttp.post('./code/qualitylist', data)
export const reqCreateCode = (data: CodeFromData) => defHttp.post('/code/create', data)
export const reqGetDetailById = (data: { codeId: string }) => defHttp.post('./code/single', data)
export const reqGetRecommedlist = () => defHttp.get('/code/recommend')
export const reqGetCommentList = (data: { id: string }) => defHttp.post('./comment/list', data)
export const reqChangeUserCode = (data: ChangeCodeBody) => defHttp.patch('/user/changeCode', data)
// export const reqDeleteUserCode =
