<template>
  <el-drawer v-model="drawerVisible" :destroy-on-close="true" size="800px" :title="`${drawerProps!.row?.name}标签`">
    <div class="table-box">
      <ProTable
        ref="proTable"
        title="标签列表"
        :columns="columns"
        :request-api="getDictDetailList"
        :init-param="initParam"
        :data-callback="dataCallback"
      >
        <!-- 表格 header 按钮 -->
        <template #tableHeader="scope">
          <el-button v-auth="'post'" type="primary" :icon="CirclePlus" @click="openDialog('新增', addRow)">
            新增标签
          </el-button>
          <el-button
            v-auth="'delete'"
            type="danger"
            :icon="Delete"
            plain
            :disabled="!scope.isSelected"
            @click="batchDelete(scope.selectedListIds)"
          >
            批量删除标签
          </el-button>
        </template>
        <!-- 表格操作 -->
        <template #operation="scope">
          <el-button v-auth="'patch'" type="primary" link :icon="EditPen" @click="openDialog('编辑', scope.row)">
            编辑
          </el-button>
          <el-button v-auth="'delete'" type="primary" link :icon="Delete" @click="deleteAccount(scope.row)">
            删除
          </el-button>
        </template>
      </ProTable>
      <DictDetailDialog ref="dialogRef" />
    </div>
  </el-drawer>
</template>

<script setup lang="tsx" name="DictDetailDrawer">
import { reactive, ref } from 'vue'
import { Dict } from '@/api/interface'
import { useHandleData } from '@/hooks/useHandleData'
import ProTable from '@/components/ProTable/index.vue'
import DictDetailDialog from '@/views/system/dictManage/DictDetailDialog.vue'
import { ProTableInstance, ColumnProps } from '@/components/ProTable/interface'
import { CirclePlus, Delete, EditPen } from '@element-plus/icons-vue'
import { addDictDetail, deleteDictDetail, editDictDetail, getDictDetailList } from '@/api/modules/dict'
// 获取 ProTable 元素，调用其获取刷新数据方法（还能获取到当前查询参数，方便导出携带参数）
const proTable = ref<ProTableInstance>()
// dataCallback 是对于返回的表格数据做处理，如果你后台返回的数据不是 list && total && pageNum && pageSize 这些字段，那么你可以在这里进行处理成这些字段
// 或者直接去 hooks/useTable.ts 文件中把字段改为你后端对应的就行
const dataCallback = (data: any) => {
  return {
    list: data.data,
    total: data.count,
    pageNum: data.page,
    pageSize: data.limit
  }
}

// 如果表格需要初始化请求参数，直接定义传给 ProTable(之后每次请求都会自动带上该参数，此参数更改之后也会一直带上，改变此参数会自动刷新表格数据)
const initParam = reactive({ dict: '' })
const addRow = reactive({ dict: { id: '' } })
// 表格配置项
const columns: ColumnProps<Dict.ResDictDetailList>[] = [
  { type: 'selection', fixed: 'left', width: 60 },
  { type: 'index', label: '序号', width: 60 },
  {
    prop: 'label',
    label: '标签名',
    render: scope => {
      return <el-tag>{scope.row.label}</el-tag>
    }
  },

  { prop: 'value', label: '标签值' },
  {
    prop: 'disabled',
    label: '是否禁用',
    render: scope => {
      return <el-tag>{scope.row.disabled ? '是' : '否'}</el-tag>
    }
  },
  { prop: 'remark', label: '详情描述' },
  { prop: 'operation', label: '操作', fixed: 'right', width: 150 }
]

// 删除字典信息
const deleteAccount = async (params: Dict.ResDictDetailList) => {
  await useHandleData(deleteDictDetail, { ids: [params.id] }, `删除【${params.label}】标签信息`)
  proTable.value?.getTableList()
}

// 批量删除角色信息
const batchDelete = async (id: string[]) => {
  await useHandleData(deleteDictDetail, { ids: id }, '删除所选角色信息')
  proTable.value?.clearSelection()
  proTable.value?.getTableList()
}

interface DrawerProps {
  row: Partial<Dict.ResDictList>
  api?: (params: any) => Promise<any>
  getTableList?: () => void
}

const drawerVisible = ref(false)
const drawerProps = ref<DrawerProps>({
  row: {}
})

// 打开 dialog(新增、查看、编辑)
const dialogRef = ref<InstanceType<typeof DictDetailDialog> | null>(null)
const openDialog = (title: string, row: Partial<Dict.ResDictDetailList> = {}) => {
  const params = {
    title,
    isView: title === '查看',
    row: { ...row },
    api: title === '新增' ? addDictDetail : title === '编辑' ? editDictDetail : undefined,
    getTableList: proTable.value?.getTableList
  }
  dialogRef.value?.acceptParams(params)
}

// 接收父组件传过来的参数
const acceptParams = (params: DrawerProps) => {
  drawerProps.value = params
  drawerVisible.value = true
  initParam.dict = params.row.id as string
  addRow.dict.id = params.row.id as string
}

defineExpose({
  acceptParams
})
</script>
