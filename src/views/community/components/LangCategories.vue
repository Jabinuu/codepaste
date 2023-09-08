<script setup lang="ts">
import { ref, watch } from 'vue'
import { highlightLang } from '@/views/addSharing/components/pasteSettings/constant'
import { HighlightLangEnum } from '@/enums/codeEnum'
import mitt from '@/utils/mitt'

const langFilter = ref(Array(highlightLang.length))
watch(langFilter, (newVal) => {
  const languages = computeLanguages(newVal)
  mitt.emit('langFilter', languages)
}, { deep: true })

function computeLanguages(filter: string[]) {
  const res: string[] = []
  filter.forEach((elem, index) => {
    if (elem) {
      if (highlightLang[index].value !== HighlightLangEnum.OTHER)
        res.push(highlightLang[index].value)
      else
        res.push(HighlightLangEnum.TXT, HighlightLangEnum.MARKDOWN)
    }
  })
  return res
}
</script>

<template>
  <div class="bg-w bdr-4 list-contariner">
    <a-card title="筛选编程语言" :bordered="false">
      <a-list item-layout="horizontal" :data-source="highlightLang" :split="false">
        <template #renderItem="{ item, index }">
          <a-list-item>
            <a-checkbox v-model:checked="langFilter[index]">
              {{ item.value }}
            </a-checkbox>
          </a-list-item>
        </template>
      </a-list>
    </a-card>
  </div>
</template>

<style lang="less" scoped>
.list-contariner{
  width: 240px;
  height: 100%;
  background: #fff;
}
:deep(.ant-card-body){
  padding: 0 0 24px;
}
</style>
