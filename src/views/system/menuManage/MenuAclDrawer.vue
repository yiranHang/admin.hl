<template>
  <el-drawer
    v-model="drawerVisible"
    :destroy-on-close="true"
    size="1000px"
    :title="`${drawerProps!.row?.title}菜单权限`"
  >
    <div class="table-box">
      <ProTable
        ref="proTable"
        title="菜单权限列表"
        :columns="columns"
        :request-api="getPermissionList"
        :init-param="initParam"
        :data-callback="dataCallback"
      >
        <!-- 表格 header 按钮 -->
        <template #tableHeader="scope">
          <el-button v-auth="'post'" type="primary" :icon="CirclePlus" @click="openDialog('新增', initParam)">
            新增菜单权限
          </el-button>
          <el-button
            v-auth="'delete'"
            type="danger"
            :icon="Delete"
            plain
            :disabled="!scope.isSelected"
            @click="batchDelete(scope.selectedListIds)"
          >
            批量删除菜单权限
          </el-button>
        </template>
        <!-- 表格操作 -->
        <template #operation="scope">
          <el-button v-auth="'patch'" type="primary" link :icon="EditPen" @click="openDialog('编辑', scope.row)">
            编辑
          </el-button>
        </template>
      </ProTable>
      <MenuAclDialog ref="dialogRef" />
    </div>
  </el-drawer>
</template>

<script setup lang="tsx" name="MenuAclDrawer">
import { reactive, ref } from 'vue'
import { MenuApi, User } from '@/api/interface'
import { useHandleData } from '@/hooks/useHandleData'
import ProTable from '@/components/ProTable/index.vue'
import MenuAclDialog from './MenuAclDialog.vue'
import { ProTableInstance, ColumnProps } from '@/components/ProTable/interface'
import { CirclePlus, Delete, EditPen } from '@element-plus/icons-vue'
import { addMenuPermission, deleteMenuPermission, editMenuPermission, getPermissionList } from '@/api/modules/Menu'
// 获取 ProTable 元素，调用其获取刷新数据方法（还能获取到当前查询参数，方便导出携带参数）
const proTable = ref<ProTableInstance>()
// dataCallback 是对于返回的表格数据做处理，如果你后台返回的数据不是 list && total && pageNum && pageSize 这些字段，那么你可以在这里进行处理成这些字段
// 或者直接去 hooks/useTable.ts 文件中把字段改为你后端对应的就行
const dataCallback = (data: any) => {
  return {
    list: data.data,
    total: data.count,
    pageNum: data.page,
    pageSize: data.limit,
  }
}

// 如果表格需要初始化请求参数，直接定义传给 ProTable(之后每次请求都会自动带上该参数，此参数更改之后也会一直带上，改变此参数会自动刷新表格数据)
const initParam = reactive({ menu: '' })
// 表格配置项
const columns: ColumnProps<User.Permission>[] = [
  { type: 'selection', fixed: 'left', width: 60 },
  { type: 'index', label: '序号', width: 60 },
  { prop: 'name', label: '权限名称', width: 90 },
  { prop: 'code', label: '权限代码', width: 90 },
  { prop: 'menu.path', label: '路由' },
  { prop: 'method', label: '请求方式' },
  { prop: 'path', label: '请求地址' },
  { prop: 'operation', label: '操作', fixed: 'right', width: 150 },
]

// 批量删除角色信息
const batchDelete = async (id: string[]) => {
  await useHandleData(deleteMenuPermission, { ids: id }, '删除所选角色信息')
  proTable.value?.clearSelection()
  proTable.value?.getTableList()
}

interface DrawerProps {
  row: Partial<MenuApi.ResMenuList>
  api?: (params: any) => Promise<any>
  getTableList?: () => void
}

const drawerVisible = ref(false)
const drawerProps = ref<DrawerProps>({
  row: {},
})

// 打开 dialog(新增、查看、编辑)
const dialogRef = ref<InstanceType<typeof MenuAclDialog> | null>(null)
const openDialog = (title: string, row: Partial<User.Permission> = {}) => {
  const params = {
    title,
    isView: title === '查看',
    row: { ...row },
    api: title === '新增' ? addMenuPermission : title === '编辑' ? editMenuPermission : undefined,
    getTableList: proTable.value?.getTableList,
  }
  dialogRef.value?.acceptParams(params)
}

// 接收父组件传过来的参数
const acceptParams = (params: DrawerProps) => {
  drawerProps.value = params
  drawerVisible.value = true
  initParam.menu = params.row.id as string
}

defineExpose({
  acceptParams,
})
</script>
