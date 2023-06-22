import { onMounted, onUnmounted, reactive, ref } from 'vue'
import type { SettingOption } from '@/types/codeContentInfo'
import useUserStore from '@/store/modules/user'
import mitt from '@/utils/mitt'

export const content = ref<string>('')
export const userStore = useUserStore()
export const settingsState = reactive<SettingOption>({
  title: undefined,
  language: undefined,
  expiration: undefined,
  password: undefined,
  category: 'code',
  exposure: undefined,
  isCrypto: false,
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
  await userStore.uploadCode({ ...settingsState, content: content.value })
}
