<script setup lang="ts">
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import useFootmark from '@/hooks/useFootmark'
import Icon from '@/components/Icon/Icon.vue'
import { formatDate } from '@/utils/date'
import useIconLangName from '@/hooks/useIconLangName'
import { pushToBlank } from '@/hooks/usePushBlank'

const { getFootmark, deleteAllFootmark } = useFootmark()
const footmark = getFootmark()?.reverse()
const router = useRouter()
function handleClickTitle(codeId: any) {
  pushToBlank(router, `/post/${codeId}`)
}

function deleteAllFootmarkAction() {
  deleteAllFootmark()
  message.success('清除成功!')
}
</script>

<template>
  <a-card class="timeline-wrap bdr-4" title="浏览记录">
    <a-timeline>
      <a-timeline-item v-for="(item) in footmark" :key="item.codeId">
        <Icon :name="`${useIconLangName(item.lang).value}`" class="mr-8" />
        <a class="mr-8 title" @click="handleClickTitle(item.codeId)">
          {{ item.title }}
        </a>
        <span class="time">{{ formatDate(item.date, 'YYYY-MM-HH') }}</span>
      </a-timeline-item>
    </a-timeline>
    <a-popconfirm
      title="确定清除所有浏览记录吗"
      ok-text="是"
      cancel-text="否"
      @confirm="deleteAllFootmarkAction"
    >
      <a-button danger class="ml">
        清除所有浏览记录
      </a-button>
    </a-popconfirm>
  </a-card>
</template>

<style lang="less" scoped>
.timeline-wrap {
  margin: 0 140px 0;
  background-color: #fff;
}
.ant-timeline-item{
  margin-left: 120px;
}
.time{
  position: absolute;
  left: -120px;
  color: rgba(0, 0, 0, 0.45);
}
.title{
  color: rgba(0, 0, 0, 0.88);
}
.title:hover{
  color: #69b1ff
}
</style>
