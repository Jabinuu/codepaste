import { defineStore } from 'pinia'
import { INFO_NAME, getToken, getUserInfoFromLocal, persistStoreUserInfo } from '@/utils/auth'
import { LogincComponent } from '@/enums/loginCompEnum'
import { reqChangePassword, reqLogin, reqRegister } from '@/services/api/auth'
import { reqChangeProfile, reqGetUserInfo } from '@/services/api/user'
import { reqChangeUserCode, reqDeleteUserCode, reqGetFavorite, reqGetUserCode } from '@/services/api/code'

import type { ChangePasswordFormState, LoginFormState, RegisterFormState } from '@/types/auth.type'
import type { ChangeProfileReq, CurrentUser, UserFavoriteList } from '@/types/user.type'
import type { ChangeCodeBody, UserCodeReqBody } from '@/types/http.type'

interface UserCode {
  codes: any[]
  total: number
}

interface userStoreState {
  loginComponentId: number
  current: CurrentUser | null
  token: string | undefined
  userCode: UserCode | {}
}

export default defineStore('user', {
  state: (): userStoreState => {
    return {
      token: undefined,
      loginComponentId: LogincComponent.LOGINGROUP,
      current: null,
      userCode: {},
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
          reject(res.msg)
      })
    },

    async getUserCode(data: UserCodeReqBody) {
      const { data: res }: any = await reqGetUserCode(data)
      this.userCode = res
    },

    async changeUserCode(data: ChangeCodeBody) {
      const res: any = await reqChangeUserCode(data)
      return res
    },

    async deleteUserCode(data: { codeId: string }) {
      const res: any = await reqDeleteUserCode(data)
      return res
    },

    async getFavoriteAction(data: { id: number }) {
      const res: any = await reqGetFavorite(data)
      return new Promise<UserFavoriteList[]>((resolve, reject) => {
        if (res.code === 100)
          resolve(res.data)

        else
          reject(res.msg)
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
      const cur = state.current || getUserInfoFromLocal()
      return () => cur && (cur.exp * 1000 < Date.now() ? null : cur)
    },

    getLoginComponentId(): number {
      return this.getUserInfo() ? LogincComponent.USERAVATAR : LogincComponent.LOGINGROUP
    },

    getUserCodeTotal(state) {
      return (state.userCode as UserCode).total
    },

    getUserCodeList(state) {
      return (state.userCode as UserCode).codes
    },

    getCurUserId(): number {
      return this.getUserInfo().id
    },

    getCurUsername(): string {
      return this.getUserInfo().username
    },

    getAvatarUrl(state) {
      if (state.current)
        return state.current.avatarUrl
      const local = localStorage.getItem(INFO_NAME)
      if (!local)
        return ''
      const { avatarUrl } = JSON.parse(local)
      return avatarUrl || ''
    },

    getUserFavorite(): number[] | undefined {
      if (this.getUserInfo())
        return JSON.parse(this.getUserInfo().favorite)
    },
  },
})
