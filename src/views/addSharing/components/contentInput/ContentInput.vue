<script setup lang="ts">
import { ref } from 'vue'
import mitt from 'mitt'

const emitter = mitt()
const content = ref<string>('')
function onBlur() {
  console.log(111)

  emitter.emit('jiabin', content.value)
}
</script>

<template>
  <h3>新增代码段</h3>
  <a-textarea v-model:value="content" placeholder="输入你的内容..." :rows="16" class="mb-30" @blur="onBlur" />
</template>

<style lang="less" scoped>

</style>
