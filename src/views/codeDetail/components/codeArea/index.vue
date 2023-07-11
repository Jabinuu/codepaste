<script setup lang="ts">
import CodeDisplay from './CodeDisplay.vue'
import CodeOperation from './CodeOperation.vue'
import DetailHeader from './DetailHeader.vue'
import DetailInfo from './DetailInfo.vue'
</script>

<template>
  <div class="codeArea-container p-24 mr-40 bg-w mb-30">
    <DetailHeader />
    <div class="flex justify-between">
      <DetailInfo />
      <CodeOperation />
    </div>
    <CodeDisplay />
  </div>
</template>

<style lang="less" scoped>
.codeArea-container{
  padding-top: 10px;
}
</style>
