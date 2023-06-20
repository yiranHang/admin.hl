<template>
  <div class="table-box">
    <ProTable
      ref="proTable"
      title="用户列表"
      :columns="columns"
      :request-api="getUserList"
      :data-callback="dataCallback"
    >
      <!-- 表格 header 按钮 -->
      <template #tableHeader="scope">
        <el-button v-auth="'post'" type="primary" :icon="CirclePlus" @click="openDrawer('新增')"> 新增用户 </el-button>
        <el-button
          v-auth="'delete'"
          type="danger"
          :icon="Delete"
          plain
          :disabled="!scope.isSelected"
          @click="batchDelete(scope.selectedListIds)"
        >
          批量删除用户
        </el-button>
      </template>
      <!-- 表格操作 -->
      <template #operation="scope">
        <el-button v-auth="'get'" type="primary" link :icon="View" @click="openDrawer('查看', scope.row)">
          查看
        </el-button>
        <el-button v-auth="'patch'" type="primary" link :icon="EditPen" @click="openDrawer('编辑', scope.row)">
          编辑
        </el-button>
        <el-button v-auth="'update_password'" type="primary" link :icon="Refresh" @click="resetPass(scope.row)">
          重置密码
        </el-button>
        <el-button v-auth="'delete'" type="primary" link :icon="Delete" @click="deleteAccount(scope.row)">
          删除
        </el-button>
      </template>
    </ProTable>
    <UserDrawer ref="drawerRef" />
    <ImportExcel ref="dialogRef" />
  </div>
</template>

<script setup lang="tsx" name="useProTable">
import { ref } from 'vue'
import { User } from '@/api/interface'
import { useHandleData } from '@/hooks/useHandleData'
import ProTable from '@/components/ProTable/index.vue'
import ImportExcel from '@/components/ImportExcel/index.vue'
import UserDrawer from '@/views/proTable/components/UserDrawer.vue'
import { ProTableInstance, ColumnProps } from '@/components/ProTable/interface'
import { CirclePlus, Delete, EditPen, View, Refresh } from '@element-plus/icons-vue'
import { getUserList, deleteUser, editUser, addUser, resetUserPassWord, changeUserStatus } from '@/api/modules/user'
import { useAuthButtons } from '@/hooks/useAuthButtons'
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
// 页面按钮权限（按钮权限既可以使用 hooks，也可以直接使用 v-auth 指令，指令适合直接绑定在按钮上，hooks 适合根据按钮权限显示不同的内容）
const { BUTTONS } = useAuthButtons()
// 表格配置项
const columns: ColumnProps<User.ResUserList>[] = [
  { type: 'selection', fixed: 'left', width: 80 },
  { type: 'index', label: '序号', width: 80 },
  {
    prop: 'name',
    label: '用户姓名',
    search: { el: 'input' },
    render: (scope) => {
      return <el-tag>{scope.row.name}</el-tag>
    },
  },
  { prop: 'account', label: '账号', search: { el: 'input' } },
  { prop: 'unit', label: '所在单位' },
  {
    prop: 'role',
    label: '角色',
    render: (scope) => {
      const roleName = scope.row.roles?.map((item) => item.name).join('、')
      return <el-tag type="success">{roleName}</el-tag>
    },
  },
  {
    prop: 'status',
    label: '账号状态',
    enum: [
      { label: '正常', value: 1 },
      { label: '冻结', value: 0 },
    ],
    render: (scope) => {
      return (
        <>
          {BUTTONS.value.patch ? (
            <el-switch
              v-model={scope.row.status}
              active-text={scope.row.status ? '正常' : '冻结'}
              active-value={1}
              inactive-value={0}
              onClick={() => changeStatus(scope.row)}
            />
          ) : (
            <el-tag type={scope.row.status ? 'danger' : 'success'}>{scope.row.status ? '正常' : '冻结'}</el-tag>
          )}
        </>
      )
    },
  },
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

// 切换账号禁用状态
const changeStatus = async (row: User.ResUserList) => {
  await useHandleData(changeUserStatus, { id: row.id, user: row }, `切换【${row.name}】用户状态`)
  proTable.value?.getTableList()
}

// 删除用户信息
const deleteAccount = async (params: User.ResUserList) => {
  await useHandleData(deleteUser, { ids: [params.id] }, `删除【${params.name}】用户`)
  proTable.value?.getTableList()
}

// 批量删除用户信息
const batchDelete = async (id: string[]) => {
  await useHandleData(deleteUser, { ids: id }, '删除所选用户信息')
  proTable.value?.clearSelection()
  proTable.value?.getTableList()
}

// 重置用户密码
const resetPass = async (params: User.ResUserList) => {
  await useHandleData(resetUserPassWord, { id: params.id }, `重置【${params.name}】用户密码`)
  proTable.value?.getTableList()
}

// 打开 drawer(新增、查看、编辑)
const drawerRef = ref<InstanceType<typeof UserDrawer> | null>(null)
const openDrawer = (title: string, row: Partial<User.ResUserList> = {}) => {
  const params = {
    title,
    isView: title === '查看',
    row: { ...row },
    api: title === '新增' ? addUser : title === '编辑' ? editUser : undefined,
    getTableList: proTable.value?.getTableList,
  }
  drawerRef.value?.acceptParams(params)
}
</script>
