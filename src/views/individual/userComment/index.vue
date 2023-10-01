<script setup lang="ts">
import { computed, createVNode, onMounted, ref } from 'vue'
import { Modal, message } from 'ant-design-vue'
import { ExclamationCircleOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'
import useCommentStore from '@/store/modules/comment'
import useUserStore from '@/store/modules/user'
import { formatDate } from '@/utils/date'
import { pushToBlank } from '@/hooks/usePushBlank'
import useLoading from '@/hooks/useLoading'

const userStore = useUserStore()
const commentStoe = useCommentStore()
const { isLoading, loadingWrapper } = useLoading()
const data = computed(() => commentStoe.userComment)
const curItem = ref<number>()
const router = useRouter()
onMounted(() => {
  getUserComment()
})

async function getUserComment() {
  try {
    await loadingWrapper(commentStoe.getUserComment(userStore.getCurUserId))
  }
  catch (e: any) {
    message.error(e)
  }
}

function handleClickTitle(item: any) {
  pushToBlank(router, `/post/${item.codeId}`)
}

function showDeleteConfirm(item: any) {
  Modal.confirm({
    title: '删除提醒',
    icon: createVNode(ExclamationCircleOutlined),
    content: '该操作删除无法撤销，操作是否继续?',
    okText: '确认',
    okType: 'danger',
    cancelText: '取消',
    async onOk() {
      try {
        await commentStoe.deleteUserComment(item.id)
        message.success('删除成功!')
        await getUserComment()
      }
      catch (e: any) {
        console.log(e)
        message.error(e.msg)
      }
    },
  })
}
</script>

<template>
  <a-card title="我发表的评论" style="margin:0 140px 0;">
    <a-spin :spinning="isLoading">
      <a-list item-layout="horizontal" :data-source="data" @mouseleave="curItem = -1">
        <template #renderItem="{ item }">
          <a-list-item @mouseenter="curItem = item.id">
            <a-list-item-meta :description="item.content">
              <template #title>
                <span>
                  <span class="mr-8">我</span>
                  <span class="mr-8">{{ formatDate(item.date) }}</span>
                  <span class="mr-8">评论了</span>
                  <span class="mr-8">{{ item.author }}</span>
                  <span class="mr-8">的代码</span>
                  <a-button type="link" style="padding-left: 0;" @click="handleClickTitle(item)">
                    {{ item.title }}
                  </a-button>
                </span>
                <a-button v-show="curItem === item.id" type="link" danger style="float: right;" @click="showDeleteConfirm(item)">
                  删除
                </a-button>
              </template>
            </a-list-item-meta>
          </a-list-item>
        </template>
      </a-list>
    </a-spin>
  </a-card>
</template>

<style lang="less" scoped>

</style>
