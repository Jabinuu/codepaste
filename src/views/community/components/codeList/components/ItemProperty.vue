<script setup lang="ts">
import { ref } from 'vue'

const isCrypto = ref<boolean>(true)
</script>

<template>
  <div class="mb-16">
    <span style="color:#aea79d">游客1</span>
    <a-divider type="vertical" style="border-width: 2px;" />
    <span style="color:rgb(64, 158, 255)">公开</span>
    <a-divider type="vertical" style="border-width: 2px;" />
    <a-tag v-if="isCrypto" color="red" style="font-size: 13px;">
      加密
    </a-tag>
  </div>
</template>

<style lang="less" scoped>

</style>
