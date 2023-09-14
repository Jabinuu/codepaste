import { onMounted, onUnmounted, ref } from 'vue'
import { message } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import type { SettingOption } from '@/types/codeContentInfo.type'
import useCodeStore from '@/store/modules/codes'
import mitt from '@/utils/mitt'
import useUseStore from '@/store/modules/user'

export const content = ref<string>('')
const router = useRouter()
export const codeStore = useCodeStore()
export const settingsState = ref<SettingOption>({
  title: '',
  lang: undefined,
  expiration: 'never',
  codepw: '',
  category: 'code',
  exposure: 1,
  encrypt: false,
})

export function useMitt() {
  onMounted(() => {
    mitt.on('jiabin', (val: string) => content.value = val)
  })

  onUnmounted(() => {
    mitt.off('jiabin')
  })
}

export async function createNewPaste() {
  const userStore = useUseStore()
  const res: any = await codeStore.createCode({
    ...settingsState.value,
    author: userStore.getCurUsername,
    content: content.value,
    uid: userStore.getCurUserId,
  })
  if (res.code === 100)
    message.success('创建代码成功!')
    // todo:跳转代码详情页

  else message.error('创建代码失败!')
}
