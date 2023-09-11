import { INFO_NAME } from './auth'
import useUserStore from '@/store/modules/user'

export function getAvatarUrl() {
  const userStore = useUserStore()

  if (userStore.current)
    return userStore.current.avatarUrl
  const local = localStorage.getItem(INFO_NAME)
  if (!local)
    return ''
  const { avatarUrl } = JSON.parse(local)
  return avatarUrl || ''
}
