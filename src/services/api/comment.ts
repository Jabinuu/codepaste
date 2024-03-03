import defHttp from '@/services/http'
import type { CodeCommentList, UserCommentList } from '@/types/comment.type'

export async function reqGetCodeComment(data: { cid: string }):
Promise<CodeCommentList[]> {
  return defHttp.post('/comment/codeComment', data)
}
export async function reqGetUserComment(data: { uid: number }):
Promise<UserCommentList[]> {
  return defHttp.post('/comment/userComment', data)
}
export async function reqDeleteUserComment(data: { id: number }) {
  return defHttp.post('/comment/deleteComment', data)
}
export async function reqAddCodeComment(data: { uid: number;cid: number;content: string }) {
  return defHttp.post('/comment/addComment', data)
}
