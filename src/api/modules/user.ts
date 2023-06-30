import { ResPage, User } from '@/api/interface/index'
import http from '@/api'

/**
 * @name 用户管理模块
 */

// 批量添加用户
// TODO:api目前没有实现
export const BatchAddUser = (params: FormData) => {
  // return http.post( `/user/import`, params)
  return params
}

// 导出用户数据
// TODO:api目前没有实现
export const exportUserInfo = (params: User.ReqUserParams) => {
  // return http.download(PORT1 + `/user/export`, params)
  return params
}

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
export const getRoleList = (params?: User.ResRoleParams) => {
  return http.get<ResPage<User.ResRoleList>>(`/role`, params)
}

// 获取角色的select列表
export const getRoleSelect = () => {
  return http.get<Array<User.ResRoleSelect>>(`/role/list/valid`)
}

// 新增角色
export const addRole = (params: User.ResRoleList) => {
  return http.post<User.ResRoleList>(`/role`, params)
}

// 编辑角色
export const editRole = (params: User.ResRoleList) => {
  return http.patch<User.ResRoleList>(`/role/${params.id}`, params)
}

// 删除角色
export const deleteRole = (params: { ids: string[] }) => {
  return http.post(`/role/delete`, params)
}

// 获取角色权限列表
export const getAclList = () => {
  return http.get<User.ResAclList[]>(`/menu/permission/tree`)
}

// 设置角色权限
export const setRolePermission = (params: { id: string; permissions: { id: string }[] }) => {
  return http.patch<User.ResRoleList>(`/role/${params.id}`, { permissions: params.permissions })
}
