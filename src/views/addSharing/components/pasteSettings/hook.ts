import { onMounted, onUnmounted, reactive, ref } from 'vue'
import type { SettingOption } from '@/types/codeContentInfo.type'
import useCodeStore from '@/store/modules/codes'
import mitt from '@/utils/mitt'

export const content = ref<string>('')
export const codeStore = useCodeStore()
export const settingsState = reactive<SettingOption>({
  title: '',
  language: undefined,
  expiration: 'never',
  password: '',
  category: 'code',
  exposure: undefined,
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
  await codeStore.uploadCode({ ...settingsState, content: content.value })
}
