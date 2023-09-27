<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'
import type { UnwrapRef } from 'vue'
import { pcTextArr } from 'element-china-area-data'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import type { UploadChangeParam } from 'ant-design-vue'
import type { ChangeProfileFormState } from '@/types/user.type'
import useUserStore from '@/store/modules/user'

const emit = defineEmits(['change'])
const userStore = useUserStore()
const defaultInfo = computed(() => userStore.getUserInfo())

const formState: UnwrapRef<ChangeProfileFormState> = reactive({
  tel: defaultInfo.value.tel,
  hobby: defaultInfo.value.hobby,
  location: defaultInfo.value.location,
  job: defaultInfo.value.job,
  email: defaultInfo.value.email,
  introduction: defaultInfo.value.introduction,
  avatarUrl: defaultInfo.value.avatarUrl,
})
const formItemLayout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 8 },
}
const buttonItemLayout = {
  wrapperCol: { span: 14, offset: 2 },
}
const fileList = ref([])
const loading = ref<boolean>(false)
const imageUrl = ref<string>('')

async function handleConfirmChange() {
  try {
    const res: any = await userStore.changeUserProfile({ id: defaultInfo.value.id, ...formState })
    message.success(res.msg)
    emit('change', 0)
  }
  catch (e: any) {
    console.log(e)
    message.error(e.msg)
  }
}

function getBase64(img: any, callback: (base64Url: string) => void) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result as string))
  reader.readAsDataURL(img)
}

function handleChange(info: UploadChangeParam) {
  if (info.file.status === 'uploading') {
    loading.value = true
    return
  }
  if (info.file.status === 'done') {
    // Get this url from response in real world.
    getBase64(info.file.originFileObj, (base64Url: string) => {
      imageUrl.value = base64Url
      loading.value = false
    })
  }
  if (info.file.status === 'error') {
    loading.value = false
    message.error('upload error')
  }
}

function beforeUpload(file: any) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng)
    message.error('You can only upload JPG file!')

  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M)
    message.error('Image must smaller than 2MB!')

  return isJpgOrPng && isLt2M
}
</script>

<template>
  <div class="form-container">
    <a-card title="编辑个人信息">
      <a-form layout="horizontal" :model="formState" v-bind="formItemLayout">
        <a-form-item label="电话号码">
          <a-input v-model:value="formState.tel" placeholder="输入电话号码" />
        </a-form-item>
        <a-form-item label="兴趣">
          <a-input v-model:value="formState.hobby" placeholder="输入兴趣" />
        </a-form-item>
        <a-form-item label="现地址">
          <a-cascader v-model:value="formState.location" :options="pcTextArr" placeholder="选择现地址" />
        </a-form-item>
        <a-form-item label="职业">
          <a-input v-model:value="formState.job" placeholder="输入职业" />
        </a-form-item>
        <a-form-item label="邮箱地址">
          <a-input v-model:value="formState.email" placeholder="输入邮箱地址" />
        </a-form-item>
        <a-form-item label="简介">
          <a-textarea v-model:value="formState.introduction" show-count :maxlength="100" placeholder="输入简介" />
        </a-form-item>
        <a-form-item label="更换头像">
          <a-upload
            v-model:file-list="fileList" name="avatar" list-type="picture-card" class="avatar-uploader"
            :show-upload-list="false" action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            :before-upload="beforeUpload" @change="handleChange"
          >
            <img v-if="imageUrl" :src="imageUrl" alt="avatar">
            <div v-else>
              <LoadingOutlined v-if="loading" />
              <PlusOutlined v-else />
              <div class="ant-upload-text">
                Upload
              </div>
            </div>
          </a-upload>
        </a-form-item>
        <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
          <a-button @click="$emit('change', 0)">
            返回
          </a-button>
          <a-button type="primary" class="submit-button" @click="handleConfirmChange">
            确认
          </a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<style scoped lang="less">
.form-container {

  .submit-button {
    margin-left: 20px;
  }

  .avatar-uploader>.ant-upload {
    width: 128px;
    height: 128px;
  }

  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
}
</style>
