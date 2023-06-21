<template>
  <el-drawer v-model="drawerVisible" :destroy-on-close="true" size="450px" :title="`${drawerProps.title}用户`">
    <el-form
      ref="ruleFormRef"
      label-width="100px"
      label-suffix=" :"
      :rules="rules"
      :disabled="drawerProps.isView"
      :model="drawerProps.row"
      :hide-required-asterisk="drawerProps.isView"
    >
      <el-form-item label="用户姓名" prop="name">
        <el-input v-model="drawerProps.row!.name" :placeholder="!isAdd ? '' : '请填写用户姓名'" clearable></el-input>
      </el-form-item>
      <el-form-item label="账号名称" prop="account">
        <el-input v-model="drawerProps.row!.account" :placeholder="!isAdd ? '' : '请填写账号名称'" clearable></el-input>
      </el-form-item>
      <el-form-item label="角色" prop="roles">
        <el-select v-model="drawerProps.row!.roles" multiple :placeholder="!isAdd ? '' : '请选择用户角色'" clearable>
          <el-option v-for="item in roles" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>

      <el-form-item label="单位" prop="unit">
        <el-input
          v-model="drawerProps.row!.unit"
          :placeholder="!isAdd ? '' : '请填写用户所属单位'"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="职位" prop="position">
        <el-input
          v-model="drawerProps.row!.position"
          :placeholder="!isAdd ? '' : '请填写用户职位'"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input
          v-model="drawerProps.row!.remark"
          autosize
          type="textarea"
          :placeholder="!isAdd ? '' : '请填写备注'"
          clearable
        ></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="drawerVisible = false"> 取消 </el-button>
      <el-button v-show="!drawerProps.isView" type="primary" @click="handleSubmit"> 确定 </el-button>
    </template>
  </el-drawer>
</template>

<script setup lang="ts" name="UserDrawer">
import { ref, reactive, computed, onMounted } from 'vue'
import { useUserStore } from '@/stores/modules/user'
import { ElMessage, FormInstance } from 'element-plus'
import { User } from '@/api/interface'

const rules = reactive({
  name: [{ required: true, message: '请填写用户姓名' }],
  account: [{ required: true, message: '请填写用户账号' }],
  roles: [{ required: true, message: '请选择用户角色' }],
})

const userStore = useUserStore()
let roles!: Array<User.ResRoleSelect>
onMounted(async () => {
  roles = await userStore.getRoleSelect()
})
interface DrawerProps {
  title: string
  isView: boolean
  row: Partial<User.ResUserList>
  api?: (params: any) => Promise<any>
  getTableList?: () => void
}

const drawerVisible = ref(false)
const drawerProps = ref<DrawerProps>({
  isView: false,
  title: '',
  row: { status: 1 },
})
const isAdd = computed(() => drawerProps.value.title === '新增')

// 接收父组件传过来的参数
const acceptParams = (params: DrawerProps) => {
  drawerProps.value = params
  drawerVisible.value = true
}

// 提交数据（新增/编辑）
const ruleFormRef = ref<FormInstance>()
const handleSubmit = () => {
  ruleFormRef.value!.validate(async (valid) => {
    if (!valid) return
    try {
      await drawerProps.value.api!(drawerProps.value.row)
      ElMessage.success({ message: `${drawerProps.value.title}用户成功！` })
      drawerProps.value.getTableList!()
      drawerVisible.value = false
    } catch (error) {
      console.log(error)
    }
  })
}

defineExpose({
  acceptParams,
})
</script>
