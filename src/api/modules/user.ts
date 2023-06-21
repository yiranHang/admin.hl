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
export const addUser = (params: User.ResUserList) => {
  return http.post(`/user`, params)
}

// 编辑用户
export const editUser = (params: User.ResUserList) => {
  return http.patch(`/user/${params.id}`, params)
}

// 删除用户
export const deleteUser = (params: { ids: string[] }) => {
  return http.post(`/user/delete`, params)
}

// 切换用户状态
export const changeUserStatus = (params: { id: string; user: User.ResUserList }) => {
  return http.patch(`/user/${params.id}`, params.user)
}

// 重置用户密码
export const resetUserPassWord = (params: { id: string }) => {
  return http.patch(`/user/password/${params.id}`)
}

// 修改用户密码
export const changeUserPassWord = (params: { id: string; password: string }) => {
  return http.patch(`/user/password/${params.id}`, { password: params.password })
}

// 获取角色列表
export const getRoleList = (params?: User.ResRoleList) => {
  return http.get<ResPage<User.ResRoleList>>(`/role`, params)
}

// 获取角色的select列表
export const getRoleSelect = () => {
  return http.get<Array<User.ResRoleSelect>>(`/role/list/valid`)
}

// 新增角色
export const addRole = (params: User.ResRoleList) => {
  return http.post(`/role`, params)
}

// 编辑角色
export const editRole = (params: User.ResRoleList) => {
  return http.patch(`/role/${params.id}`, params)
}

// 删除角色
export const deleteRole = (params: { ids: string[] }) => {
  return http.post(`/role/delete`, params)
}
