import { message } from 'ant-design-vue'
import useUserStore from '@/store/modules/user'
import useCodesStore from '@/store/modules/codes'

export default function useFavorite() {
  const userStore = useUserStore()
  const codeStore = useCodesStore()

  async function addFavorite(item: any) {
    const res = await codeStore.addFavorite({
      uid: userStore.getCurUserId,
      cid: item.id,
    })
    item.isFilled = true
    await userStore.getUserInfoAction()
    message.success(res)
  }

  async function quitFavorite(item: any) {
    try {
      await codeStore.quitFavorite({
        cid: item.id,
        uid: userStore.getCurUserId,
      })
      item.isFilled = false
      await userStore.getUserInfoAction()
      message.info('取消收藏')
    }
    catch (e: any) {
      message.error(e)
    }
  }
  return {
    addFavorite,
    quitFavorite,
  }
}
