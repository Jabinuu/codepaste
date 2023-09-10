import type { CurrentUser } from '@/types/auth.type'

const TOKEN_NAME = 'token'
export const INFO_NAME = 'user_store'
export function getToken() {
  return localStorage.getItem('token')
}

export function setToken(token: string) {
  localStorage.setItem(TOKEN_NAME, token)
}

export function deleteToken() {
  localStorage.removeItem(TOKEN_NAME)
}

export function persistStoreUserInfo(cur: CurrentUser) {
  localStorage.setItem(INFO_NAME, JSON.stringify(cur))
}

export function getUserInfoFromLocal() {
  const local = JSON.parse(localStorage.getItem(INFO_NAME) as string)
  return local && (local.exp * 1000 < Date.now() ? null : local)
}

export function deleteUserInfoLocal() {
  return localStorage.removeItem(INFO_NAME)
}
