import { defineStore } from 'pinia'
import { reqGetCodeComment, reqGetUserComment } from '@/services/api/comment'
import type { CommentList } from '@/types/comment'

export default defineStore('comment', {
  state() {
    return {
      codeComment: [] as CommentList[],
      userComment: [] as CommentList[],
    }
  },
  actions: {
    async getCodeComment(cid: number) {
      this.codeComment = await reqGetCodeComment({ cid })
    },
    async getUserComment(uid: number) {
      this.userComment = await reqGetUserComment({ uid })
    },
  },
  getters: {

  },
})
