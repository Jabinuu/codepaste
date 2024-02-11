import type { CurrentUser } from '@/types/user.type'

const TOKEN_NAME = 'token'
const REFRESH_TOKEN = 'refresh_token'
export const INFO_NAME = 'user_store'
export function getToken() {
  return {
    token: localStorage.getItem('token'),
    refreshToken: localStorage.getItem('refresh_token'),
  }
}

export function setToken(token: string, refreshToken: string) {
  localStorage.setItem(TOKEN_NAME, token)
  if (refreshToken)
    localStorage.setItem(REFRESH_TOKEN, refreshToken)
}

export function deleteToken() {
  localStorage.removeItem(TOKEN_NAME)
}

export function persistStoreUserInfo(cur: CurrentUser) {
  localStorage.setItem(INFO_NAME, JSON.stringify(cur))
}

export function getUserInfoFromLocal() {
  const local = JSON.parse(localStorage.getItem(INFO_NAME) as string)
  return local
}

export function deleteUserInfoLocal() {
  return localStorage.removeItem(INFO_NAME)
}
