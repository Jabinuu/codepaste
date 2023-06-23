<script setup lang="ts">
import { highlightLang } from '@/views/addSharing/components/pasteSettings/constant'

const langFilter = Array(highlightLang.length)
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
  padding: 0 24px 24px;
}
</style>
