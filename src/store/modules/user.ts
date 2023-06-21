import { defineStore } from 'pinia'
import { reqGetCodeInfo, reqUploadCode } from '@/services/api/codeContent'
import { LogincComponent } from '@/enums/loginComponent'

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
    async uploadCode() {
      return await reqUploadCode()
    },
    async getCodeInfo() {
      return await reqGetCodeInfo()
    },
  },
  getters: {

  },
})
