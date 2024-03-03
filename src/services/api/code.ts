import defHttp from '@/services/http'
import type { CodeFromData } from '@/types/codeContentInfo.type'
import type { ChangeCodeBody, CodeRequestBody, UserCodeReqBody } from '@/types/http.type'

export function reqGetHotlist(data: CodeRequestBody) {
  return defHttp.post('/code/hotlist', data)
}
export function reqGetNewlist(data: CodeRequestBody) {
  return defHttp.post('/code/newlist', data)
}
export function reqGetQualitylist(data: CodeRequestBody) {
  return defHttp.post('/code/qualitylist', data)
}
export function reqCreateCode(data: CodeFromData) {
  return defHttp.post('/code/create', data)
}
export function reqGetDetailById(data: { codeId: string; isCount: boolean }) {
  return defHttp.post('/code/single', data)
}
export function reqGetRecommedlist() {
  return defHttp.get('/recommend/list')
}
export function reqChangeUserCode(data: ChangeCodeBody) {
  return defHttp.patch('/code/changeCode', data)
}
export function reqDeleteUserCode(data: { codeId: string }) {
  return defHttp.post('/code/deleteCode', data)
}
export function reqGetUserCode(data: UserCodeReqBody) {
  return defHttp.post('/code/userCode', data)
}
export function reqGetFavorite(data: { id: number }) {
  return defHttp.post('/favorite/list', data)
}
export function reqAddFavorite(data: { uid: number; cid: number }) {
  return defHttp.post('/favorite/add', data)
}
export function reqQuitFavorite(data: { uid: number; cid: number }) {
  return defHttp.post('/favorite/quit', data)
}
export function reqDownloadCode(data: { codeId: string }) {
  return defHttp.get(`/file/download/${data.codeId}`, { responseType: 'blob' })
}
export function reqVerifyCodepw(data: { codeId: string; codepw: string }) {
  return defHttp.post('/code/verify', data)
}
