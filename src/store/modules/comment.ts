import { defineStore } from 'pinia'
import { reqAddCodeComment, reqDeleteUserComment, reqGetCodeComment, reqGetUserComment } from '@/services/api/comment'
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
          data.msg && reject(data.msg)
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

    async addCodeComment(data: { uid: number;cid: number;content: string }) {
      const res: any = await reqAddCodeComment(data)
      return new Promise((resolve, reject) => {
        if (res.code === 100)
          resolve(res)
        else
          reject(res.msg)
      })
    },
  },
  getters: {

  },
})
