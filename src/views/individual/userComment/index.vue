<script setup lang="ts">
import { createVNode, ref } from 'vue'
import { Modal } from 'ant-design-vue'
import { ExclamationCircleOutlined } from '@ant-design/icons-vue'

interface DataItem {
  id: number
  title: string
}
const data: DataItem[] = [
  {
    id: 0,
    title: '哇 大佬太强了！',
  },
  {
    id: 1,
    title: '非常优雅的代码',
  },
  {
    id: 2,
    title: '学习了学习了',
  },
  {
    id: 3,
    title: '哥哥真棒',
  },
]
const curItem = ref<number>()

function showDeleteConfirm() {
  Modal.confirm({
    title: '删除提醒',
    icon: createVNode(ExclamationCircleOutlined),
    content: '该操作删除无法撤销，操作是否继续?',
    okText: '确认',
    okType: 'danger',
    cancelText: '取消',
    onOk() {
      console.log('OK')
    },
    onCancel() {
      console.log('Cancel')
    },
  })
}
</script>

<template>
  <a-card title="我发表的评论">
    <a-list item-layout="horizontal" :data-source="data" @mouseleave="curItem = -1">
      <template #renderItem="{ item }">
        <a-list-item @mouseenter="curItem = item.id">
          <a-list-item-meta :description="item.title">
            <template #title>
              <span>
                <span class="mr-8">我</span>
                <span class="mr-8">2023-07-11 22:14</span>
                <span class="mr-8">评论了</span>
                <span class="mr-8">游客1</span>
                <span class="mr-8">的代码</span>
                <a-button type="link" style="padding-left: 0;">
                  GenshinYelan
                </a-button>
              </span>
              <a-button v-show="curItem === item.id" type="link" danger style="float: right;" @click="showDeleteConfirm">
                删除
              </a-button>
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
  </a-card>
</template>

<style lang="less" scoped>

</style>
