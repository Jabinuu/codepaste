<script setup lang="ts">
import { computed } from 'vue'
import { formatDate } from '@/utils/date'
import useUserStore from '@/store/modules/user'

defineEmits(['change'])

const userStore = useUserStore()
const profile = computed(() => userStore.getUserInfo())

const _location = computed(() => profile.value?.location?.replace(/\//g, ' '))
const _registerTime = computed(() => formatDate(profile.value?.registerTime))
</script>

<template>
  <a-card title="个人信息">
    <template #extra>
      <a @click="$emit('change', 1)">编辑信息</a>
    </template>
    <a-descriptions :column="1">
      <a-descriptions-item label="简介">
        {{ profile?.introduction }}
      </a-descriptions-item>
      <a-descriptions-item label="电话号码">
        {{ profile?.tel }}
      </a-descriptions-item>
      <a-descriptions-item label="兴趣">
        {{ profile?.hobby }}
      </a-descriptions-item>
      <a-descriptions-item label="现地址">
        {{ _location }}
      </a-descriptions-item>
      <a-descriptions-item label="职业">
        <a-tag color="blue">
          {{ profile?.job }}
        </a-tag>
      </a-descriptions-item>
      <a-descriptions-item label="邮箱地址">
        {{ profile?.email }}
      </a-descriptions-item>
      <a-descriptions-item label="注册时间">
        {{ _registerTime }}
      </a-descriptions-item>
    </a-descriptions>
  </a-card>
</template>

<style lang="less" scoped>

</style>
