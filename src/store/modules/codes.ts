import { defineStore } from 'pinia'
import type { CodeFromData, CodeList } from '@/types/codeContentInfo'
import { reqGetCodeInfo, reqUploadCode } from '@/services/api/codeContent'

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
    async getCodeInfo() {
      const { data } = await reqGetCodeInfo()
      this.codesList = data
    },
  },
  getters: {

  },
})
