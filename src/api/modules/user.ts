import { ResPage, User } from '@/api/interface/index'
import http from '@/api'

/**
 * @name 用户管理模块
 */
// 获取用户列表
export const getUserList = (params: User.ReqUserParams) => {
  return http.get<ResPage<User.ResUserList>>(`/user`, params)
}
// 新增用户
export const addUser = (params: { id: string }) => {
  return http.post(`/user/add`, params)
}

// 批量添加用户
export const BatchAddUser = (params: FormData) => {
  return http.post(`/user/import`, params)
}

// 编辑用户
export const editUser = (params: { id: string }) => {
  return http.post(`/user/edit`, params)
}

// 删除用户
export const deleteUser = (params: { id: string[] }) => {
  return http.post(`/user/delete`, params)
}

// 切换用户状态
export const changeUserStatus = (params: { id: string; user: User.ResUserList }) => {
  console.log('🚀 ~ params:', params)
  return http.patch(`/user/${params.id}`, params.user)
}

// 重置用户密码
export const resetUserPassWord = (params: { id: string }) => {
  return http.post(`/user/rest_password`, params)
}
