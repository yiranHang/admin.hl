<template>
  <el-dialog
    v-model="dialogVisible"
    top="50px"
    width="40%"
    :destroy-on-close="true"
    size="450px"
    :title="`${dialogProps.title}标签`"
  >
    <el-form
      ref="ruleFormRef"
      label-width="100px"
      label-suffix=" :"
      :rules="rules"
      :disabled="dialogProps.isView"
      :model="dialogProps.row"
      :hide-required-asterisk="dialogProps.isView"
      :inline="true"
    >
      <el-row>
        <el-col :span="12">
          <el-form-item label="名称" prop="label">
            <el-input v-model="dialogProps.row!.label" :placeholder="!isAdd ? '' : '请填写名称'" clearable></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="数值" prop="value">
            <el-input v-model="dialogProps.row!.value" :placeholder="!isAdd ? '' : '请填写数值'" clearable></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="序号" prop="sort">
            <el-input-number
              v-model="dialogProps.row!.sort"
              :placeholder="!isAdd ? '' : '请填写序号'"
              clearable
            ></el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="是否禁用" prop="disabled">
            <el-radio-group v-model="dialogProps.row!.disabled">
              <el-radio :label="true">是</el-radio>
              <el-radio :label="false">否</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="是否隐藏" prop="hide">
            <el-radio-group v-model="dialogProps.row!.hide">
              <el-radio :label="true">是</el-radio>
              <el-radio :label="false">否</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="备注" prop="remark">
            <el-input
              v-model="dialogProps.row!.remark"
              autosize
              type="textarea"
              :placeholder="!isAdd ? '' : '请填写备注'"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <template #footer>
      <el-button @click="dialogVisible = false"> 取消 </el-button>
      <el-button v-show="!dialogProps.isView" type="primary" @click="handleSubmit"> 确定 </el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts" name="DictDetailDialog">
import { ref, reactive, computed } from 'vue'
import { ElMessage, FormInstance } from 'element-plus'
import { Dict } from '@/api/interface'

const rules = reactive({
  label: [{ required: true, message: '请填写名称' }],
  value: [{ required: true, message: '请填写数值' }],
  sort: [{ required: true, message: '请填写序号' }]
})

interface DialogProps {
  title: string
  isView: boolean
  row: Partial<Dict.ResDictDetailList>
  api?: (params: any) => Promise<any>
  getTableList?: () => void
}

const dialogVisible = ref(false)
const dialogProps = ref<DialogProps>({
  isView: false,
  title: '',
  row: {}
})
const isAdd = computed(() => dialogProps.value.title === '新增')

// 接收父组件传过来的参数
const acceptParams = (params: DialogProps) => {
  dialogProps.value = params
  if (isAdd.value) {
    dialogProps.value.row.disabled = false
    dialogProps.value.row.hide = false
  }
  dialogVisible.value = true
}

// 提交数据（新增/编辑）
const ruleFormRef = ref<FormInstance>()
const handleSubmit = () => {
  ruleFormRef.value!.validate(async (valid) => {
    if (!valid) return
    try {
      await dialogProps.value.api!(dialogProps.value.row)
      ElMessage.success({ message: `${dialogProps.value.title}标签成功！` })
      dialogProps.value.getTableList!()
      dialogVisible.value = false
    } catch (error) {
      console.log(error)
    }
  })
}

defineExpose({
  acceptParams
})
</script>
