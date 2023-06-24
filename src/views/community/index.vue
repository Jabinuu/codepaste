<script setup lang="ts">
import CodeList from './components/codeList/CodeList.vue'
import LangCategories from './components/LangCategories.vue'
</script>

<template>
  <div class="flex community">
    <CodeList class="flex-1 mr-40 bdr-4" />
    <LangCategories />
  </div>
</template>

<style lang="less" scoped>
.community{
  padding: 0 50px;
}
</style>
