<script setup lang="ts">
import { ref } from 'vue'
import { ClockCircleOutlined, FireOutlined, LikeOutlined } from '@ant-design/icons-vue'
import { useSwitchList } from '../hook'

const current = ref<string[]>(['hot'])
</script>

<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal">
    <a-menu-item key="hot" @click="useSwitchList('hot')">
      <template #icon>
        <FireOutlined />
      </template>
      最热
    </a-menu-item>
    <a-menu-item key="new" @click="useSwitchList('new')">
      <template #icon>
        <ClockCircleOutlined />
      </template>
      最新
    </a-menu-item>
    <a-menu-item key="quality" @click="useSwitchList('quality')">
      <template #icon>
        <LikeOutlined />
      </template>
      精选
    </a-menu-item>
  </a-menu>
</template>

<style lang="less" scoped>

</style>
