<script setup lang="ts">
import { ref } from 'vue'

const selectedKeys = ref<string[]>(['4'])
</script>

<template>
  <a-menu
    v-model:selectedKeys="selectedKeys"
    mode="horizontal"
    class="text-font2 pr-20"
    style="lineHeight: 60px;border:none;"
  >
    <a-menu-item key="1">
      <router-link to="/introduction">
        简介
      </router-link>
    </a-menu-item>

    <a-menu-item key="2">
      <router-link to="/community">
        社区
      </router-link>
    </a-menu-item>
    <a-menu-item key="3">
      <router-link to="/questions">
        问题
      </router-link>
    </a-menu-item>

    <a-menu-item key="4">
      <router-link to="/">
        新增分享
      </router-link>
    </a-menu-item>
  </a-menu>
</template>

<style lang="less" scoped>

</style>
