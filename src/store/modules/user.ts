import { defineStore } from 'pinia'
import { reqGetCodeInfo, reqUploadCode } from '@/services/api/codeContent'
import { LogincComponent } from '@/enums/loginComponent'
import type { codeAllFromData } from '@/types/codeContentInfo'

interface userStoreState {
  loginComponentId: number
}

export default defineStore('user', {
  state: (): userStoreState => {
    return {
      loginComponentId: LogincComponent.LOGINGROUP,
    }
  },
  actions: {
    async uploadCode(formData: codeAllFromData) {
      return await reqUploadCode(formData)
    },
    async getCodeInfo() {
      return await reqGetCodeInfo()
    },
  },
  getters: {

  },
})
