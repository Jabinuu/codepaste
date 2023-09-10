<script setup lang="ts">
import type { Ref } from 'vue'
import { inject, nextTick, toRef, watch } from 'vue'
import hljs from 'highlight.js'

import type { CodeList } from '@/types/codeContentInfo.type'

import 'highlight.js/styles/monokai-sublime.css' // 导入代码高亮样式

const currentCode = inject<Ref<CodeList>>('currentCode')

watch(toRef(currentCode), () => {
  // 涉及dom操作，需要在dom获得数据并更新之后再做逻辑处理
  nextTick(() => {
    const blocks = document.querySelectorAll('pre code')
    blocks.forEach((block: any) => {
      hljs.highlightBlock(block)
    })
  })
})
</script>

<template>
  <div>
    <pre>
      <code>{{ currentCode?.content }}</code>
    </pre>
  </div>
</template>

<style lang="less" scoped>
pre code.hljs{
  line-height: 1.5;
}
</style>
