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
  data: T[]
  page: number
  limit: number
  count: number
}

// 分页请求参数
export interface ReqPage {
  pi: number
  ps: number
}

// 文件上传模块
export namespace Upload {
  export interface ResFileUrl {
    id: string
    name: string
    type: string
    size: number
    path: string
    etag: string
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
  /**用户查询 */
  export interface ReqUserParams extends ReqPage {
    name: string
    account: string
  }

  /**权限点 */
  export interface Permission {
    id: string
    code: string
    forbidden: boolean
    /**请求方法类型 */
    method: string
    name: string
    /**请求方法路径 */
    path: string
    remark: string
    createTime: string
    updateTime: string
  }

  /**角色查询 */
  export interface ResRoleParams extends ReqPage {
    code: string
    name: string
  }

  /**角色列表 */
  export interface ResRoleList {
    id: string
    code: string
    forbidden: boolean
    name: string
    remark: string
    createTime: string
    updateTime: string
    permissions?: Permission[]
  }

  /**角色选择列表 */
  export interface ResRoleSelect {
    label: string
    value: string
  }

  /**用户列表 */
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
    /**头像 */
    avatar: string
    /**职位 */
    position: string
    /**是否是新建或者重置的账号 */
    isCreatedOrReset: boolean
    /**单位 */
    unit: string
    remark: string
    createTime: string
    updateTime: string
    roles: Array<ResRoleList>
    children?: ResUserList[]
  }

  /**权限配置列表 */
  export interface ResAclList {
    key: string
    title: string
    isLeaf: boolean
    isDisabled: boolean
    children?: ResAclList[]
  }
}

/**字典管理模块 */
export namespace Dict {
  /**字典查询 */
  export interface ResDictParams extends ReqPage {
    id: string
    key: string
    name: string
  }

  /**字典列表 */
  export interface ResDictList {
    id: string
    key: string
    name: string
    remark: string
    forbidden: boolean
    createTime: string
    updateTime: string
  }

  /**字典详情列表 */
  export interface ResDictDetailList {
    id: string
    label: string
    value: string
    sort: number
    disabled: boolean
    hide: boolean
    remark: string
    createTime: string
    updateTime: string
  }
}
