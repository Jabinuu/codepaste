<script setup lang="ts">
import LayoutHeader from '@/layout/header/index.vue'
import LayoutContent from '@/layout/content/index.vue'
import LayoutFooter from '@/layout/footer/index.vue'
</script>

<template>
  <a-layout>
    <a-layout-header class="fixed flex flex-items-center flex-justify-between">
      <LayoutHeader />
    </a-layout-header>
    <a-layout-content>
      <LayoutContent />
    </a-layout-content>
    <a-layout-footer>
      <LayoutFooter />
    </a-layout-footer>
  </a-layout>
</template>

<style lang="less" scoped>
.ant-layout-header{
  z-index: 1;
  width: 100%;
  height: 60px;
  padding: 0 200px;
  background: #fff;
  box-shadow: 0 2px 8px #f2f3f5;
}

.ant-layout-content{
  // padding: 0 20px;
  margin-top: 84px ;
}
</style>
