<script setup lang="ts">
import { ref } from 'vue'
import { ClockCircleOutlined, FireOutlined, LikeOutlined } from '@ant-design/icons-vue'
import { useSwitchList } from '../hook'
import type { CodeRequestBody } from '@/types/http.type'

defineProps<{
  query: CodeRequestBody
}>()
const emit = defineEmits(['switchList'])
const { switchHotlist, switchNewlist, switchQualitylist } = useSwitchList()
const current = ref<string[]>(['hot'])
</script>

<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal">
    <a-menu-item key="hot" @click="switchHotlist(query, emit)">
      <template #icon>
        <FireOutlined />
      </template>
      最热
    </a-menu-item>
    <a-menu-item key="new" @click="switchNewlist(query, emit)">
      <template #icon>
        <ClockCircleOutlined />
      </template>
      最新
    </a-menu-item>
    <a-menu-item key="quality" @click="switchQualitylist(query, emit)">
      <template #icon>
        <LikeOutlined />
      </template>
      精选
    </a-menu-item>
  </a-menu>
</template>

<style lang="less" scoped>

</style>
