import http from '@/api'
import { MenuApi, ResPage, User } from '@/api/interface/index'
/**
 * @name 菜单管理模块
 */
// 获取菜单列表
export const getMenuList = () => {
  return http.get<MenuApi.ResMenuList>(`/menu/list`)
}

// 新增菜单
export const addMenu = (params: MenuApi.ResMenuList) => {
  return http.post<MenuApi.ResMenuList>(`/menu`, params)
}

// 编辑菜单
export const editMenu = (params: MenuApi.ResMenuList) => {
  return http.patch<MenuApi.ResMenuList>(`/menu/${params.id}`, params)
}
// 删除菜单
export const deleteMenu = (params: { ids: string[] }) => {
  return http.post(`/menu/delete`, params)
}

// 删除菜单权限
export const getPermissionList = (params: MenuApi.ResPermissionParams) => {
  return http.get<ResPage<User.Permission>>(`/permission`, params)
}

// 新增菜单权限
export const addMenuPermission = (params: User.Permission) => {
  return http.post<User.Permission>(`/permission`, params)
}

// 编辑菜单权限
export const editMenuPermission = (params: User.Permission) => {
  return http.patch<User.Permission>(`/permission/${params.id}`, params)
}
// 删除菜单权限
export const deleteMenuPermission = (params: { ids: string[] }) => {
  return http.post(`/permission/delete`, params)
}

// 获取请求地址列表
export const getMethodPathList = () => {
  return http.get<MenuApi.ResMethodPathList[]>(`/user/router/choose`)
}
