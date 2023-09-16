<script setup lang="ts">
import type { Ref } from 'vue'
import { inject, toRef, watch } from 'vue'
import Icon from '@/components/Icon/Icon.vue'
import useIconLangName from '@/hooks/useIconLangName'
import useComputedSzie from '@/hooks/useComputeSize'
import type { CodeList } from '@/types/codeContentInfo.type'

const currentCode = inject<Ref<CodeList>>('currentCode')
let iconName: Ref<string>
let computedSize: Ref<string>
watch(toRef(currentCode), () => {
  iconName = useIconLangName(currentCode?.value.lang as string)
  computedSize = useComputedSzie(currentCode?.value.size as number)
})
</script>

<template>
  <div>
    <span>
      <Icon :name="`icon-${iconName}`" size="16px" />
      {{ currentCode?.lang }}
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
