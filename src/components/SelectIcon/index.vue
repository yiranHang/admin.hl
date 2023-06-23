<template>
  <div class="icon-box">
    <el-input
      ref="inputRef"
      v-model="valueIcon"
      v-bind="$attrs"
      :placeholder="placeholder"
      :clearable="clearable"
      @clear="clearIcon"
      @click="openDialog"
    >
      <template #append>
        <el-button :icon="customIcons[iconValue]" />
      </template>
    </el-input>
    <el-dialog v-model="dialogVisible" :title="placeholder" top="50px" width="66%">
      <el-input v-model="inputValue" placeholder="搜索图标" size="large" :prefix-icon="Icons.Search" />
      <el-scrollbar v-if="Object.keys(iconsList).length">
        <div class="icon-list">
          <div v-for="item in iconsList" :key="item" class="icon-item" @click="selectIcon(item)">
            <component :is="item"></component>
            <span>{{ item.name }}</span>
          </div>
        </div>
      </el-scrollbar>
      <el-empty v-else description="未搜索到您要找的图标~" />
    </el-dialog>
  </div>
</template>

<script setup lang="ts" name="SelectIcon">
import { ref, computed } from 'vue'
import * as Icons from '@element-plus/icons-vue'

interface SelectIconProps {
  iconValue: string
  title?: string
  clearable?: boolean
  placeholder?: string
}

const props = withDefaults(defineProps<SelectIconProps>(), {
  iconValue: '',
  title: '请选择图标',
  clearable: true,
  placeholder: '请选择图标',
})

// 重新接收一下，防止打包后 clearable 报错
const valueIcon = ref(props.iconValue)

// open Dialog
const dialogVisible = ref(false)
const openDialog = () => (dialogVisible.value = true)

// 选择图标(触发更新父组件数据)
const emit = defineEmits(['update:iconValue'])
const selectIcon = (item: any) => {
  console.log('🚀 ~ item:', item)
  dialogVisible.value = false
  valueIcon.value = item.name
  emit('update:iconValue', item.name)
  setTimeout(() => inputRef.value.blur(), 0)
}

// 清空图标
const inputRef = ref()
const clearIcon = () => {
  valueIcon.value = ''
  emit('update:iconValue', '')
  setTimeout(() => inputRef.value.blur(), 0)
}

// 监听搜索框值
const inputValue = ref('')
const customIcons: { [key: string]: any } = Icons
const iconsList = computed((): { [key: string]: any } => {
  if (!inputValue.value) return Icons
  let result: { [key: string]: any } = {}
  for (const key in customIcons) {
    if (key.toLowerCase().indexOf(inputValue.value.toLowerCase()) > -1) result[key] = customIcons[key]
  }
  return result
})
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
