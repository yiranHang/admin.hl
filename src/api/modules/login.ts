import { Login } from '@/api/interface/index'
import http from '@/api'
import CryptoTool from '@/utils/crypto'
/**
 * @name 登录模块
 */
// 用户登录
export const loginApi = (params: Login.ReqLoginForm) => {
  return http.post<Login.ResLogin>(`/passport/login`, { data: CryptoTool.sm4Encrypt(params) }, { loading: false }) // 正常 post json 请求  ==>  application/json
}

// 获取菜单权限列表
export const getAuthMenuListApi = (id: string) => {
  return http.get<Login.ResAuthMenus>(`/menu/tree/${id}`, {}, { loading: false })
}
