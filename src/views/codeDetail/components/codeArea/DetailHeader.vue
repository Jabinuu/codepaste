<script setup lang="ts">
import { inject } from 'vue'
import type { CodeList } from '@/types/codeContentInfo'
import { ExpirationsEnum } from '@/enums/codeEnum'

const currentCode: CodeList | undefined = inject('currentCode')
const expirationMap = new Map([
  [ExpirationsEnum.NEVER as string, '永久'],
  [ExpirationsEnum.M10 as string, '10分钟'],
  [ExpirationsEnum.H1 as string, '1小时'],
  [ExpirationsEnum.D1 as string, '1天'],
  [ExpirationsEnum.W1 as string, '1周'],
  [ExpirationsEnum.MON1 as string, '1个月'],
])
</script>

<template>
  <div class="header-container flex justify-between flex-items-center">
    <div class="avatar mr-20" />
    <div class="header-info flex-1">
      <div>{{ currentCode?.title }}</div>
      <div class="flex info-group">
        <div>
          <span>{{ currentCode?.author }}</span>
        </div>
        <div>
          <span>{{ currentCode?.date }}</span>
        </div>
        <div>
          <span>{{ currentCode?.viewNum }}</span>
        </div>
        <div>
          <span>{{ expirationMap.get(currentCode?.expiration as string) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.header-container {
  height: 50px;
  border-bottom: 1px solid #000;
  margin-bottom: 16px;

  .avatar {
    width: 40px;
    height: 40px;
    background-color: pink;
  }

  .header-info {
    height: 46px;
    background-color: skyblue;
  }
  .info-group>div
  {
    margin-right: 10px;
  }
}
</style>
