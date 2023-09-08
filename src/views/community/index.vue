<script setup lang="ts">
import CodeList from './components/codeList/CodeList.vue'
import LangCategories from './components/LangCategories.vue'
</script>

<template>
  <div class="flex justify-center">
    <CodeList class="left mr-40" />
    <LangCategories />
  </div>
</template>

<style lang="less" scoped>
.left{
  width: 50%;
}
</style>
