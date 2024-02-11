import { defineStore } from 'pinia'
import type { CodeFromData, CodeList } from '@/types/codeContentInfo.type'
import type { CodeRequestBody } from '@/types/http.type'
import { reqAddFavorite, reqCreateCode, reqDownloadCode, reqGetDetailById, reqGetHotlist, reqGetNewlist, reqGetQualitylist, reqGetRecommedlist, reqQuitFavorite, reqVerifyCodepw } from '@/services/api/code'

interface CodeResponse {
  codeList: CodeList[] | any
  total: number
}
export default defineStore('codes', {
  state() {
    return {
      listData: { total: 0, codeList: [] } as CodeResponse,
      recommendlist: [] as CodeList[],
      isRequesting: false,
    }
  },
  actions: {
    async createCode(formData: CodeFromData) {
      return await reqCreateCode(formData)
    },

    async getHotlist(body: CodeRequestBody) {
      this.isRequesting = true
      let newData = [...new Array(body.ps)].map(() => {
        return { loading: true }
      })
      this.listData.codeList = this.listData.codeList.concat(newData)
      const { data }: any = await reqGetHotlist(body) // fix：泛型约束，要配置不同请求响应的类型
      this.isRequesting = false
      newData = data.codeList.map((item: CodeList) => {
        item.loading = false
        return item
      })
      if (body.pn > 1) {
        this.listData.codeList = this.listData.codeList.slice(0, -body.ps)
        this.listData.codeList = this.listData.codeList.concat(newData)
      }

      else { this.listData = data }
    },

    async getNewlist(body: CodeRequestBody) {
      this.isRequesting = true
      let newData = [...new Array(body.ps)].map(() => {
        return { loading: true }
      })
      this.listData.codeList = this.listData.codeList.concat(newData)
      const { data }: any = await reqGetNewlist(body)
      this.isRequesting = false
      newData = data.codeList.map((item: CodeList) => {
        item.loading = false
        return item
      })
      if (body.pn > 1) {
        this.listData.codeList = this.listData.codeList.slice(0, -body.ps)
        this.listData.codeList = this.listData.codeList.concat(newData)
      }
      else { this.listData = data }
    },

    async getQualitylist(body: CodeRequestBody) {
      this.isRequesting = true
      let newData = [...new Array(body.ps)].map(() => {
        return { loading: true }
      })
      this.listData.codeList = this.listData.codeList.concat(newData)
      const { data }: any = await reqGetQualitylist(body)
      this.isRequesting = false
      newData = data.codeList.map((item: CodeList) => {
        item.loading = false
        return item
      })
      if (body.pn > 1) {
        this.listData.codeList = this.listData.codeList.slice(0, -body.ps)
        this.listData.codeList = this.listData.codeList.concat(newData)
      }
      else { this.listData = data }
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
      return new Promise<any>((resolve, reject) => {
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
