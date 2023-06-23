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
        <el-button type="primary" @click="submit()">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { changeUserPassWord } from '@/api/modules/user'
import { useUserStore } from '@/stores/modules'
import { ElMessage } from 'element-plus'
import { reactive, ref } from 'vue'
const formData = ref({
  password: '',
  repassword: '',
})
const rules = reactive({
  password: [
    { required: true, message: '请填写密码' },
    { min: 8, max: 12, message: '密码长度在8到12个字符之间' },
    {
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,20}$/,
      message: '密码必须包含至少一个小写字母、一个大写字母和一个数字',
    },
  ],
  repassword: [{ required: true, message: '请确认密码' }],
})
const dialogVisible = ref(false)

// 表单提交
const submit = async () => {
  if (formData.value.password !== formData.value.repassword) {
    ElMessage.error('两次密码输入不一致')
    return
  }
  const userInfo = useUserStore().getUserInfo
  await changeUserPassWord({ id: userInfo.id, password: formData.value.password })
  ElMessage.success('修改成功')
}
const openDialog = () => {
  dialogVisible.value = true
}

defineExpose({ openDialog })
</script>
