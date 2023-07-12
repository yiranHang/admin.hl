<template>
  <el-dialog
    v-model="dialogVisible"
    top="50px"
    width="50%"
    :destroy-on-close="true"
    size="450px"
    :title="`${dialogProps.title}菜单`"
  >
    <el-form
      ref="ruleFormRef"
      label-width="130px"
      label-suffix=" :"
      :rules="rules"
      :disabled="dialogProps.isView"
      :model="dialogProps.row"
      :hide-required-asterisk="dialogProps.isView"
    >
      <el-row>
        <el-col :span="12">
          <el-form-item label="路由名称" prop="title">
            <el-input
              v-model="dialogProps.row!.title"
              :placeholder="!isAdd ? '' : '请填写路由名称'"
              clearable
            ></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="序号" prop="sort">
            <el-input-number
              v-model="dialogProps.row!.sort"
              :placeholder="!isAdd ? '' : '请填写序号'"
              clearable
            ></el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="路由图标" prop="icon">
            <SelectIcon v-model:icon-value="dialogProps.row!.icon" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="路由标识" prop="name">
            <el-input
              v-model="dialogProps.row!.name"
              :placeholder="!isAdd ? '' : '请填写路由标识'"
              clearable
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="路由访问地址" prop="path">
            <el-input
              v-model="dialogProps.row!.path"
              :placeholder="!isAdd ? '' : '请填写路由访问地址'"
              clearable
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="路由重定向地址" prop="redirect">
            <el-input
              v-model="dialogProps.row!.redirect"
              :placeholder="!isAdd ? '' : '请填写路由重定向地址'"
              clearable
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="是否叶子菜单" prop="isLeaf">
            <el-radio-group v-model="dialogProps.row!.isLeaf">
              <el-radio :label="true">是</el-radio>
              <el-radio :label="false">否</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="12" v-on="dialogProps.row!.isLeaf">
          <el-form-item label="组件地址" prop="component">
            <el-input
              v-model="dialogProps.row!.component"
              :placeholder="!isAdd ? '' : '如果是叶子菜单则必填组件地址'"
              clearable
            ></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="是否隐藏" prop="isHide">
            <el-radio-group v-model="dialogProps.row!.isHide">
              <el-radio :label="true">是</el-radio>
              <el-radio :label="false">否</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="是否全屏" prop="isFull">
            <el-radio-group v-model="dialogProps.row!.isFull">
              <el-radio :label="true">是</el-radio>
              <el-radio :label="false">否</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="是否缓存路由" prop="isKeepAlive">
            <el-radio-group v-model="dialogProps.row!.isKeepAlive">
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

<script setup lang="ts" name="MenuDialog">
import { ref, reactive, computed } from 'vue'
import { ElMessage, FormInstance } from 'element-plus'
import SelectIcon from '@/components/SelectIcon/index.vue'
import { MenuApi } from '@/api/interface'
import Validate from '@/utils/eleValidate'
const rules = reactive({
  title: [{ required: true, message: '请填写路由名称' }],
  name: [{ required: true, message: '请填写路由标识' }],
  sort: [{ required: true, message: '请填写序号' }],
  isHide: [{ required: true, message: '请选择是否隐藏' }],
  isFull: [{ required: true, message: '请选择是否全屏' }],
  isKeepAlive: [{ required: true, message: '请选择是否缓存路由' }],
  isLeaf: [{ required: true, message: '请选择是否叶子菜单' }],
  path: [
    { required: true, message: '请填写路由访问地址' },
    { validator: Validate.checkPath, trigger: 'blur' }
  ],
  component: [{ validator: Validate.checkPath, trigger: 'blur' }]
})

interface DialogProps {
  title: string
  isView: boolean
  row: Partial<MenuApi.ResMenuList>
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
    dialogProps.value.row.isHide = false
    dialogProps.value.row.isFull = false
    dialogProps.value.row.isKeepAlive = false
    dialogProps.value.row.isLeaf = false
  }
  dialogVisible.value = true
}

// 提交数据（新增/编辑）
const ruleFormRef = ref<FormInstance>()
const handleSubmit = () => {
  ruleFormRef.value!.validate(async valid => {
    if (!valid) return
    if (dialogProps.value.row.isLeaf && !dialogProps.value.row.component) {
      ElMessage.warning({ message: '请填写组件地址' })
      return
    }
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
