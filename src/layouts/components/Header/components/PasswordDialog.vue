<template>
  <el-dialog v-model="dialogVisible" title="修改密码" width="500px" draggable>
    <el-form label-position="left" label-width="100px" :model="formData" :rules="rules" style="max-width: 460px">
      <el-form-item label="请输入密码" prop="password">
        <el-input v-model="formData.password" type="password" placeholder="请输入密码" show-password clearable />
      </el-form-item>
      <el-form-item label="确认密码" prop="repassword">
        <el-input v-model="formData.repassword" type="password" placeholder="请确认密码" show-password clearable />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
const formData = ref({
  password: '',
  repassword: '',
})
const rules = reactive({
  password: [{ required: true, message: '请填写密码' }],
  repassword: [{ required: true, message: '请确认密码' }],
})
const dialogVisible = ref(false)
const openDialog = () => {
  dialogVisible.value = true
}

defineExpose({ openDialog })
</script>
