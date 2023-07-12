<template>
  <div class="table-box">
    <ProTable
      ref="proTable"
      title="菜单列表"
      row-key="path"
      :indent="20"
      :columns="columns"
      :request-api="getMenuList"
      :data-callback="dataCallback"
      :pagination="false"
    >
      <!-- 表格 header 按钮 -->
      <template #tableHeader>
        <el-button type="primary" v-auth="'post'" :icon="CirclePlus" @click="openDialog('新增')">新增菜单 </el-button>
      </template>
      <!-- 菜单图标 -->
      <template #icon="scope">
        <el-icon :size="18">
          <component :is="scope.row.icon"></component>
        </el-icon>
      </template>
      <!-- 菜单操作 -->
      <template #operation="scope">
        <el-button type="primary" link v-auth="'patch'" :icon="EditPen" @click="openDialog('编辑', scope.row)">
          编辑
        </el-button>
        <el-button
          type="primary"
          link
          v-auth="'patch'"
          :icon="EditPen"
          v-show="!scope.row.isLeaf"
          @click="openDialog('新增', { parent: scope.row.id })"
        >
          添加下级
        </el-button>
        <el-button
          type="primary"
          link
          v-auth="'patch'"
          :icon="Lock"
          v-show="scope.row.isLeaf"
          @click="openDrawer('权限', scope.row)"
        >
          权限设置
        </el-button>
        <el-button type="primary" link v-auth="'delete'" :icon="Delete" @click="deleteMenuInfo(scope.row)">
          删除
        </el-button>
      </template>
    </ProTable>
    <MenuDialog ref="dialogRef" />
    <MenuAclDrawer ref="drawerRef" />
  </div>
</template>

<script setup lang="ts" name="menuMange">
import { ref } from 'vue'
import { ColumnProps } from '@/components/ProTable/interface'
import { Delete, EditPen, CirclePlus, Lock } from '@element-plus/icons-vue'
import MenuDialog from './MenuDialog.vue'
import ProTable from '@/components/ProTable/index.vue'
import { addMenu, deleteMenu, editMenu, getMenuList } from '@/api/modules/menu'
import { MenuApi } from '@/api/interface'
import MenuAclDrawer from './MenuAclDrawer.vue'
import { useHandleData } from '@/hooks/useHandleData'

const proTable = ref()

const dataCallback = (data: any) => {
  return data
}

// 表格配置项
const columns: ColumnProps[] = [
  { type: 'index', label: '序号', width: 80 },
  { prop: 'title', label: '菜单名称', width: 160, align: 'left' },
  { prop: 'icon', label: '菜单图标', width: 120 },
  { prop: 'name', label: '菜单 name', width: 160 },
  { prop: 'path', label: '菜单路径', width: 240 },
  { prop: 'component', label: '组件路径' },
  { prop: 'operation', label: '操作', fixed: 'right' }
]

// 删除角色信息
const deleteMenuInfo = async (params: MenuApi.ResMenuList) => {
  let message = `删除【${params.title}】菜单`
  if (!params.isLeaf) {
    message = `删除【${params.title}】菜单及其子菜单`
  }
  await useHandleData(deleteMenu, { ids: [params.id] }, message)
  proTable.value?.getTableList()
}

// 打开 dialog(新增、查看、编辑)
const dialogRef = ref<InstanceType<typeof MenuDialog> | null>(null)
const openDialog = (title: string, row: Partial<MenuApi.ResMenuList> = {}) => {
  const params = {
    title,
    isView: title === '查看',
    row: { ...row },
    api: title === '新增' ? addMenu : title === '编辑' ? editMenu : title === '权限' ? editMenu : undefined,
    getTableList: proTable.value?.getTableList
  }
  dialogRef.value?.acceptParams(params)
}

// 打开 drawer(新增、查看、编辑)
const drawerRef = ref<InstanceType<typeof MenuAclDrawer> | null>(null)
const openDrawer = (title: string, row: Partial<MenuApi.ResMenuList> = {}) => {
  const params = {
    title,
    row: { ...row },
    getTableList: proTable.value?.getTableList
  }
  drawerRef.value?.acceptParams(params)
}
</script>
