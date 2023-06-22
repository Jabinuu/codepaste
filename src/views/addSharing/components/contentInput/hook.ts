import { ref } from 'vue'
import mitt from '@/utils/mitt'

export const content = ref<string>('')

export function onBlurTextArea() {
  mitt.emit('jiabin', content.value)
}
