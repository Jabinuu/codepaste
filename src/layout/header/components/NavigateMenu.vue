<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const selectedKeys = ref<string[]>([route.path.replace('/', '')])
watch(route, (newVal) => {
  selectedKeys.value = [newVal.path.replace('/', '')]
})
</script>

<template>
  <a-menu
    v-model:selectedKeys="selectedKeys"
    mode="horizontal"
    class="text-font2 pr-20"
    style="lineHeight: 60px;border:none;"
  >
    <a-menu-item key="introduction">
      <router-link to="/introduction">
        简介
      </router-link>
    </a-menu-item>

    <a-menu-item key="community">
      <router-link to="/community">
        社区
      </router-link>
    </a-menu-item>
    <a-menu-item key="questions">
      <router-link to="/questions">
        问题
      </router-link>
    </a-menu-item>

    <a-menu-item key="add">
      <router-link to="/add">
        新增分享
      </router-link>
    </a-menu-item>
  </a-menu>
</template>

<style lang="less" scoped>

</style>
