<script setup lang="ts">
import { onMounted, provide, ref } from 'vue'
import { useRoute } from 'vue-router'
import CodeArea from './components/codeArea/index.vue'
import CommentsArea from './components/commentsArea/index.vue'
import PublicCode from '@/components/PublicCode.vue'
import useCodeStore from '@/store/modules/codes'
import type { CodeList } from '@/types/codeContentInfo'

const codeStore = useCodeStore()
const route = useRoute()
// provide可以是响应式的
const currentCode = ref<CodeList>()
provide('currentCode', currentCode)

onMounted(() => {
  getDetailById()
})

async function getDetailById() {
  const [data] = await codeStore.getDetailById(route.params.id as string)
  currentCode.value = data
}
</script>

<template>
  <div class="codeDetail flex justify-center">
    <div class="bdr-4 left">
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
  .left{
    width: 68%;
  }
</style>
