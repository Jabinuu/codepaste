import { computed } from 'vue'

export default function useIconLangName(lang) {
  return computed(() => {
    console.log(11)

    if (lang.value.includes('++'))
      return 'cpp'
    else
      return lang.value.toLocaleLowerCase()
  })
}
