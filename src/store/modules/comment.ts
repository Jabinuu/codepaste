import { defineStore } from 'pinia'
import { reqGetCodeComment, reqGetUserComment } from '@/services/api/comment'
import type { CommentList } from '@/types/comment.type'

export default defineStore('comment', {
  state() {
    return {
      codeComment: [] as CommentList[],
      userComment: [] as CommentList[],
    }
  },
  actions: {
    async getCodeComment(cid: string) {
      const { data }: any = await reqGetCodeComment({ cid })
      this.codeComment = data
    },
    async getUserComment(uid: number) {
      const { data }: any = await reqGetUserComment({ uid })
      this.userComment = data
    },
  },
  getters: {

  },
})
