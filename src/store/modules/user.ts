import { defineStore } from 'pinia'
import { LogincComponent } from '@/enums/loginCompEnum'
import { reqChangePassword, reqLogin, reqRegister } from '@/services/api/auth'
import type { ChangePasswordFormState, CurrentUser, LoginFormState, RegisterFormState } from '@/types/auth.type'

interface userStoreState {
  loginComponentId: number
  current: CurrentUser
}

export default defineStore('user', {
  state: (): userStoreState => {
    return {
      loginComponentId: LogincComponent.LOGINGROUP,
      current: {
        id: -1,
        username: '',
        email: '',
        role: -1,
        avatarUrl: '',
      },
    }
  },
  actions: {
    async userRegister(data: RegisterFormState) {
      return await reqRegister(data)
    },
    async userLogin(data: LoginFormState) {
      const res: any = await reqLogin(data)
      this.current = res.data.userInfo
      return res
    },
    async changePassword(data: ChangePasswordFormState) {
      return await reqChangePassword(data)
    },
  },
  getters: {

  },
})
