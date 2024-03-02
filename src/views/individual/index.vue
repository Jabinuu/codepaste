<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const collapsed = ref<boolean>(true)
const selectedKeys = ref<string[]>([route.path.replace('/individual/', '')])

const individualRoutes: RouteRecordRaw[] = ref()

onMounted(() => {
  changeLayoutContent()
  individualRoutes.value = router.getRoutes().filter(item => item.path.startsWith('/individual') && item.name !== 'individual')
})

watch(route, newVal => selectedKeys.value = [newVal.name as string])

function changeLayoutContent() {
  const collapseTrigger = document.querySelector('.ant-layout-sider-trigger') as HTMLElement
  const layoutContnt = document.querySelector('.content') as HTMLElement
  collapseTrigger.addEventListener('click', () => {
    layoutContnt.style.marginLeft = collapsed.value ? '80px' : '200px'
  })
}
</script>

<template>
  <div class="container">
    <a-layout style="min-height: 100vh">
      <a-layout-sider v-model:collapsed="collapsed" collapsible :style="{ position: 'fixed', top: '58px', left: 0, height: '100vh', background: '#fff' }">
        <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
          <a-menu-item v-for="item in individualRoutes" :key="item.name" @click="router.push(item.path)">
            <template #icon>
              <component :is="item.meta?.icon" />
            </template>
            <span>{{ item.meta?.title }}</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout-content>
        <div class="content">
          <router-view />
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<style lang="less" scoped>
.container{
  margin-top: -26px;
}
:deep(.ant-layout-sider-trigger){
  color: #002140;
  background: #fafafa;
}
.content{
  transition: all .2s;
  margin-left: 80px;
  padding: 24px;
}
</style>
