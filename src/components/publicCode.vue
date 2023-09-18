<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { HighlightLangEnum, LangToColor } from '@/enums/codeEnum'
import useCodeStore from '@/store/modules/codes'
import { relativeTime } from '@/utils/date'
import useComputedSzie from '@/hooks/useComputeSize'

const codeStore = useCodeStore()
const recommenList = computed(() => codeStore.recommendlist)
const colorObj = {
  C: LangToColor.C,
  Java: LangToColor.JAVA,
  JavaScript: LangToColor.JAVASCRIPT,
  Python: LangToColor.PYTHON,
  CSS: LangToColor.CSS,
  HTML: LangToColor.HTML,
  Text: LangToColor.TXT,
  Markdown: LangToColor.MARKDOWN,
}

onMounted(() => {
  codeStore.getRecommendlist()
})
function computeColorKey(item) {
  return colorObj[item.lang === HighlightLangEnum.C ? 'C' : item.lang]
}
</script>

<template>
  <div class="list-contariner">
    <a-card title="最近公开" :bordered="false">
      <a-list item-layout="horizontal" :data-source="recommenList">
        <template #renderItem="{ item }">
          <a-list-item>
            <a-list-item-meta>
              <template #title>
                <a style="font-size: 12px" :href="`/post/${item.codeId}`" target="_blank">{{ item.title }}</a>
              </template>
              <template #description>
                <span style="font-size: 12px">
                  {{ item.lang }} | {{ relativeTime(item.date) }} | {{ useComputedSzie(item.size).value }}
                </span>
              </template>
              <template #avatar>
                <a-avatar class="avatar" :style="{ backgroundColor: computeColorKey(item) }" />
              </template>
            </a-list-item-meta>
          </a-list-item>
        </template>
      </a-list>
    </a-card>
  </div>
</template>

<style lang="less" scoped>
.list-contariner {
  width: 240px;
  height: 100%;
}

.ant-card {
  border-radius: 4px;
}

:deep(.ant-card-body) {
  padding: 0 24px 24px;
}

:deep(.ant-list-item) {
  padding: 8px 0;
}

:deep(.ant-list .ant-list-item .ant-list-item-meta .ant-list-item-meta-title) {
  line-height: 1 ;
}
.avatar{
width: 15px;
height: 15px;
}
</style>
