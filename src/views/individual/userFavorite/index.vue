<script setup lang="ts">
import { CommentOutlined, EyeOutlined, StarFilled } from '@ant-design/icons-vue'
import { onMounted, ref } from 'vue'
import Icon from '@/components/Icon/Icon.vue'
import useIconLangName from '@/hooks/useIconLangName'
import useUserStore from '@/store/modules/user'
import type { UserFavoriteList } from '@/types/user.type'
import { relativeTime } from '@/utils/date'
import useComputedSzie from '@/hooks/useComputeSize'

const userStore = useUserStore()
const data = ref<UserFavoriteList[]>()

onMounted(() => {
  getFavorite(userStore.getCurUserId)
})

async function getFavorite(id: number) {
  data.value = await userStore.getFavorite({ id })
}
</script>

<template>
  <a-card title="我的收藏" style="margin:0 140px 0;">
    <a-list :data-source="data" item-layout="vertical">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta :description="item.content">
            <template #title>
              <a :href="`/post/${item.codeId}`" class="item-title" target="_blank">{{ item.title }}</a>
              <StarFilled class="star-icon" />
              <!-- <StarOutlined /> -->
            </template>
          </a-list-item-meta>
          <div class="flex justify-between">
            <div class="actions">
              <a href="#" class="hover-color gray">
                {{ item.author }}
              </a>
              <a-divider type="vertical" />
              <span class="gray">
                {{ relativeTime(item.date) }}
              </span>
              <a-divider type="vertical" />
              <span class="gray">
                {{ useComputedSzie(item.size).value }}
              </span>
              <a-divider type="vertical" />
              <span class="mr-16 gray">
                <EyeOutlined class="mr-4" />
                <span>{{ item.viewNum }}</span>
              </span>
              <a :href="`/post/${item.codeId}`" class="hover-color gray" target="_blank">
                <CommentOutlined class="mr-4" />
                <span>评论</span>
              </a>
            </div>
            <a-tag class="lang-tag">
              <Icon :name="`icon-${useIconLangName(item.lang).value}`" />
              {{ item.lang }}
            </a-tag>
          </div>
        </a-list-item>
      </template>
    </a-list>
  </a-card>
</template>

<style lang="less" scoped>
.item-title {
  font-weight: 600;
  font-size: 16px;
}

.actions {
  .gray {
    color: #8a919f;
  }

  .hover-color:hover {
    color: #1890ff
  }
}

.lang-tag {
  border: none;
  background-color: #f2f3f5;
  margin-right: 80px;
  cursor: pointer;
}

.lang-tag:hover {
  color: #1171ee;

}

.star-icon {
  float: right;
  font-size: 20px;
  margin-right: 80px;
  color: #FFD700;
  cursor: pointer;
}

:deep(.ant-list-item-meta-description) {
  width: 80%;
  display: -webkit-box;    // 可伸缩的盒子类型
  -webkit-line-clamp: 4;   // 限制在该盒子中显示的文本行数
  -webkit-box-orient: vertical;  // 指定可伸缩盒子的伸缩方向
  overflow: hidden;
}
</style>
