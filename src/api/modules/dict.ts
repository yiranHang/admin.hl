import { Dict, ResPage } from '@/api/interface/index'
import http from '@/api'

/**
 * @name 字典管理模块
 */
// 获取字典列表
export const getDictList = (params: Dict.ResDictParams) => {
  return http.get<ResPage<Dict.ResDictList>>(`/dict`, params)
}

// 获取字典详情列表
export const getDictDetailList = (params: Dict.ResDictParams) => {
  return http.get<ResPage<Dict.ResDictDetailList>>(`/dict/detail/one`, params)
}

// 新增字典
export const addDict = (params: Dict.ResDictList) => {
  return http.post<Dict.ResDictList>(`/dict`, params)
}

// 编辑字典
export const editDict = (params: Dict.ResDictList) => {
  return http.patch<Dict.ResDictList>(`/dict/${params.id}`, params)
}
// 删除字典
export const deleteDict = (params: { ids: string[] }) => {
  return http.post(`/dict/delete`, params)
}

// 新增字典
export const addDictDetail = (params: Dict.ResDictDetailList) => {
  return http.post<Dict.ResDictList>(`dict/detail/one`, params)
}

// 编辑字典
export const editDictDetail = (params: Dict.ResDictDetailList) => {
  return http.patch<Dict.ResDictList>(`/dict/detail/one/${params.id}`, params)
}
// 删除字典
export const deleteDictDetail = (params: { ids: string[] }) => {
  return http.post(`/dict/detail/one/delete`, params)
}
