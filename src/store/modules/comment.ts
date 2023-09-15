import { defineStore } from 'pinia'
import { reqDeleteUserComment, reqGetCodeComment, reqGetUserComment } from '@/services/api/comment'
import type { CodeCommentList, UserCommentList } from '@/types/comment.type'

export default defineStore('comment', {
  state() {
    return {
      codeComment: [] as UserCommentList[],
      userComment: [] as CodeCommentList[],
    }
  },
  actions: {
    async getCodeComment(cid: string) {
      const { data }: any = await reqGetCodeComment({ cid })
      this.codeComment = data
    },

    async getUserComment(uid: number) {
      const data: any = await reqGetUserComment({ uid })
      return new Promise<void>((resolve, reject) => {
        if (data.code === 100) {
          this.userComment = data.data
          resolve()
        }
        else {
          reject(data.msg)
        }
      })
    },

    async deleteUserComment(id: number) {
      const data: any = await reqDeleteUserComment({ id })
      return new Promise<void>((resolve, reject) => {
        if (data.code === 100)
          resolve()
        else
          reject(data)
      })
    },
  },
  getters: {

  },
})
