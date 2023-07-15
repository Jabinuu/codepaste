<script setup lang="ts">
import type { Ref } from 'vue'
import { inject, ref, toRef, watch } from 'vue'

import useIconLangName from '@/hooks/useIconLangName'
import useComputedSzie from '@/hooks/useComputeSize'
import type { CodeList } from '@/types/codeContentInfo'

const currentCode = inject<Ref<CodeList>>('currentCode')
const iconName = ref()
let computedSize: Ref<string>
watch(toRef(currentCode), () => {
  iconName.value = useIconLangName(currentCode?.value.code.lang as string).value
  computedSize = useComputedSzie(currentCode?.value.size as number)
})
</script>

<template>
  <div>
    <span>
      <Icon :name="`icon-${iconName}`" size="16px" />
      {{ currentCode?.code.lang }}
    </span>
    <a-divider type="vertical" />
    <span>
      {{ computedSize }}
    </span>
    <a-divider type="vertical" />
    <span>None</span>
  </div>
</template>

<style lang="less" scoped>

</style>
