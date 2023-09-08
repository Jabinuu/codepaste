import defHttp from '@/services/http'
import type { CommentList } from '@/types/comment.type'

export const reqGetCodeComment = async (data: { cid: number }): Promise<CommentList[]> => defHttp.post('/comment/codeComment', data)
export const reqGetUserComment = async (data: { uid: number }): Promise<CommentList[]> => defHttp.post('/comment/userComment', data)
