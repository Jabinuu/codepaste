<script setup lang="ts">
import { exposureMap } from '@/views/community/components/codeList/constant'

const props = defineProps<{
  encrypt: number
  author: string
  exposure: number
}>()
</script>

<template>
  <div class="mb-16">
    <span>{{ props.author }}</span>
    <a-divider type="vertical" class="bw-2" />
    <span>{{ exposureMap.get(props.exposure) }}</span>
    <template v-if="props.encrypt">
      <a-divider type="vertical" class="bw-2" />
      <a-tag color="red" style="font-size: 13px;">
        加密
      </a-tag>
    </template>
  </div>
</template>

<style lang="less" scoped>
  span:first-child{
    color:#aea79d
  }
  span:nth-child(3){
    font-weight: 600;
    color:rgb(64, 158, 255)
  }
</style>
