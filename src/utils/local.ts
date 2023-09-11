import { INFO_NAME } from './auth'

export function getAvatarUrl() {
  const local = localStorage.getItem(INFO_NAME)
  if (!local)
    return ''
  const { avatarUrl } = JSON.parse(local)
  return avatarUrl || ''
}
