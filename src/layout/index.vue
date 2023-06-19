<script setup lang="ts">
import { ref } from 'vue'

const selectedKeys = ref<string[]>(['4'])
const value = ref<string>('')
</script>

<template>
  <a-layout>
    <a-layout-header class="fixed flex flex-items-center flex-justify-between">
      <div class="flex flex-items-center">
        <div class="logo mr-2" />
        <span class="logo-font pr-20 text-font1">PASTECODE</span>
        <a-menu
          v-model:selectedKeys="selectedKeys"
          mode="horizontal"
          class="text-font2 pr-20"
          style="lineHeight: 64px;border:none;"
        >
          <a-menu-item key="1">
            简介
          </a-menu-item>
          <a-menu-item key="2">
            社区
          </a-menu-item>
          <a-menu-item key="3">
            问题
          </a-menu-item>
          <a-menu-item key="4">
            分享
          </a-menu-item>
        </a-menu>
        <a-input-search
          v-model:value="value"
          placeholder="输入搜索关键词"
          style="width: 250px;"
          @search="() => {}"
        />
      </div>
      <a-avatar size="large">
        <template #icon>
          <UserOutlined />
        </template>
      </a-avatar>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 200px', marginTop: '64px' }">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
        Content
      </div>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<style lang="less" scoped>
.ant-layout-header{
  z-index: 1;
  width: 100%;
  padding: 0 200px;
  background: #fff;
  box-shadow: 0 2px 8px #f2f3f5;
}
 .logo {
  width: 50px;
  height: 50px;
  background: url('https://cdn.zutjlx.site/image/202301041731996.png') no-repeat 10px;
  background-size: 45px;
  float: left;
}

.logo-font{
  font-size:18px;
  float: left;
  cursor: pointer;
  font-weight: 650;
  letter-spacing: 2px;
}
</style>
