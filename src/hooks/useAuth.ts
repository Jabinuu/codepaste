import { LogincComponent } from '@/enums/loginCompEnum'
import useUserStore from '@/store/modules/user'

const userStore = useUserStore()
export function success() {
  // 登录成功后切换为header的用户头像
  userStore.loginComponentId = LogincComponent.USERAVATAR
}
