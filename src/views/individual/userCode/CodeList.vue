<script setup lang="ts">
import { computed, createVNode, inject, onMounted } from 'vue'
import { Modal, message } from 'ant-design-vue'
import { ExclamationCircleOutlined } from '@ant-design/icons-vue'
import Icon from '@/components/Icon/Icon.vue'
import mitt from '@/utils/mitt'
import useIconLangName from '@/hooks/useIconLangName'
import useUserStore from '@/store/modules/user'
import { formatDate } from '@/utils/date'
import useLoading from '@/hooks/useLoading'

const props = defineProps(['publicData'])
const emit = defineEmits(['sendPage'])
const visitor = inject('visitor')
const { isLoading, loadingWrapper } = useLoading()
const userStore = useUserStore()
const columns = [
  {
    title: '编号',
    dataIndex: 'codeId',
  },
  {
    title: '标题',
    dataIndex: 'title',
    ellipsis: true,
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
    width: 160,
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
    dataIndex: 'action',
    width: 150,
  },
]

const dataSource = computed(() => userStore.getUserCodeList)

const pagination = computed(() => {
  return {
    total: userStore.getUserCodeTotal,
    pageSize: props.publicData.ps,
    current: props.publicData.pn,
  }
})
onMounted(() => {
  getUserCode()
})

async function getUserCode() {
  await loadingWrapper(userStore.getUserCode({
    id: visitor ? 0 : userStore.current?.id as number,
    languages: [],
    kw: '',
    ps: props.publicData.ps,
    pn: props.publicData.pn,
  }))
}

// 打开代码详情抽屉
function openDetailDrawer(record: any) {
  const data = {
    record,
    isEdit: false,
  }
  mitt.emit('openEditor', data)
}

// 打开代码编辑抽屉
function openEditDrawer(record: any) {
  const data = {
    record,
    isEdit: true,
  }
  mitt.emit('openEditor', data)
}

async function handlePageChange(e: any) {
  emit('sendPage', {
    pn: e.current,
    ps: e.pageSize,
  })
  await getUserCode()
}

function showDeleteConfirm(codeId: string) {
  Modal.confirm({
    title: '删除提醒',
    icon: createVNode(ExclamationCircleOutlined),
    content: `该操作将要删除编号为 ${codeId} 的代码，操作是否继续?`,
    okText: '确认',
    okType: 'danger',
    cancelText: '取消',
    async onOk() {
      const res = await userStore.deleteUserCode({ codeId })
      if (res.code === 100) {
        message.success('删除成功!')
        await getUserCode()
      }
      else {
        message.error(res.msg)
      }
    },
  })
}
</script>

<template>
  <div class="list-container bdr-4">
    <a-table
      :columns="columns"
      :data-source="dataSource"
      :pagination="pagination"
      :loading="isLoading"
      @change="handlePageChange"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'codeId'">
          <a-tooltip>
            <template #title>
              <div style="width: 300px;">
                {{ record.codeId }}
              </div>
            </template>
            <a :href="`#/post/${record.codeId}`" target="_blank">
              {{ record.codeId }}
            </a>
          </a-tooltip>
        </template>
        <template v-else-if="column.dataIndex === 'lang'">
          <Icon :name="`${useIconLangName(record.lang)?.value}`" size="16px" />
          {{ record.lang }}
        </template>
        <template v-else-if="column.dataIndex === 'encrypt'">
          <a-tag v-if="record.encrypt" color="red">
            加密
          </a-tag>
          <a-tag v-else color="blue">
            公开
          </a-tag>
        </template>
        <template v-else-if="column.dataIndex === 'content'">
          <span title="">{{ record.content }}</span>
        </template>
        <template v-else-if="column.dataIndex === 'link'">
          <a href="#">{{ record.link }}</a>
        </template>
        <template v-else-if="column.dataIndex === 'date'">
          <span>{{ formatDate(record.date) }}</span>
        </template>
        <template v-else-if="column.dataIndex === 'action'">
          <div class="action-btn">
            <a-button type="link" style="color:#67c23a" @click="openDetailDrawer(record)">
              详情
            </a-button>
            <a-button type="link" @click="openEditDrawer(record)">
              编辑
            </a-button>
            <a-button type="link" danger @click="showDeleteConfirm(record.codeId)">
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
  :deep(.ant-table-cell){
    overflow: hidden ;
    white-space: nowrap;
  }
  a{
    color: rgba(0, 0, 0, 0.88);
  }
  a:hover{
    color: #1677ff;
  }
}
</style>
