import { onMounted, onUnmounted, ref } from 'vue'
import { message } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import type { SettingOption } from '@/types/codeContentInfo.type'
import useCodeStore from '@/store/modules/codes'
import mitt from '@/utils/mitt'
import useUseStore from '@/store/modules/user'

export const content = ref<string>('')
export const codeStore = useCodeStore()
export const settingsState = ref<SettingOption>({
  title: '',
  lang: undefined,
  expiration: 'never',
  codepw: '',
  category: 'code',
  exposure: 1,
  encrypt: 0,
})

export function useMitt() {
  onMounted(() => {
    mitt.on('jiabin', (val: string) => content.value = val)
  })

  onUnmounted(() => {
    mitt.off('jiabin')
    // 清空表单
    settingsState.value = {
      title: '',
      lang: undefined,
      expiration: 'never',
      codepw: '',
      category: 'code',
      exposure: 1,
      encrypt: 0,
    }
  })
}

// TODO: 未登录状态时添加代码
export function useCreateNewPaste() {
  const router = useRouter()
  onUnmounted(() => {
    // 清空表单
    settingsState.value = {
      title: '',
      lang: undefined,
      expiration: 'never',
      codepw: '',
      category: 'code',
      exposure: 1,
      encrypt: 0,
    }
  })

  return async () => {
    const userStore = useUseStore()
    const res: any = await codeStore.createCode({
      ...settingsState.value,
      author: userStore.getCurUsername,
      content: content.value,
      uid: userStore.getCurUserId,
    })
    if (res.code === 100) {
      message.success('创建代码成功!')
      router.push(`/post/${res.data.codeId}`)
    }
    else { message.error('创建代码失败!') }
  }
}
