<template>
  <el-drawer v-model="drawerVisible" :destroy-on-close="true" size="450px" :title="`${drawerProps.title}字典`">
    <el-form
      ref="ruleFormRef"
      label-width="100px"
      label-suffix=" :"
      :rules="rules"
      :disabled="drawerProps.isView"
      :model="drawerProps.row"
      :hide-required-asterisk="drawerProps.isView"
    >
      <el-form-item label="字典名称" prop="name">
        <el-input v-model="drawerProps.row!.name" :placeholder="!isAdd ? '' : '请填写字典名称'" clearable></el-input>
      </el-form-item>
      <el-form-item label="字典类型" prop="key">
        <el-input
          v-model="drawerProps.row!.key"
          :disabled="drawerProps.title !== '新增'"
          :placeholder="!isAdd ? '' : '请填写字典类型'"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="是否禁用" prop="forbidden">
        <el-radio-group v-model="drawerProps.row!.forbidden">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input
          v-model="drawerProps.row!.remark"
          autosize
          type="textarea"
          :placeholder="!isAdd ? '' : '请填写备注'"
        ></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="drawerVisible = false"> 取消 </el-button>
      <el-button v-show="!drawerProps.isView" type="primary" @click="handleSubmit"> 确定 </el-button>
    </template>
  </el-drawer>
</template>

<script setup lang="ts" name="DictDrawer">
import { ref, reactive, computed } from 'vue'
import { ElMessage, FormInstance } from 'element-plus'
import { Dict } from '@/api/interface'
import Validate from '@/utils/eleValidate'
const rules = reactive({
  name: [{ required: true, message: '请填写字典名称' }],
  key: [
    { required: true, message: '请填写字典类型' },
    { validator: Validate.checkCode, trigger: 'blur' }
  ]
})

interface DrawerProps {
  title: string
  isView: boolean
  row: Partial<Dict.ResDictList>
  api?: (params: any) => Promise<any>
  getTableList?: () => void
}

const drawerVisible = ref(false)
const drawerProps = ref<DrawerProps>({
  isView: false,
  title: '',
  row: {}
})
const isAdd = computed(() => drawerProps.value.title === '新增')

// 接收父组件传过来的参数
const acceptParams = (params: DrawerProps) => {
  drawerProps.value = params

  if (isAdd.value) {
    drawerProps.value.row.forbidden = false
  }
  drawerVisible.value = true
}

// 提交数据（新增/编辑）
const ruleFormRef = ref<FormInstance>()
const handleSubmit = () => {
  ruleFormRef.value!.validate(async (valid) => {
    if (!valid) return
    try {
      await drawerProps.value.api!(drawerProps.value.row)
      ElMessage.success({ message: `${drawerProps.value.title}字典成功！` })
      drawerProps.value.getTableList!()
      drawerVisible.value = false
    } catch (error) {
      console.log(error)
    }
  })
}

defineExpose({
  acceptParams
})
</script>
