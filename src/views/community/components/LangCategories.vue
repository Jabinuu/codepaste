<script setup lang="ts">
import { ref, watch } from 'vue'
import { computeLanguages } from '@/utils/filter'
import mitt from '@/utils/mitt'
import { HighlightLangEnum } from '@/enums/codeEnum'

const checkboxState = ref<string[] | []>([])
watch(checkboxState, (newVal) => {
  const languages = computeLanguages(newVal)
  mitt.emit('langFilter', languages)
}, { deep: true })
</script>

<template>
  <div class="bg-w bdr-4 list-contariner">
    <a-card title="筛选编程语言" :bordered="false">
      <a-checkbox-group v-model:value="checkboxState" name="checkboxgroup">
        <a-col :span="24">
          <a-checkbox :value="HighlightLangEnum.C">
            {{ HighlightLangEnum.C }}
          </a-checkbox>
        </a-col>
        <a-col :span="24">
          <a-checkbox :value="HighlightLangEnum.JAVA">
            {{ HighlightLangEnum.JAVA }}
          </a-checkbox>
        </a-col>
        <a-col :span="24">
          <a-checkbox :value="HighlightLangEnum.JAVASCRIPT">
            {{ HighlightLangEnum.JAVASCRIPT }}
          </a-checkbox>
        </a-col>
        <a-col :span="24">
          <a-checkbox :value="HighlightLangEnum.PYTHON">
            {{ HighlightLangEnum.PYTHON }}
          </a-checkbox>
        </a-col>
        <a-col :span="24">
          <a-checkbox :value="HighlightLangEnum.CSS">
            {{ HighlightLangEnum.CSS }}
          </a-checkbox>
        </a-col>
        <a-col :span="24">
          <a-checkbox :value="HighlightLangEnum.HTML">
            {{ HighlightLangEnum.HTML }}
          </a-checkbox>
        </a-col>
        <a-col :span="24">
          <a-checkbox :value="HighlightLangEnum.OTHER">
            {{ HighlightLangEnum.OTHER }}
          </a-checkbox>
        </a-col>
      </a-checkbox-group>
    </a-card>
  </div>
</template>

<style lang="less" scoped>
.list-contariner{
  width: 240px;
  height: 100%;
  background: #fff;
}
:deep(.ant-card-body){
  padding: 0 0 20px;
}
.ant-col{
  padding: 8px 28px;
}
</style>
