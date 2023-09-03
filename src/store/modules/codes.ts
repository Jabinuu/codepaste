import { defineStore } from 'pinia'
import type { CodeFromData, CodeList } from '@/types/codeContentInfo'
import type { CodeRequestBody } from '@/types/http'
import { reqCreateCode, reqGetDetailById, reqGetHotlist, reqGetNewlist, reqGetQualitylist, reqGetRecommedlist } from '@/services/api/codeContent'

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
      const data: any = await reqGetHotlist(body) // fix：泛型约束，要配置不同请求响应的类型
      this.listData = data
    },

    async getNewlist(body: CodeRequestBody) {
      const data: any = await reqGetNewlist(body)
      this.listData = data
    },

    async getQualitylist(body: CodeRequestBody) {
      const data: any = await reqGetQualitylist(body)
      this.listData = data
    },

    async getRecommendlist() {
      const data: any = await reqGetRecommedlist()
      this.recommendlist = data
    },

    async getDetailById(id: string): Promise<CodeList[]> {
      const data: any = await reqGetDetailById({ id })
      return data
    },
  },
  getters: {

  },
})
