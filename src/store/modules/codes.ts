import { defineStore } from 'pinia'
import type { CodeFromData, CodeList } from '@/types/codeContentInfo.type'
import type { CodeRequestBody } from '@/types/http.type'
import { reqAddFavorite, reqCreateCode, reqDownloadCode, reqGetDetailById, reqGetHotlist, reqGetNewlist, reqGetQualitylist, reqGetRecommedlist, reqQuitFavorite, reqVerifyCodepw } from '@/services/api/code'

interface CodeResponse {
  codeList: CodeList[]
  total: number
}
export default defineStore('codes', {
  state() {
    return {
      listData: { total: 0, codeList: [] } as CodeResponse,
      recommendlist: [] as CodeList[],
    }
  },
  actions: {
    async createCode(formData: CodeFromData) {
      return await reqCreateCode(formData)
    },

    async getHotlist(body: CodeRequestBody) {
      const { data }: any = await reqGetHotlist(body) // fix：泛型约束，要配置不同请求响应的类型
      this.listData = data
    },

    async getNewlist(body: CodeRequestBody) {
      const { data }: any = await reqGetNewlist(body)
      this.listData = data
    },

    async getQualitylist(body: CodeRequestBody) {
      const { data }: any = await reqGetQualitylist(body)
      this.listData = data
    },

    async getRecommendlist() {
      const { data }: any = await reqGetRecommedlist()
      this.recommendlist = data
    },

    async getDetailById(codeId: string, isCount = false): Promise<CodeList> {
      const { data }: any = await reqGetDetailById({ codeId, isCount })
      return data
    },

    async addFavorite(data: { uid: number; cid: number }) {
      const res: any = await reqAddFavorite(data)
      return new Promise<string>((resolve, reject) => {
        if (res.code === 100)
          resolve('收藏成功!')
        else
          reject(res.msg)
      })
    },

    async quitFavorite(data: { uid: number; cid: number }) {
      const res: any = await reqQuitFavorite(data)
      return new Promise<void>((resolve, reject) => {
        if (res.code === 100)
          resolve(res.msg)

        else
          reject(res.msg)
      })
    },

    async downloadCodeFile(data: { codeId: string }) {
      await reqDownloadCode(data)
    },

    async verifyCodepw(data: { codeId: string; codepw: string }) {
      const res: any = await reqVerifyCodepw(data)
      return new Promise<void>((resolve, reject) => {
        if (res.code === 100)
          resolve(true)

        else
          reject(res.msg)
      })
    },
  },
  getters: {

  },
})
