<template>
  <el-drawer v-model="drawerVisible" :destroy-on-close="true" size="450px" :title="`${drawerProps.title}`">
    <TreeFilter
      title="菜单权限点配置"
      multiple
      label="title"
      id="key"
      :request-api="getAclList"
      :default-value="treeFilterValues"
      @change="changeTreeFilter"
    />
    <template #footer>
      <el-button @click="drawerVisible = false"> 取消 </el-button>
      <el-button type="primary" @click="handleSubmit"> 确定 </el-button>
    </template>
  </el-drawer>
</template>

<script setup lang="ts" name="AclDrawer">
import { reactive, ref } from 'vue'
import TreeFilter from '@/components/TreeFilter/index.vue'
import { ElMessage } from 'element-plus'
import { User } from '@/api/interface'
import { getAclList } from '@/api/modules/user'

interface DrawerProps {
  title: string
  row: Partial<User.ResRoleList>
  api?: (params: any) => Promise<any>
  getTableList?: () => void
}

const drawerVisible = ref(false)
const drawerProps = ref<DrawerProps>({
  title: '',
  row: {}
})

// 默认 treeFilter 参数
let treeFilterValues = reactive<string[]>([])
const changeTreeFilter = (val: string[]) => {
  treeFilterValues = val
}

// 接收父组件传过来的参数
const acceptParams = (params: DrawerProps) => {
  drawerProps.value = params
  const defaultTreeData = params.row.permissions?.map(item => item.id) || []
  treeFilterValues = defaultTreeData
  drawerVisible.value = true
}

// 提交数据（新增/编辑）
const handleSubmit = async () => {
  try {
    await drawerProps.value.api!({
      id: drawerProps.value.row.id,
      permissions: treeFilterValues.map((item: string) => ({ id: item }))
    })
    ElMessage.success({ message: `${drawerProps.value.title}成功！` })
    drawerProps.value.getTableList!()
    drawerVisible.value = false
  } catch (error) {
    console.log(error)
  }
}

defineExpose({
  acceptParams
})
</script>
