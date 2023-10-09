<script setup lang="ts">
import type { Ref } from 'vue'
import { computed, inject } from 'vue'

import type { CodeList } from '@/types/codeContentInfo.type'

import 'highlight.js/styles/monokai-sublime.css' // 导入代码高亮样式

const currentCode = inject<Ref<CodeList>>('currentCode')
const code = computed(() => currentCode?.value ? currentCode.value.content : '')
</script>

<template>
  <div>
    <highlightjs id="code-block" autodetect :code="code" />
  </div>
</template>

<style lang="less" scoped>
:deep(pre code.hljs) {
  line-height: 1.5;
}

#code-block {
  margin-top: 20px;
}
</style>
