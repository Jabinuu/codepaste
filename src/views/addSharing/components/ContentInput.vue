<script setup lang="ts">
import { ref } from 'vue'

const content = ref<string>('')
</script>

<template>
  <h3>新增代码段</h3>
  <a-textarea :value="content" placeholder="输入你的内容..." :rows="16" class="mb-30" />
</template>

<style lang="less" scoped>

</style>
