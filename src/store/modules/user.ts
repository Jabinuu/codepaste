import { defineStore } from 'pinia'
import { LogincComponent } from '@/enums/loginCompEnum'
import { reqChangePassword, reqLogin, reqRegister } from '@/services/api/auth'
import { reqChangeProfile, reqGetUserInfo } from '@/services/api/user'
import type { ChangePasswordFormState, LoginFormState, RegisterFormState } from '@/types/auth.type'
import type { ChangeProfileReq, CurrentUser } from '@/types/user.type'
import { getToken, getUserInfoFromLocal, persistStoreUserInfo } from '@/utils/auth'

interface userStoreState {
  loginComponentId: number
  current: CurrentUser | null
  token: string | undefined
}

export default defineStore('user', {
  state: (): userStoreState => {
    return {
      token: undefined,
      loginComponentId: LogincComponent.LOGINGROUP,
      current: null,
    }
  },
  actions: {
    async userRegister(data: RegisterFormState) {
      return await reqRegister(data)
    },

    async userLogin(data: LoginFormState) {
      const res: any = await reqLogin(data)
      this.token = res.data.token || ''
      return res
    },

    async changePassword(data: ChangePasswordFormState) {
      return await reqChangePassword(data)
    },

    async getUserInfoAction() {
      const res: any = await reqGetUserInfo()
      return new Promise((resolve, reject) => {
        // 如果请求到用户信息
        if (Object.keys(res.data).length !== 0) {
          this.current = res.data
          persistStoreUserInfo(this.getUserInfo())
          resolve(res)
        }
        else {
          this.initUserInfo()
          reject(res.msg)
        }
      })
    },

    async changeUserProfile(data: ChangeProfileReq) {
      const res: any = await reqChangeProfile(data)
      await this.getUserInfoAction()
      return new Promise<void>((resolve, reject) => {
        if (res.code === 100)
          resolve(res)
        else
          reject(new Error(res))
      })
    },

    initUserInfo() {
      this.current = null
    },

    initToken() {
      this.token = undefined
    },
  },
  getters: {
    // 缓存大坑！！！！若返回的是一个get函数，则不缓存
    getToken(state) {
      return () => state.token || getToken()
    },
    getUserInfo(state) {
      return () => state.current || getUserInfoFromLocal()
    },
    getLoginComponentId(): number {
      return this.getUserInfo() ? LogincComponent.USERAVATAR : LogincComponent.LOGINGROUP
    },
  },
})
