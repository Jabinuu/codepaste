<script setup lang="ts">
import { ref } from 'vue'

const selectedKeys = ref<string[]>(['4'])
const value = ref<string>('')
</script>

<template>
  <div class="flex flex-items-center">
    <div class="logo mr-2" />
    <router-link to="/">
      <span class="logo-font pr-20 text-font1">PASTECODE</span>
    </router-link>

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
    <a-input-search
      v-model:value="value"
      placeholder="输入搜索关键词"
      style="width: 250px;"
      @search="() => {}"
    />
  </div>
  <!-- <a-avatar size="large">
        <template #icon>
          <UserOutlined />
        </template>
      </a-avatar> -->
  <div>
    <a-button type="primary">
      登录
    </a-button>
    <span class="mlf-8" style="font-size: 10px;">或</span>
    <a-button>
      注册
    </a-button>
  </div>
</template>

<style lang="less" scoped>
.logo {
  width: 50px;
  height: 50px;
  background: url('https://cdn.zutjlx.site/image/202301041731996.png') no-repeat 10px;
  background-size: 45px;
}

.logo-font{
  font-size:18px;
  cursor: pointer;
  font-weight: 650;
  letter-spacing: 2px;
}
</style>
