<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { message } from 'ant-design-vue'
import mitt from '@/utils/mitt'
import CodeSettingForm from '@/components/CodeSettingForm/CodeSettingForm.vue'
import type { CodeEditerForm } from '@/types/codeContentInfo.type'
import useUserStore from '@/store/modules/user'
import { codeTitleInputRules, codepwInputeRules } from '@/utils/constant'

const props = defineProps(['publicData'])
const rules = {
  title: codeTitleInputRules,
  codepw: codepwInputeRules,
}
const formRef = ref()
const userStore = useUserStore()
const isEdit = ref()
const open = ref<boolean>(false)
const formState = ref<CodeEditerForm>({
  title: '',
  lang: undefined,
  expiration: 'never',
  codepw: '',
  category: 'code',
  exposure: 1,
  encrypt: 0,
  content: '',
  codeId: '',
})
onMounted(() => {
  mitt.on('openEditor', (e: any) => {
    open.value = true
    isEdit.value = e.isEdit
    // FIXED BUG: 这里不直接把e.record 赋值是为了避免子组件修改formData时，父组件CodeList
    // 中的表格数据同时变化。这是因为父组组件之间传的值是对象的引用，所以子组件修改该引用会导致
    // 父组件渲染更新。解决方式是拷贝一份新的对象传递给子组件。
    formState.value = JSON.parse(JSON.stringify(e.record))
  })
})

onUnmounted(() => {
  mitt.off('openEditor')
})

async function handleSubmitChange() {
  try {
    await formRef.value.validate()
    const res = await userStore.changeUserCode(formState.value)
    if (res.code === 100) {
      message.success('修改代码成功!')
      open.value = false
      await userStore.getUserCode({
        pn: props.publicData.pn,
        ps: props.publicData.ps,
        kw: props.publicData.kw,
        languages: props.publicData.languages,
        id: userStore.getCurUserId,
      })
    }
  }
  catch (error) {

  }
}
</script>

<template>
  <div>
    <a-drawer
      v-model:open="open"
      class="custom-class"
      root-class-name="root-class-name"
      :root-style="{ color: 'blue' }"
      title="代码信息"
      :width="520"
      placement="right"
    >
      <a-form
        ref="formRef"
        :rules="rules"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 19 }"
        :model="formState"
      >
        <a-form-item label="代码编号">
          <a-input v-model:value="formState.codeId" disabled />
        </a-form-item>
        <CodeSettingForm :form-state="formState" :is-edit="isEdit" />
        <a-form-item label="代码详情">
          <a-textarea v-model:value="formState.content" :rows="20" :disabled="!isEdit" />
        </a-form-item>
        <a-form-item :wrapper-col="{ offset: 4 }">
          <a-button v-if="isEdit" type="primary" html-type="submit" @click="handleSubmitChange">
            提交修改
          </a-button>
        </a-form-item>
      </a-form>
    </a-drawer>
  </div>
</template>

<style lang="less" scoped>

</style>
