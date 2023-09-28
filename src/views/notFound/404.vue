<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
function backHomePage() {
  router.push('./')
}
</script>

<template>
  <div class="container">
    <img src="https://cdn.zutjlx.site/image/202210162030172.png" alt="">
    <p>404</p>
    <p>您访问的页面不存在</p>
    <a-button @click="backHomePage">
      返回主页
    </a-button>
  </div>
</template>

<style lang="less" scoped>
  .container{
    text-align: center;
  }
</style>
