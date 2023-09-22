<script setup lang="ts">
import { inject } from 'vue'
import { CalendarOutlined, ClockCircleOutlined, EyeOutlined, UserOutlined } from '@ant-design/icons-vue'
import type { CodeList } from '@/types/codeContentInfo.type'
import { ExpirationsEnum } from '@/enums/codeEnum'
import { formatDate } from '@/utils/date'

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
      <div class="header-title">
        <h1>
          {{ currentCode?.title }}
        </h1>
      </div>
      <div class="flex info-group">
        <div>
          <span class="header-icon">
            <UserOutlined />
          </span>
          <span>{{ currentCode?.author }}</span>
        </div>
        <div>
          <span class="header-icon">
            <CalendarOutlined />
          </span>
          <span>{{ formatDate(currentCode?.date) }}</span>
        </div>
        <div>
          <span class="header-icon">
            <EyeOutlined />
          </span>
          <span>{{ currentCode?.viewNum }}</span>
        </div>
        <div>
          <span class="header-icon">
            <ClockCircleOutlined />
          </span>
          <span>{{ expirationMap.get(currentCode?.expiration as string) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.header-container {
  height: 50px;
  padding: 0 24px 10px;
  border-bottom: .8px solid #D3D3D3;
  margin-bottom: 16px;
  .avatar {
    width: 40px;
    height: 40px;
    background:  no-repeat center/contain url(https://cdn.zutjlx.site/image/1672844542112.png);
  }

  .header-info {
    .header-title h1 {
      font-size: 1.25em;
      font-weight: 600;
    }
  }

  .info-group {
    div{
      margin-right: 10px;
    }
    .header-icon{
      margin-right: 4px;
    }
  }

}
</style>
