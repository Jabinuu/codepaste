<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125">
  <div>
    <RouterLink to="/" class="a-noline">
      分享
    </RouterLink>
    <RouterLink to="/introduction" class="a-noline">
      介绍
    </RouterLink>
    <RouterLink to="/community" class="a-noline">
      社区
    </RouterLink>

    <RouterLink to="/questions" class="a-noline">
      问题
    </RouterLink>

    <router-view />
  </div>
</template>

<style lang="less" scoped>
</style>
