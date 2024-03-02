import { defineStore } from 'pinia'
import { getToken, getUserInfoFromLocal, persistStoreUserInfo, setToken } from '@/utils/auth'
import { LogincComponent } from '@/enums/loginCompEnum'
import { reqChangePassword, reqLogin, reqRegister, reqUpdateToken } from '@/services/api/auth'
import { reqChangeProfile, reqGetUserInfo, reqGetUserInfoById } from '@/services/api/user'
import { reqChangeUserCode, reqDeleteUserCode, reqGetFavorite, reqGetUserCode } from '@/services/api/code'
import useFootmark from '@/hooks/useFootmark'
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
  refreshToken: string | undefined
  userCode: UserCode | {}
}

export default defineStore('user', {
  state: (): userStoreState => {
    return {
      token: undefined,
      refreshToken: undefined,
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
      this.refreshToken = res.data.refreshToken || ''
      return res
    },

    async updateToken() {
      const res: any = await reqUpdateToken({ username: this.current?.username as string })
      this.token = res.data.token || ''
      setToken(this.token as string, this.refreshToken as string)
    },

    async changePassword(data: ChangePasswordFormState) {
      const res: any = await reqChangePassword(data)
      return new Promise<void>((resolve, reject) => {
        if (res.code === 100)
          resolve()
        else
          reject(res.msg)
      })
    },

    async getUserInfoAction() {
      const res: any = await reqGetUserInfo()
      return new Promise((resolve, reject) => {
        // 如果请求到用户信息
        if (res.code !== '10009') {
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
      const { deleteDeletedFootmark } = useFootmark()
      const res: any = await reqDeleteUserCode(data)
      deleteDeletedFootmark(data.codeId)
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

    async getUserInfoById(data: { id: number }) {
      const res: any = await reqGetUserInfoById(data)
      return new Promise<any>((resolve, reject) => {
        if (res.code === 100)
          resolve(res.data)

        else reject(res.msg)
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
    // pinia的getters属性只能感知到这个仓库的状态的更新
    // 缓存大坑！！！！若返回的是一个get函数，则不缓存
    getToken(state) {
      return () => state.token || getToken().token
    },

    getUserInfo(state) {
      const cur = state.current || getUserInfoFromLocal()
      if (!state.current)
        state.current = cur
      // return () => cur && (cur.exp * 1000 < Date.now() ? null : cur)
      return () => cur
    },

    getLoginComponentId(): number {
      return this.getUserInfo() ? LogincComponent.USERAVATAR : LogincComponent.LOGINGROUP
    },

    getUserCodeTotal(state) {
      return (state.userCode as UserCode)?.total
    },

    getUserCodeList(state) {
      return (state.userCode as UserCode)?.codes
    },

    getCurUserId(): number {
      return this.getUserInfo()?.id
    },

    getCurUsername(): string {
      return this.getUserInfo()?.username
    },

    getUserFavorite(): number[] | undefined {
      if (this.getUserInfo())
        return JSON.parse(this.getUserInfo().favorite)
    },

    getUserAvatar(): string {
      return this.getUserInfo()?.avatarUrl
    },

    getUserPermissions(): number {
      return this.getUserInfo()?.role
    },
  },
})
