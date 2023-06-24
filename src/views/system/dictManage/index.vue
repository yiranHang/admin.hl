<template>
  <div class="table-box">
    <ProTable
      ref="proTable"
      title="字典列表"
      :columns="columns"
      :request-api="getDictList"
      :data-callback="dataCallback"
    >
      <!-- 表格 header 按钮 -->
      <template #tableHeader="scope">
        <el-button v-auth="'post'" type="primary" :icon="CirclePlus" @click="openDrawer('新增')"> 新增字典 </el-button>
        <el-button
          v-auth="'delete'"
          type="danger"
          :icon="Delete"
          plain
          :disabled="!scope.isSelected"
          @click="batchDelete(scope.selectedListIds)"
        >
          批量删除字典
        </el-button>
      </template>
      <!-- 表格操作 -->
      <template #operation="scope">
        <el-button v-auth="'patch'" type="primary" link :icon="EditPen" @click="openDrawer('编辑', scope.row)">
          编辑
        </el-button>
        <el-button v-auth="'patch'" type="primary" link :icon="EditPen" @click="openDetailDrawer(scope.row)">
          新增详情
        </el-button>
        <el-button v-auth="'delete'" type="primary" link :icon="Delete" @click="deleteAccount(scope.row)">
          删除
        </el-button>
      </template>
    </ProTable>
    <DictDrawer ref="drawerRef" />
    <DictDetailDrawer ref="detailDrawerRef" />
  </div>
</template>

<script setup lang="tsx" name="DictManage">
import { ref } from 'vue'
import { Dict } from '@/api/interface'
import { useHandleData } from '@/hooks/useHandleData'
import ProTable from '@/components/ProTable/index.vue'
import DictDrawer from '@/views/system/dictManage/DictDrawer.vue'
import DictDetailDrawer from '@/views/system/dictManage/DictDetailDrawer.vue'
import { ProTableInstance, ColumnProps } from '@/components/ProTable/interface'
import { CirclePlus, Delete, EditPen } from '@element-plus/icons-vue'
import { addDict, deleteDict, editDict, getDictList } from '@/api/modules/dict'
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
    pageSize: data.limit
  }
}
// 表格配置项
const columns: ColumnProps<Dict.ResDictList>[] = [
  { type: 'selection', fixed: 'left', width: 80 },
  { type: 'index', label: '序号', width: 80 },
  {
    prop: 'name',
    label: '字典名称',
    search: { el: 'input' },
    render: (scope) => {
      return <el-tag>{scope.row.name}</el-tag>
    }
  },

  { prop: 'key', label: '字典类型', search: { el: 'input' } },
  {
    prop: 'forbidden',
    label: '是否禁用',
    render: (scope) => {
      return <el-tag>{scope.row.forbidden ? '是' : '否'}</el-tag>
    }
  },
  { prop: 'remark', label: '详情描述' },
  {
    prop: 'createTime',
    label: '创建时间',
    width: 180,
    render: (scope) => {
      return dayjs(scope.row.createTime).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  { prop: 'operation', label: '操作', fixed: 'right', width: 330 }
]

// 删除字典信息
const deleteAccount = async (params: Dict.ResDictList) => {
  await useHandleData(deleteDict, { ids: [params.id] }, `删除【${params.name}】字典信息`)
  proTable.value?.getTableList()
}

// 批量删除角色信息
const batchDelete = async (id: string[]) => {
  await useHandleData(deleteDict, { ids: id }, '删除所选角色信息')
  proTable.value?.clearSelection()
  proTable.value?.getTableList()
}

// 打开 drawer(新增、查看、编辑)
const drawerRef = ref<InstanceType<typeof DictDrawer> | null>(null)
const openDrawer = (title: string, row: Partial<Dict.ResDictList> = {}) => {
  const params = {
    title,
    isView: title === '查看',
    row: { ...row },
    api: title === '新增' ? addDict : title === '编辑' ? editDict : undefined,
    getTableList: proTable.value?.getTableList
  }
  drawerRef.value?.acceptParams(params)
}
// 打开 drawer(新增、查看、编辑)
const detailDrawerRef = ref<InstanceType<typeof DictDetailDrawer> | null>(null)
const openDetailDrawer = (row: Partial<Dict.ResDictDetailList> = {}) => {
  const params = {
    row: { ...row },
    getTableList: proTable.value?.getTableList
  }
  detailDrawerRef.value?.acceptParams(params)
}
</script>
