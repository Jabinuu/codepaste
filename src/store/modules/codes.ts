import { defineStore } from 'pinia'
import type { CodeFromData, CodeList } from '@/types/codeContentInfo'
import { reqGetCodeInfo, reqGetDetailById, reqUploadCode } from '@/services/api/codeContent'

export default defineStore('codes', {
  state() {
    return {
      codesList: [] as CodeList[],
    }
  },
  actions: {
    async uploadCode(formData: CodeFromData) {
      return await reqUploadCode(formData)
    },
    // 此方法应接收一个参数，按热度（默认），时间，精选对codeList排序
    async getCodeInfo(rule: string) {
      const { data } = await reqGetCodeInfo()
      this.codesList = data
      return rule
    },
    async getDetailById(): Promise<CodeList> {
      const { data } = await reqGetDetailById()
      return data
    },
  },
  getters: {

  },
})
