import { computed } from 'vue'

export default function useIconLanngName(lang: string) {
  return computed(() => {
    if (lang.includes('++'))
      return 'cpp'
    else
      return lang.toLocaleLowerCase()
  })
}
