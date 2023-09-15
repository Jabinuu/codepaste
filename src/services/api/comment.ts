import defHttp from '@/services/http'
import type { CodeCommentList, UserCommentList } from '@/types/comment.type'

export const reqGetCodeComment = async (data: { cid: string }): Promise<CodeCommentList[]> => defHttp.post('/comment/codeComment', data)
export const reqGetUserComment = async (data: { uid: number }): Promise<UserCommentList[]> => defHttp.post('/comment/userComment', data)
export const reqDeleteUserComment = async (data: { id: number }) => defHttp.post('/comment/deleteComment', data)
