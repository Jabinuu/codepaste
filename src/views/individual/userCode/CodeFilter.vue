<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { UnwrapRef } from 'vue'
import type { SelectProps } from 'ant-design-vue'
import { DeleteOutlined, SearchOutlined } from '@ant-design/icons-vue'
import { highlightLang } from '@/utils/constant'
import useUserStore from '@/store/modules/user'
import { computeLanguages } from '@/utils/filter'

interface FormState {
  kw: string
  languages: string[]
}

const formState: UnwrapRef<FormState> = reactive({
  kw: '',
  languages: [],
})
const userStore = useUserStore()
const options = ref<SelectProps['options']>(highlightLang)
const pn = ref<number>(1)
const ps = ref<number>(3)
const id = userStore.getUserInfo().id

async function runSearch() {
  await userStore.getUserCode({
    kw: formState.kw,
    languages: computeLanguages(formState.languages),
    pn: pn.value,
    ps: ps.value,
    id,
  })
}

function resetForm() {
  formState.kw = ''
  formState.languages = []
}
</script>

<template>
  <div class="code-filter">
    <a-form layout="inline" :model="formState">
      <a-form-item label="关键词">
        <a-input v-model:value="formState.kw" placeholder="输入标题关键词" />
      </a-form-item>
      <a-form-item label="编程语言">
        <a-select
          v-model:value="formState.languages"
          mode="multiple"
          style="width: 200px"
          :options="options"
          placeholder="选择编程语言"
        />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" class="margin" @click="runSearch">
          <SearchOutlined />查询
        </a-button>
        <a-button @click="resetForm">
          <DeleteOutlined />重置
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<style lang="less" scoped>
  .code-filter{
    background-color: #fff;
    padding: 24px;
    border-radius: 4px;
    margin-bottom: 20px;
  }
  .ant-input{
    width:200px;
  }
  .margin{
    margin: 0 20px;
  }
</style>
