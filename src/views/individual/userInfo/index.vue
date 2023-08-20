<script setup lang="ts">
import { ref } from 'vue'
import descriptions from './descriptions.vue'
import infoForm from './infoForm.vue'

const tabs = [descriptions, infoForm]
const currentTab = ref(0)

function onChange(e: any) {
  currentTab.value = e
}
</script>

<template>
  <div>
    <a-card class="top-card">
      <a-row>
        <a-col :span="2">
          <a-avatar src="http://cdn.zutjlx.site/image/202210031742845.png" :size="64" />
        </a-col>
        <a-col :span="22">
          <p>
            <span class="username">Jabinuu</span>
            <a-tag color="green">
              V1
            </a-tag>
          </p>
          <p class="info-content">
            暂无个人简介
          </p>
        </a-col>
      </a-row>
    </a-card>
    <keep-alive>
      <component :is="tabs[currentTab]" class="bottom-card" @change="onChange" />
    </keep-alive>
  </div>
</template>

<style lang="less" scoped>
.top-card{
  width: 100%;
  .username{
    font-size: 18px;
    font-weight: 600;
    margin-right: 20px;
  }
  .info-content{
    font-size: 12px;
  }
}

.bottom-card{
  margin-top: 20px;
  :deep(.ant-descriptions-item-label){
    margin-right: 6px;
  }
}
</style>
