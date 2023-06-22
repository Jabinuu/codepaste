<script setup lang="ts">
import { content, onBlurTextArea } from './hook'
</script>

<template>
  <h3>新增代码段</h3>
  <a-textarea v-model:value="content" placeholder="输入你的内容..." :rows="16" class="mb-30" @blur="onBlurTextArea" />
</template>

<style lang="less" scoped>

</style>
