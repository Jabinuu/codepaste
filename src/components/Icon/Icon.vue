<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { computed } from 'vue'

interface Props {
  // 图标文件名
  name: string
  // 图标大小
  size: string
  // 图标颜色
  // color:string

}

const props = withDefaults(defineProps<Props>(), {
  name: '',
  size: '18px',
  // color: '#000000',
})

const s = `${props.size.replace('px', '')}px`
const iconName = computed(() => `#${props.name}`)
const iconStyle = computed((): CSSProperties => {
  return {
    // color: props.color,
    fontSize: s,
  }
})
</script>

<template>
  <svg class="svg-icon icon" :style="iconStyle">
    <use :href="iconName" />
  </svg>
</template>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
}
</style>
