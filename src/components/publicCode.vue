<script setup lang="ts">
interface DataItem {
  title: string
}
const data: DataItem[] = [
  {
    title: '手写promise',
  },
  {
    title: '快速排序',
  },
  {
    title: 'vue响应式原理',
  },
  {
    title: 'promise.all',
  },
  {
    title: '手写深拷贝和浅拷贝手写深拷',
  },
  {
    title: '手写apply、call、bind',
  },
  {
    title: '手写const',
  },

]
</script>

<template>
  <div class="list-contariner bdr-4">
    <a-card title="最近公开" :bordered="false">
      <a-list item-layout="horizontal" :data-source="data">
        <template #renderItem="{ item }">
          <a-list-item>
            <a-list-item-meta>
              <template #title>
                <a style="font-size: 12px">{{ item.title }}</a>
              </template>
              <template #description>
                <span style="font-size: 12px">js | 1天前 | 7.13 KB</span>
              </template>
              <template #avatar>
                <a-avatar src="https://joeschmoe.io/api/v1/random" style="width:15px;height: 15px;" />
              </template>
            </a-list-item-meta>
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
:deep(.ant-list-item){
  padding: 8px 0;
}
:deep(.ant-list-item-meta-description){
  line-height: 1;
}
:deep(.ant-list-item-meta-title){
  line-height: 1;
}
</style>
