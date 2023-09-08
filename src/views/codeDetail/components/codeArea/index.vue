<script setup lang="ts">
import CodeDisplay from './CodeDisplay.vue'
import CodeOperation from './CodeOperation.vue'
import DetailHeader from './DetailHeader.vue'
import DetailInfo from './DetailInfo.vue'
</script>

<template>
  <div class="codeArea-container mr-40 bg-w mb-30">
    <DetailHeader />
    <div class="flex justify-between padding-mid">
      <DetailInfo />
      <CodeOperation />
    </div>
    <CodeDisplay class="padding-bottom" />
  </div>
</template>

<style lang="less" scoped>
.codeArea-container{
  padding-top: 24px;
  .padding-mid{
    padding: 0 24px;
  }
  .padding-bottom{
    padding: 0 24px 24px;
  }
}
</style>
