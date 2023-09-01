import defHttp from '@/services/http'
import type { CodeFromData } from '@/types/codeContentInfo'
import type { CodeRequestBody } from '@/types/http'

export const reqGetHotlist = (data: CodeRequestBody) => defHttp.post('./code/hotlist', data)
export const reqGetNewlist = (data: CodeRequestBody) => defHttp.post('./code/newlist', data)
export const reqGetQualitylist = (data: CodeRequestBody) => defHttp.post('./code/qualitylist', data)
export const reqCreateCode = (data: CodeFromData) => defHttp.post('/code/create', data)
export const reqGetDetailById = (data: { cid: string }) => defHttp.post('./code/single', data)
export const reqGetRecommedlist = () => defHttp.get('/code/recommend')
