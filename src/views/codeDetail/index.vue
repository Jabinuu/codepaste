<script setup lang="ts">
import { onMounted } from 'vue'

import CodeArea from './components/codeArea/index.vue'
import CommentsArea from './components/commentsArea/index.vue'
import PublicCode from '@/components/PublicCode.vue'
import useCodeStore from '@/store/modules/codes'
import type { CodeList } from '@/types/codeContentInfo'

const codeStore = useCodeStore()
let currentCode: CodeList
onMounted(() => {
  getDetailById()
})

async function getDetailById() {
  currentCode = await codeStore.getDetailById()
}
</script>

<template>
  <div class="codeDetail flex justify-between">
    <div class="flex-1 bdr-4">
      <CodeArea />
      <CommentsArea />
    </div>
    <PublicCode />
  </div>
</template>

<style lang="less" scoped>
  .codeDetail{
    padding: 0 50px;
  }
</style>
