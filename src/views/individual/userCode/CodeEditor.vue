<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import type { SelectProps } from 'ant-design-vue'
import mitt from '@/utils/mitt'

const isEdit = ref()
const open = ref<boolean>(false)
onMounted(() => {
  mitt.on('openEditor', (e: boolean) => {
    open.value = true
    isEdit.value = e
  })
})
onUnmounted(() => {
  mitt.off('openEditor')
})
function afterOpenChange(bool: boolean) {
  console.log('open', bool)
}
const formState = ref({
  id: '1234-4567-6789',
  title: 'test1',
  lang: 'JavaScript',
  encrypt: true,
  content: 'test123456789',
})

const options1 = ref<SelectProps['options']>([
  {
    value: 'jack',
    label: 'Jack',
  },
  {
    value: 'lucy',
    label: 'Lucy',
  },
  {
    value: 'disabled',
    label: 'Disabled',
    disabled: true,
  },
  {
    value: 'yiminghe',
    label: 'Yiminghe',
  },
])
</script>

<template>
  <div>
    <a-drawer
      v-model:open="open"
      class="custom-class"
      root-class-name="root-class-name"
      :root-style="{ color: 'blue' }"
      title="代码信息"
      :width="456"
      placement="right"
      @after-open-change="afterOpenChange"
    >
      <a-form>
        <a-form-item label="代码编号">
          <a-input v-model:value="formState.id" :disabled="!isEdit" />
        </a-form-item>
        <a-form-item label="代码标题">
          <a-input v-model:value="formState.title" :disabled="!isEdit" />
        </a-form-item>
        <a-form-item label="编程语言">
          <a-select
            v-model:value="formState.lang"
            :options="options1"
            placeholder="选择编程语言"
            :disabled="!isEdit"
          />
        </a-form-item>
        <a-form-item label="是否加密">
          <a-switch v-model:checked="formState.encrypt" :disabled="!isEdit" />
        </a-form-item>
        <a-form-item label="代码详情">
          <a-textarea v-model:value="formState.content" :rows="20" :disabled="!isEdit" />
        </a-form-item>
        <a-form-item :wrapper-col="{ offset: 4 }">
          <a-button v-if="isEdit" type="primary">
            提交修改
          </a-button>
        </a-form-item>
      </a-form>
    </a-drawer>
  </div>
</template>

<style lang="less" scoped>

</style>
