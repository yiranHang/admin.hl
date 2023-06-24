<template>
  <el-dialog
    v-model="dialogVisible"
    top="50px"
    width="40%"
    :destroy-on-close="true"
    size="450px"
    :title="`${dialogProps.title}权限`"
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
          <el-form-item label="名称" prop="name">
            <el-input v-model="dialogProps.row!.name" :placeholder="!isAdd ? '' : '请填写名称'" clearable></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="代码" prop="code">
            <el-input v-model="dialogProps.row!.code" :placeholder="!isAdd ? '' : '请填写代码'" clearable></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="接口地址" prop="path">
            <el-cascader
              :options="authStore.menuPathList"
              :show-all-levels="false"
              v-model="dialogProps.row!.path"
              @change="handleChange"
              :props="{ emitPath: false, label: 'value' }"
              ref="cascaderRef"
            >
              <template #default="{ node, data }">
                <template v-if="!node.isLeaf">
                  <span>{{ data.label }}</span>
                  <span> ({{ data.children.length }}) </span>
                </template>
                <template v-else>
                  <el-text class="ml-2" :type="switchTags(data.label.split('||')[0])">
                    <el-icon>
                      <component :is="node.icon"></component>
                    </el-icon>
                    {{ data.label.split('||')[0] }}：
                  </el-text>
                  <span>{{ data.value }}</span>
                </template>
              </template>
            </el-cascader>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="请求方式" prop="method">
            <el-text class="ml-2" :type="tagType">{{ dialogProps.row!.method?.toUpperCase() }}</el-text>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="是否禁用" prop="forbidden">
            <el-radio-group v-model="dialogProps.row!.forbidden">
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

<script setup lang="ts" name="MenuAclDialog">
import { ref, reactive, computed } from 'vue'
import { ElMessage, FormInstance } from 'element-plus'
import { User } from '@/api/interface'
import { useAuthStore } from '@/stores/modules/auth'
const rules = reactive({
  label: [{ required: true, message: '请填写名称' }],
  value: [{ required: true, message: '请填写数值' }],
  sort: [{ required: true, message: '请填写序号' }]
})

interface DialogProps {
  title: string
  isView: boolean
  row: Partial<User.Permission>
  api?: (params: any) => Promise<any>
  getTableList?: () => void
}
const authStore = useAuthStore()

const cascaderRef = ref()

const dialogVisible = ref(false)
const tagType = computed(() => {
  return switchTags(dialogProps.value.row!.method as string)
})

const handleChange = () => {
  const selectedData = cascaderRef!.value.getCheckedNodes()[0].data
  const [method] = selectedData.label.split('||')
  dialogProps.value.row!.method = method
}

const switchTags = (val: string) => {
  switch (val) {
    case 'GET':
      return 'primary'
    case 'POST':
      return 'success'
    case 'PATCH':
      return 'warning'
    case 'DELETE':
      return 'danger'
    default:
      return 'primary'
  }
}
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
    dialogProps.value.row.forbidden = false
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
