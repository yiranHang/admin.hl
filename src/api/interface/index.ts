// 请求响应参数（不包含data）
import { UserInfo } from '@/stores/interface'
export interface Result {
  code: string
  msg: string
}

// 请求响应参数（包含data）
export interface ResultData<T = any> extends Result {
  data: T
}

// 分页响应参数
export interface ResPage<T> {
  list: T[]
  pageNum: number
  pageSize: number
  total: number
}

// 分页请求参数
export interface ReqPage {
  pageNum: number
  pageSize: number
}

// 文件上传模块
export namespace Upload {
  export interface ResFileUrl {
    fileUrl: string
  }
}

// 登录模块
export namespace Login {
  export interface ReqLoginForm {
    userName: string
    password: string
  }
  export interface ResLogin {
    access_token: string
    user: UserInfo
  }
  export interface ResAuthButtons {
    [key: string]: string[]
  }

  export interface ResAuthMenus {
    [key: string]: string[] | any
  }
}

// 用户管理模块
export namespace User {
  export interface ReqUserParams extends ReqPage {
    userName: string
    gender: number
    idCard: string
    email: string
    address: string
    createTime: string[]
    status: number
  }

  export interface Role {
    id: string
    code: string
    forbidden: boolean
    name: string
    remark: string
    createTime: string
    updateTime: string
  }
  export interface ResUserList {
    id: string
    name: string
    account: number
    /**密码错误次数 */
    count: string
    /**账号是否禁止使用 */
    forbidden: boolean
    /**账号状态 */
    status: number
    password: string
    /**冻结时间 */
    freezeTime: string
    /**密码修改时间 */
    passwordChangTime: string
    /**职位 */
    position: string
    /**是否是新建或者重置的账号 */
    isCreatedOrReset: boolean
    /**单位 */
    unit: string
    createTime: string
    updateTime: string
    roles: Array<Role>
    children?: ResUserList[]
  }
  export interface ResStatus {
    userLabel: string
    userValue: number
  }
  export interface ResGender {
    genderLabel: string
    genderValue: number
  }
  export interface ResDepartment {
    id: string
    name: string
    children?: ResDepartment[]
  }
  export interface ResRole {
    id: string
    name: string
    children?: ResDepartment[]
  }
}
