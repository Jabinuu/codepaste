<script setup lang="ts">
import { CommentOutlined, EyeOutlined, StarFilled } from '@ant-design/icons-vue'
import Icon from '@/components/Icon/Icon.vue'
import useIconLangName from '@/hooks/useIconLangName'

const iconName = useIconLangName({ value: 'JavaScript' })
interface DataItem {
  title: string
}
const data: DataItem[] = [
  {
    title: '快速排序',
  },
  {
    title: '快速排序',
  },
  {
    title: '快速排序',
  },
  {
    title: '快速排序',
  },
]
</script>

<template>
  <a-card title="我的收藏" style="margin:0 140px 0;">
    <a-list :data-source="data" item-layout="vertical">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta
            description="void quick_sort(int q[], int l, int r) { if (l >= r) return; int i = l - 1, j = r + 1, x ="
          >
            <template #title>
              <a href="#" class="item-title">{{ item.title }}</a>
              <StarFilled class="star-icon" />
              <!-- <StarOutlined /> -->
            </template>
          </a-list-item-meta>
          <div class="flex justify-between">
            <div class="actions">
              <a href="#" class="hover-color gray">
                SuperYing
              </a>
              <a-divider type="vertical" />
              <span class="gray">
                一年前
              </span>
              <a-divider type="vertical" />
              <span class="gray">
                306 bytes
              </span>
              <a-divider type="vertical" />
              <span class="mr-16 gray">
                <EyeOutlined class="mr-4" />
                <span>716</span>
              </span>
              <a href="#" class="hover-color gray">
                <CommentOutlined class="mr-4" />
                <span>评论</span>
              </a>
            </div>
            <a-tag class="lang-tag">
              <Icon :name="`icon-${iconName}`" />
              JavaScript
            </a-tag>
          </div>
        </a-list-item>
      </template>
    </a-list>
  </a-card>
</template>

<style lang="less" scoped>
.item-title{
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
.lang-tag{
  border: none;
  background-color: #f2f3f5;
  margin-right: 80px;
  cursor: pointer;
}
.lang-tag:hover{
  color: #1171ee;

}
.star-icon{
    float: right;
    font-size: 20px;
    margin-right: 80px;
    color: #FFD700;
    cursor: pointer;
  }
</style>
