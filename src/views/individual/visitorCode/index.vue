<script setup lang="ts">
import { provide } from 'vue'
import VisitorCode from '@/views/individual/userCode/index.vue'

provide('visitor', true)
</script>

<template>
  <VisitorCode />
</template>

<style lang="less" scoped>

</style>
