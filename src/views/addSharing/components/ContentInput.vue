<script setup lang="ts">
import { ref } from 'vue'

const content = ref<string>('')
</script>

<template>
  <h3>New Paste</h3>
  <a-textarea :value="content" placeholder="输入你的内容..." :rows="20" class="mb-30" />
</template>

<style lang="less" scoped>

</style>
