import { defineStore } from 'pinia'

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

  },
  getters: {

  },
})
