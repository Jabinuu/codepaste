<script setup lang="ts">
import useComputedSzie from '@/hooks/useComputeSize'
import useIconLanngName from '@/hooks/useIconLangName'

const props = defineProps<{
  lang: string
  date: string
  size: number
}>()
const computedSize = useComputedSzie(props.size)
const iconName = useIconLanngName(props.lang)
</script>

<template>
  <div>
    <span>
      <Icon :name="`icon-${iconName}`" size="16px" />
      {{ props.lang }}</span>
    <a-divider type="vertical" style="border-width: 2px;" />
    <span>{{ date }}</span>
    <a-divider type="vertical" style="border-width: 2px;" />
    <span>{{ computedSize }}</span>
  </div>
</template>

<style lang="less" scoped>
  div{
    vertical-align: baseline;
    font-size: 12px;
    color:#696969;
  }
</style>
