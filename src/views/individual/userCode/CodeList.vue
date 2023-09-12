<script setup lang="ts">
import { computed, createVNode, onMounted, toRef } from 'vue'
import { Modal } from 'ant-design-vue'
import { ExclamationCircleOutlined } from '@ant-design/icons-vue'
import Icon from '@/components/Icon/Icon.vue'
import useIconLangName from '@/hooks/useIconLangName'
import mitt from '@/utils/mitt'

import useUserStore from '@/store/modules/user'

const userStore = useUserStore()
const iconName = ({ value: 'JavaScript' })
const columns = [
  {
    title: '编号',
    dataIndex: 'codeId',
    ellipsis: true,
  },
  {
    title: '标题',
    dataIndex: 'title',
  },
  {
    title: '语言',
    dataIndex: 'lang',
  },
  {
    title: '内容',
    dataIndex: 'content',
    ellipsis: true,
    width: 360,
  },
  {
    title: '引用链接',
    dataIndex: 'link',
  },
  {
    title: '状态',
    dataIndex: 'encrypt',
    width: 70,
  },
  {
    title: '创建时间',
    dataIndex: 'date',
  },
  {
    title: '操作',
    key: 'action',
    width: 150,
  },
]

const data = [
  {
    id: '1234-4567-7895',
    title: 'John Brown',
    lang: 'JavaScript',
    content: '<script setup lang="ts"> import { createNewPaste, <script setup lang="ts">',
    citeLink: '1692539328888.cpp',
    status: '加密',
    createDate: '2023-08-20 21:48',
  },
  {
    id: '1234-4567-7895',
    title: 'John Brown',
    lang: 'JavaScript',
    content: '<script setup lang="ts"> import { createNewPaste, settin...',
    citeLink: '1692539328888.cpp',
    status: '加密',
    createDate: '2023-08-20 21:48',
  },
  {
    id: '1234-4567-7895',
    title: 'John Brown',
    lang: 'JavaScript',
    content: '<script setup lang="ts"> import { createNewPaste, settin...',
    citeLink: '1692539328888.cpp',
    status: '加密',
    createDate: '2023-08-20 21:48',
  },
  {
    id: '1234-4567-7895',
    title: 'John Brown',
    lang: 'JavaScript',
    content: '<script setup lang="ts"> import { createNewPaste, settin...',
    citeLink: '1692539328888.cpp',
    status: '加密',
    createDate: '2023-08-20 21:48',
  },
  {
    id: '1234-4567-7895',
    title: 'John Brown',
    lang: 'JavaScript',
    content: '<script setup lang="ts"> import { createNewPaste, settin...',
    citeLink: '1692539328888.cpp',
    status: '加密',
    createDate: '2023-08-20 21:48',
  },
]
const current = computed(() => userStore.getUserInfo())
const userCode = computed(() => userStore.userCode)

onMounted(() => {
  getUserCode(current.value.id)
})

async function getUserCode(id: number | undefined) {
  if (id)
    await userStore.getUserCode({ id })
}

function showDeleteConfirm(id: string) {
  Modal.confirm({
    title: '删除提醒',
    icon: createVNode(ExclamationCircleOutlined),
    content: `该操作将要删除编号为${id}的代码，操作是否继续?`,
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
  <div class="list-container bdr-4">
    <a-table :columns="columns" :data-source="userCode" :row-expandable="() => false" ellipsis>
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'lang'">
          <Icon :name="`icon-${useIconLangName(toRef(record.lang)).value}`" size="16px" />
          {{ record.lang }}
        </template>
        <template v-else-if="column.dataIndex === 'status'">
          <a-tag color="blue">
            {{ record.status }}
          </a-tag>
        </template>
        <template v-else-if="column.key === 'action'">
          <div class="action-btn">
            <a-button type="link" style="color:#67c23a" @click="mitt.emit('openEditor', false)">
              详情
            </a-button>
            <a-button type="link" @click="mitt.emit('openEditor', true)">
              编辑
            </a-button>
            <a-button type="link" danger @click="showDeleteConfirm(record.id)">
              删除
            </a-button>
          </div>
        </template>
      </template>
    </a-table>
  </div>
</template>

<style lang="less" scoped>
.list-container{
  padding: 24px;
  background-color: #fff;
  .action-btn .ant-btn{
    font-size: 12px;
    padding: 0 6px;
  }
}
</style>
