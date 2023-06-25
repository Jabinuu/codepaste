<script setup lang="ts">
import { ref } from 'vue'
import { ClockCircleOutlined, FireOutlined, LikeOutlined } from '@ant-design/icons-vue'

const current = ref<string[]>(['hot'])
</script>

<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal">
    <a-menu-item key="hot">
      <template #icon>
        <FireOutlined />
      </template>
      最热
    </a-menu-item>
    <a-menu-item key="new">
      <template #icon>
        <ClockCircleOutlined />
      </template>
      最新
    </a-menu-item>
    <a-menu-item key="quality">
      <template #icon>
        <LikeOutlined />
      </template>
      精选
    </a-menu-item>
  </a-menu>
</template>

<style lang="less" scoped>

</style>
