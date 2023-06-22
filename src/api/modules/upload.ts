import { Upload } from '@/api/interface/index'
import http from '@/api'

/**
 * @name 文件上传模块
 */
// 文件上传
export const uploadFile = (params: FormData) => {
  return http.post<Upload.ResFileUrl>(`/documents/upload/one`, params)
}

// 文件预览
export const previewFile = (id: string) => {
  return http.post(`/documents/preview/${id}`)
}

// 视频上传
export const uploadVideo = (params: FormData) => {
  return http.post<Upload.ResFileUrl>(`/file/upload/video`, params)
}
