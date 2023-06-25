import { defineStore } from 'pinia'
import type { codeAllFromData } from '@/types/codeContentInfo'
import { reqGetCodeInfo, reqUploadCode } from '@/services/api/codeContent'

export default defineStore('codes', {
  state() {
    return {
      codesInfo: {},
    }
  },
  actions: {
    async uploadCode(formData: codeAllFromData) {
      return await reqUploadCode(formData)
    },
    async getCodeInfo() {
      this.codesInfo = await reqGetCodeInfo()
    },
  },
  getters: {

  },
})
