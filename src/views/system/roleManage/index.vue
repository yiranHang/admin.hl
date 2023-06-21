<template>
  <div class="table-box">
    <ProTable
      ref="proTable"
      title="角色列表"
      :columns="columns"
      :request-api="getRoleList"
      :data-callback="dataCallback"
    >
      <!-- 表格 header 按钮 -->
      <template #tableHeader="scope">
        <el-button v-auth="'post'" type="primary" :icon="CirclePlus" @click="openDrawer('新增')"> 新增角色 </el-button>
        <el-button
          v-auth="'delete'"
          type="danger"
          :icon="Delete"
          plain
          :disabled="!scope.isSelected"
          @click="batchDelete(scope.selectedListIds)"
        >
          批量删除角色
        </el-button>
      </template>
      <!-- 表格操作 -->
      <template #operation="scope">
        <el-button v-auth="'patch'" type="primary" link :icon="EditPen" @click="openDrawer('编辑', scope.row)">
          编辑
        </el-button>
        <el-button
          v-auth="'patch'"
          type="primary"
          link
          :icon="EditPen"
          @click="openAclDrawer('配置访问权限', scope.row)"
        >
          配置访问权限
        </el-button>
        <el-button v-auth="'delete'" type="primary" link :icon="Delete" @click="deleteAccount(scope.row)">
          删除
        </el-button>
      </template>
    </ProTable>
    <RoleDrawer ref="drawerRef" />
    <AclDrawer ref="aclDrawerRef" />
  </div>
</template>

<script setup lang="tsx" name="roleManage">
import { ref } from 'vue'
import { User } from '@/api/interface'
import { useHandleData } from '@/hooks/useHandleData'
import ProTable from '@/components/ProTable/index.vue'
import RoleDrawer from '@/views/system/roleManage/RoleDrawer.vue'
import AclDrawer from '@/views/system/roleManage/AclDrawer.vue'
import { ProTableInstance, ColumnProps } from '@/components/ProTable/interface'
import { CirclePlus, Delete, EditPen } from '@element-plus/icons-vue'
import { getRoleList, deleteRole, addRole, editRole, setRolePermission } from '@/api/modules/user'
import { dayjs } from 'element-plus'
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
// 表格配置项
const columns: ColumnProps<User.ResUserList>[] = [
  { type: 'selection', fixed: 'left', width: 80 },
  { type: 'index', label: '序号', width: 80 },
  {
    prop: 'name',
    label: '角色名称',
    search: { el: 'input' },
    render: (scope) => {
      return <el-tag>{scope.row.name}</el-tag>
    },
  },
  { prop: 'code', label: '角色代码', search: { el: 'input' } },

  { prop: 'remark', label: '详情描述' },
  {
    prop: 'createTime',
    label: '创建时间',
    width: 180,
    render: (scope) => {
      return dayjs(scope.row.createTime).format('YYYY-MM-DD HH:mm:ss')
    },
  },
  { prop: 'operation', label: '操作', fixed: 'right', width: 330 },
]

// 删除角色信息
const deleteAccount = async (params: User.ResUserList) => {
  await useHandleData(deleteRole, { ids: [params.id] }, `删除【${params.name}】用户`)
  proTable.value?.getTableList()
}

// 批量删除角色信息
const batchDelete = async (id: string[]) => {
  await useHandleData(deleteRole, { ids: id }, '删除所选角色信息')
  proTable.value?.clearSelection()
  proTable.value?.getTableList()
}

// 打开 drawer(新增、查看、编辑)
const drawerRef = ref<InstanceType<typeof RoleDrawer> | null>(null)
const openDrawer = (title: string, row: Partial<User.ResRoleList> = {}) => {
  const params = {
    title,
    isView: title === '查看',
    row: { ...row },
    api: title === '新增' ? addRole : title === '编辑' ? editRole : undefined,
    getTableList: proTable.value?.getTableList,
  }
  drawerRef.value?.acceptParams(params)
}
// 打开 drawer(新增、查看、编辑)
const aclDrawerRef = ref<InstanceType<typeof AclDrawer> | null>(null)
const openAclDrawer = (title: string, row: Partial<User.ResRoleList> = {}) => {
  const params = {
    title,
    row: { ...row },
    api: setRolePermission,
    getTableList: proTable.value?.getTableList,
  }
  aclDrawerRef.value?.acceptParams(params)
}
</script>
