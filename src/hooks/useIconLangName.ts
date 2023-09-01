import { computed } from 'vue'

export default function useIconLangName(lang) {
  return computed(() => {
    if (lang.value.includes('++'))
      return 'cpp'
    else
      return lang.value.toLocaleLowerCase()
  })
}
