import { computed } from 'vue'

export default function useIconLangName(lang: string) {
  console.log(lang)

  return computed(() => {
    if (lang.includes('++'))
      return 'cpp'
    else
      return lang.toLocaleLowerCase()
  })
}
