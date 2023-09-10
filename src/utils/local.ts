import { INFO_NAME } from './auth'

export function getAvatarUrl() {
  const { avatarUrl } = JSON.parse(localStorage.getItem(INFO_NAME))
  return avatarUrl || ''
}
