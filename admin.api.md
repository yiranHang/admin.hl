---
title: admin.api v1.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: '@tarslib/widdershins v4.0.17'
---

# admin.api

> v1.0.0

Base URLs:

- <a href="https://hanglin.site/api">正式环境: https://hanglin.site/api</a>

# 登录

## POST 用户登录

POST /passport/login

> Body 请求参数

```json
{
  "data": "ba8c954e55e12691d19dab2b967e87af2518ecdb607743f645b19e85c9354ebe0de1bd499862e5f5ab470ab97f581ffe"
}
```

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 说明 |
| ------------- | ------ | ------ | ---- | ---- |
| Authorization | header | string | 否   | none |
| body          | body   | object | 否   | none |
| » data        | body   | string | 是   | none |

> 返回示例

> 成功

```json
{
  "user": {
    "id": "292c7b48-6884-4bc7-89a6-b7d417ff9bed",
    "createTime": "2023-06-30T01:29:58.051Z",
    "updateTime": "2023-06-30T06:46:14.109Z",
    "account": "admin",
    "name": "超级管理员",
    "status": 1,
    "password": "92a61e7876f1758323b43d2669681f167d2e5ed1d7999d3e78bda7d684026972",
    "count": 0,
    "avatar": null,
    "unit": null,
    "position": null,
    "token": null,
    "isCreatedOrReset": true,
    "passwordChangTime": null,
    "freezeTime": null,
    "remark": null,
    "roles": [
      {
        "id": "c3b2bcdc-acff-44e3-98db-efc9b871e0e3",
        "createTime": "2023-06-30T01:29:58.051Z",
        "updateTime": "2023-06-30T01:29:58.051Z",
        "name": "超级管理员",
        "code": "admin",
        "forbidden": false,
        "remark": "超级管理员的角色"
      }
    ]
  },
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI5MmM3YjQ4LTY4ODQtNGJjNy04OWE2LWI3ZDQxN2ZmOWJlZCIsImlhdCI6MTY4ODEwNzc2OSwiZXhwIjoxNjg4MTk0MTY5fQ.ziJBZ6G-poZ5X0JZBdYfcrpiko3eRiOnLLBlmCxzlX8"
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称                 | 类型                            | 必选  | 约束 | 中文名               | 说明 |
| -------------------- | ------------------------------- | ----- | ---- | -------------------- | ---- |
| » user               | [User](#schemauser)             | true  | none | User                 | none |
| »» id                | string                          | true  | none | 主键编码             | none |
| »» createTime        | string                          | true  | none | 创建时间             | none |
| »» updateTime        | string                          | true  | none | 更改时间             | none |
| »» deletedTime       | string¦null                     | true  | none | 删除时间             | none |
| »» account           | string                          | true  | none | 账号                 | none |
| »» name              | string¦null                     | true  | none | 用户名               | none |
| »» status            | integer                         | true  | none | 账号状态             | none |
| »» password          | string                          | true  | none | 密码                 | none |
| »» count             | integer                         | true  | none | 密码输入错误计数     | none |
| »» avatar            | string¦null                     | true  | none | 头像                 | none |
| »» unit              | string¦null                     | true  | none | 单位                 | none |
| »» position          | string¦null                     | true  | none | 职位                 | none |
| »» token             | string¦null                     | true  | none | 标识验证码           | none |
| »» isCreatedOrReset  | boolean                         | true  | none | 新建还是重置         | none |
| »» passwordChangTime | string¦null                     | true  | none | 上一次修改密码的时间 | none |
| »» freezeTime        | string¦null                     | true  | none | 冻结时间             | none |
| »» remark            | string                          | true  | none | 备注                 | none |
| »» roles             | [[Role](#schemarole)]           | true  | none | 角色                 | none |
| »»» Role             | [Role](#schemarole)             | false | none | Role                 | none |
| »»»» id              | string                          | true  | none | 主键编码             | none |
| »»»» createTime      | string                          | true  | none | 创建时间             | none |
| »»»» updateTime      | string                          | true  | none | 更改时间             | none |
| »»»» deletedTime     | string¦null                     | true  | none | 删除时间             | none |
| »»»» name            | string                          | true  | none | 角色名称             | none |
| »»»» code            | string                          | true  | none | 角色代码             | none |
| »»»» forbidden       | boolean                         | true  | none | 是否禁用             | none |
| »»»» remark          | string¦null                     | true  | none | 角色详情描述         | none |
| »»»» permissions     | [anyOf]¦null                    | true  | none | 权限                 | none |
| »»»»» Permission     | [Permission](#schemapermission) | false | none | Permission           | none |
| »»»»»» id            | string                          | true  | none | 主键编码             | none |
| »»»»»» createTime    | string                          | true  | none | 创建时间             | none |
| »»»»»» updateTime    | string                          | true  | none | 更改时间             | none |
| »»»»»» deletedTime   | string¦null                     | true  | none | 删除时间             | none |
| »»»»»» name          | string                          | true  | none | 权限名               | none |
| »»»»»» code          | string                          | true  | none | 权限代码             | none |
| »»»»»» method        | string¦null                     | true  | none | API 请求头           | none |
| »»»»»» path          | string¦null                     | true  | none | API 请求地址         | none |
| »»»»»» forbidden     | boolean                         | true  | none | 是否禁用             | none |
| »»»»»» menu          | string                          | true  | none | 所属菜单             | none |
| »»»»»» remark        | string¦null                     | true  | none | 备注                 | none |

_anyOf_

| 名称               | 类型                                                    | 必选  | 约束 | 中文名 | 说明 |
| ------------------ | ------------------------------------------------------- | ----- | ---- | ------ | ---- |
| »»»»»» _anonymous_ | [#/definitions/50697372](#schema#/definitions/50697372) | false | none |        | none |

_or_

| 名称               | 类型 | 必选  | 约束 | 中文名 | 说明 |
| ------------------ | ---- | ----- | ---- | ------ | ---- |
| »»»»»» _anonymous_ | null | false | none |        | none |

_continued_

| 名称           | 类型        | 必选 | 约束 | 中文名 | 说明 |
| -------------- | ----------- | ---- | ---- | ------ | ---- |
| » access_token | string¦null | true | none | token  | none |

#### 枚举值

| 属性   | 值     |
| ------ | ------ |
| status | 1      |
| status | 0      |
| method | post   |
| method | patch  |
| method | get    |
| method | delete |

## GET 获取菜单权限列表

GET /menu/tree/{id}

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 说明 |
| ------------- | ------ | ------ | ---- | ---- |
| id            | path   | string | 是   | none |
| Authorization | header | string | 否   | none |

> 返回示例

> 成功

```json
{
  "menu": [
    {
      "meta": {
        "icon": "HomeFilled",
        "title": "首页",
        "isLink": null,
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": true
      },
      "id": "b10cdd43-a9f4-4da8-b13b-7ccc9a2b9452",
      "createTime": "2023-06-30T01:29:58.051Z",
      "updateTime": "2023-06-30T01:29:58.051Z",
      "path": "/home",
      "name": "home",
      "redirect": null,
      "component": "/home/index",
      "activeMenu": null,
      "sort": 1,
      "remark": null,
      "isLeaf": true,
      "children": []
    },
    {
      "meta": {
        "icon": "Tools",
        "title": "系统管理",
        "isLink": null,
        "isHide": false,
        "isFull": false,
        "isAffix": false,
        "isKeepAlive": false
      },
      "id": "63aee301-bbae-4ea9-b0e1-f8e0fccedb07",
      "createTime": "2023-06-30T01:29:58.051Z",
      "updateTime": "2023-06-30T01:29:58.051Z",
      "path": "/system",
      "name": "system",
      "redirect": "/system/userManage",
      "component": null,
      "activeMenu": null,
      "sort": 6,
      "remark": null,
      "isLeaf": false,
      "permission": [],
      "children": [
        {
          "meta": {
            "icon": "Menu",
            "title": "用户管理",
            "isLink": null,
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": false
          },
          "id": "8be14ccd-038b-4934-9bc6-2e033e47e146",
          "createTime": "2023-06-30T01:29:58.051Z",
          "updateTime": "2023-06-30T01:29:58.051Z",
          "path": "/system/userManage",
          "name": "userManage",
          "redirect": null,
          "component": "/system/userManage/index",
          "activeMenu": null,
          "sort": 1,
          "remark": null,
          "isLeaf": true,
          "children": []
        },
        {
          "meta": {
            "icon": "Menu",
            "title": "角色管理",
            "isLink": null,
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": false
          },
          "id": "7f01f2b5-8f82-41f4-a97d-0a5a6bb019ad",
          "createTime": "2023-06-30T01:29:58.051Z",
          "updateTime": "2023-06-30T01:29:58.051Z",
          "path": "/system/roleManage",
          "name": "roleManage",
          "redirect": null,
          "component": "/system/roleManage/index",
          "activeMenu": null,
          "sort": 2,
          "remark": null,
          "isLeaf": true,
          "children": []
        },
        {
          "meta": {
            "icon": "Menu",
            "title": "菜单管理",
            "isLink": null,
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": false
          },
          "id": "e8550a1f-0e71-4764-97bf-0a3031043aeb",
          "createTime": "2023-06-30T01:29:58.051Z",
          "updateTime": "2023-06-30T01:29:58.051Z",
          "path": "/system/menuManage",
          "name": "menuManage",
          "redirect": null,
          "component": "/system/menuManage/index",
          "activeMenu": null,
          "sort": 3,
          "remark": null,
          "isLeaf": true,
          "children": []
        },
        {
          "meta": {
            "icon": "Menu",
            "title": "字典管理",
            "isLink": null,
            "isHide": false,
            "isFull": false,
            "isAffix": false,
            "isKeepAlive": false
          },
          "id": "4488de16-cc9c-4827-a5f5-ec45a34aa39d",
          "createTime": "2023-06-30T01:29:58.051Z",
          "updateTime": "2023-06-30T01:29:58.051Z",
          "path": "/system/dictManage",
          "name": "dictManage",
          "redirect": null,
          "component": "/system/dictManage/index",
          "activeMenu": null,
          "sort": 5,
          "remark": null,
          "isLeaf": true,
          "children": []
        }
      ]
    }
  ],
  "roles": ["admin"],
  "acl": {
    "/home": {
      "delete": "/home:delete",
      "get": "/home:get",
      "post": "/home:post",
      "patch": "/home:patch"
    },
    "/system/userManage": {
      "patch": "/system/userManage:patch",
      "update_password": "/system/userManage:update_password",
      "acl_get": "/system/userManage:acl_get",
      "acl_config": "/system/userManage:acl_config",
      "post": "/system/userManage:post",
      "delete": "/system/userManage:delete",
      "get": "/system/userManage:get"
    },
    "/system/roleManage": {
      "patch": "/system/roleManage:patch",
      "post": "/system/roleManage:post",
      "delete": "/system/roleManage:delete",
      "get": "/system/roleManage:get"
    },
    "/system/menuManage": {
      "post": "/system/menuManage:post",
      "delete": "/system/menuManage:delete",
      "get": "/system/menuManage:get",
      "patch": "/system/menuManage:patch",
      "permission_get": "/system/menuManage:permission_get",
      "permission_patch": "/system/menuManage:permission_patch",
      "permission_post": "/system/menuManage:permission_post",
      "permission_delete": "/system/menuManage:permission_delete"
    },
    "/system/dictManage": {
      "post": "/system/dictManage:post",
      "delete": "/system/dictManage:delete",
      "get": "/system/dictManage:get",
      "patch": "/system/dictManage:patch",
      "add_detail": "/system/dictManage:add_detail",
      "detail_handle": "/system/dictManage:detail_handle"
    }
  }
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称          | 类型        | 必选 | 约束 | 中文名                            | 说明                                                         |
| ------------- | ----------- | ---- | ---- | --------------------------------- | ------------------------------------------------------------ |
| » menu        | [object]    | true | none | 菜单目录                          | none                                                         |
| »» path       | string      | true | none | 路由访问路径                      | none                                                         |
| »» name       | string      | true | none | 路由 name                         | 对应页面组件 name, 可用作 KeepAlive 缓存标识 && 按钮权限筛选 |
| »» redirect   | string¦null | true | none | 路由重定向地址                    | none                                                         |
| »» component  | string¦null | true | none | 视图文件路径                      | none                                                         |
| »» activeMenu | string¦null | true | none | 是否在菜单中隐藏, 需要高亮的 path | 通常用作详情页高亮父级菜单                                   |
| »» sort       | integer     | true | none | 序号                              | none                                                         |
| »» remark     | string¦null | true | none | 备注                              | none                                                         |
| »» isLeaf     | boolean     | true | none | 是否叶子菜单                      | none                                                         |
| »» children   | string¦null | true | none | 子菜单                            | none                                                         |

_anyOf_

| 名称             | 类型                | 必选  | 约束 | 中文名                            | 说明                                                         |
| ---------------- | ------------------- | ----- | ---- | --------------------------------- | ------------------------------------------------------------ | --- | ---------- |
| »»» _anonymous_  | [Menu](#schemamenu) | false | none | Menu                              | none                                                         |
| »»»» id          | string              | true  | none | 主键编码                          | none                                                         |
| »»»» createTime  | string              | true  | none | 创建时间                          | none                                                         |
| »»»» updateTime  | string              | true  | none | 更改时间                          | none                                                         |
| »»»» deletedTime | string¦null         | true  | none | 删除时间                          | none                                                         |
| »»»» path        | string              | true  | none | 路由访问路径                      | none                                                         |
| »»»» name        | string              | true  | none | 路由 name                         | 对应页面组件 name, 可用作 KeepAlive 缓存标识 && 按钮权限筛选 |
| »»»» redirect    | string¦null         | true  | none | 路由重定向地址                    | none                                                         |
| »»»» component   | string¦null         | true  | none | 视图文件路径                      | none                                                         |
| »»»» icon        | string¦null         | true  | none | 菜单和面包屑对应的图标            | none                                                         |
| »»»» title       | string              | true  | none | 路由标题                          | 用作 document.title                                          |     | 菜单的名称 |
| »»»» activeMenu  | string¦null         | true  | none | 是否在菜单中隐藏, 需要高亮的 path | 通常用作详情页高亮父级菜单                                   |
| »»»» isLink      | string¦null         | true  | none | 路由外链时填写的访问地址          | none                                                         |
| »»»» isHide      | boolean             | true  | none | 是否在菜单中隐藏                  | 通常列表详情页需要隐藏                                       |
| »»»» isFull      | boolean             | true  | none | 菜单是否全屏                      | 示例：数据大屏页面                                           |
| »»»» isAffix     | boolean             | true  | none | 菜单是否固定在标签页中            | 首页通常是固定项                                             |
| »»»» isKeepAlive | boolean             | true  | none | 当前路由是否缓存固定在标签页中    | none                                                         |
| »»»» sort        | integer             | true  | none | 序号                              | none                                                         |
| »»»» remark      | string¦null         | true  | none | 备注                              | none                                                         |
| »»»» isLeaf      | boolean             | true  | none | 是否叶子菜单                      | none                                                         |
| »»»» children    | string¦null         | true  | none | 子菜单                            | none                                                         |

_anyOf_

| 名称               | 类型                | 必选  | 约束 | 中文名                            | 说明                                                         |
| ------------------ | ------------------- | ----- | ---- | --------------------------------- | ------------------------------------------------------------ | --- | ---------- |
| »»»»» _anonymous_  | [Menu](#schemamenu) | false | none | Menu                              | none                                                         |
| »»»»»» id          | string              | true  | none | 主键编码                          | none                                                         |
| »»»»»» createTime  | string              | true  | none | 创建时间                          | none                                                         |
| »»»»»» updateTime  | string              | true  | none | 更改时间                          | none                                                         |
| »»»»»» deletedTime | string¦null         | true  | none | 删除时间                          | none                                                         |
| »»»»»» path        | string              | true  | none | 路由访问路径                      | none                                                         |
| »»»»»» name        | string              | true  | none | 路由 name                         | 对应页面组件 name, 可用作 KeepAlive 缓存标识 && 按钮权限筛选 |
| »»»»»» redirect    | string¦null         | true  | none | 路由重定向地址                    | none                                                         |
| »»»»»» component   | string¦null         | true  | none | 视图文件路径                      | none                                                         |
| »»»»»» icon        | string¦null         | true  | none | 菜单和面包屑对应的图标            | none                                                         |
| »»»»»» title       | string              | true  | none | 路由标题                          | 用作 document.title                                          |     | 菜单的名称 |
| »»»»»» activeMenu  | string¦null         | true  | none | 是否在菜单中隐藏, 需要高亮的 path | 通常用作详情页高亮父级菜单                                   |
| »»»»»» isLink      | string¦null         | true  | none | 路由外链时填写的访问地址          | none                                                         |
| »»»»»» isHide      | boolean             | true  | none | 是否在菜单中隐藏                  | 通常列表详情页需要隐藏                                       |
| »»»»»» isFull      | boolean             | true  | none | 菜单是否全屏                      | 示例：数据大屏页面                                           |
| »»»»»» isAffix     | boolean             | true  | none | 菜单是否固定在标签页中            | 首页通常是固定项                                             |
| »»»»»» isKeepAlive | boolean             | true  | none | 当前路由是否缓存固定在标签页中    | none                                                         |
| »»»»»» sort        | integer             | true  | none | 序号                              | none                                                         |
| »»»»»» remark      | string¦null         | true  | none | 备注                              | none                                                         |
| »»»»»» isLeaf      | boolean             | true  | none | 是否叶子菜单                      | none                                                         |
| »»»»»» children    | string¦null         | true  | none | 子菜单                            | none                                                         |
| »»»»»» parent      | string,null         | true  | none | 父级菜单                          | none                                                         |

_anyOf_

| 名称                   | 类型                            | 必选  | 约束 | 中文名                            | 说明                                                         |
| ---------------------- | ------------------------------- | ----- | ---- | --------------------------------- | ------------------------------------------------------------ | --- | ---------- |
| »»»»»»» _anonymous_    | [Menu](#schemamenu)             | false | none | Menu                              | none                                                         |
| »»»»»»»» id            | string                          | true  | none | 主键编码                          | none                                                         |
| »»»»»»»» createTime    | string                          | true  | none | 创建时间                          | none                                                         |
| »»»»»»»» updateTime    | string                          | true  | none | 更改时间                          | none                                                         |
| »»»»»»»» deletedTime   | string¦null                     | true  | none | 删除时间                          | none                                                         |
| »»»»»»»» path          | string                          | true  | none | 路由访问路径                      | none                                                         |
| »»»»»»»» name          | string                          | true  | none | 路由 name                         | 对应页面组件 name, 可用作 KeepAlive 缓存标识 && 按钮权限筛选 |
| »»»»»»»» redirect      | string¦null                     | true  | none | 路由重定向地址                    | none                                                         |
| »»»»»»»» component     | string¦null                     | true  | none | 视图文件路径                      | none                                                         |
| »»»»»»»» icon          | string¦null                     | true  | none | 菜单和面包屑对应的图标            | none                                                         |
| »»»»»»»» title         | string                          | true  | none | 路由标题                          | 用作 document.title                                          |     | 菜单的名称 |
| »»»»»»»» activeMenu    | string¦null                     | true  | none | 是否在菜单中隐藏, 需要高亮的 path | 通常用作详情页高亮父级菜单                                   |
| »»»»»»»» isLink        | string¦null                     | true  | none | 路由外链时填写的访问地址          | none                                                         |
| »»»»»»»» isHide        | boolean                         | true  | none | 是否在菜单中隐藏                  | 通常列表详情页需要隐藏                                       |
| »»»»»»»» isFull        | boolean                         | true  | none | 菜单是否全屏                      | 示例：数据大屏页面                                           |
| »»»»»»»» isAffix       | boolean                         | true  | none | 菜单是否固定在标签页中            | 首页通常是固定项                                             |
| »»»»»»»» isKeepAlive   | boolean                         | true  | none | 当前路由是否缓存固定在标签页中    | none                                                         |
| »»»»»»»» sort          | integer                         | true  | none | 序号                              | none                                                         |
| »»»»»»»» remark        | string¦null                     | true  | none | 备注                              | none                                                         |
| »»»»»»»» isLeaf        | boolean                         | true  | none | 是否叶子菜单                      | none                                                         |
| »»»»»»»» children      | string¦null                     | true  | none | 子菜单                            | none                                                         |
| »»»»»»»» parent        | string,null                     | true  | none | 父级菜单                          | none                                                         |
| »»»»»»»» permission    | [anyOf]                         | true  | none | 菜单权限                          | none                                                         |
| »»»»»»»»» Permission   | [Permission](#schemapermission) | false | none | Permission                        | none                                                         |
| »»»»»»»»»» id          | string                          | true  | none | 主键编码                          | none                                                         |
| »»»»»»»»»» createTime  | string                          | true  | none | 创建时间                          | none                                                         |
| »»»»»»»»»» updateTime  | string                          | true  | none | 更改时间                          | none                                                         |
| »»»»»»»»»» deletedTime | string¦null                     | true  | none | 删除时间                          | none                                                         |
| »»»»»»»»»» name        | string                          | true  | none | 权限名                            | none                                                         |
| »»»»»»»»»» code        | string                          | true  | none | 权限代码                          | none                                                         |
| »»»»»»»»»» method      | string¦null                     | true  | none | API 请求头                        | none                                                         |
| »»»»»»»»»» path        | string¦null                     | true  | none | API 请求地址                      | none                                                         |
| »»»»»»»»»» forbidden   | boolean                         | true  | none | 是否禁用                          | none                                                         |
| »»»»»»»»»» menu        | string                          | true  | none | 所属菜单                          | none                                                         |
| »»»»»»»»»» remark      | string¦null                     | true  | none | 备注                              | none                                                         |

_anyOf_

| 名称                   | 类型                                                    | 必选  | 约束 | 中文名 | 说明 |
| ---------------------- | ------------------------------------------------------- | ----- | ---- | ------ | ---- |
| »»»»»»»»»» _anonymous_ | [#/definitions/50697372](#schema#/definitions/50697372) | false | none |        | none |

_or_

| 名称                   | 类型 | 必选  | 约束 | 中文名 | 说明 |
| ---------------------- | ---- | ----- | ---- | ------ | ---- |
| »»»»»»»»»» _anonymous_ | null | false | none |        | none |

_or_

| 名称                | 类型 | 必选  | 约束 | 中文名 | 说明 |
| ------------------- | ---- | ----- | ---- | ------ | ---- |
| »»»»»»» _anonymous_ | null | false | none |        | none |

_continued_

| 名称              | 类型    | 必选 | 约束 | 中文名   | 说明 |
| ----------------- | ------- | ---- | ---- | -------- | ---- |
| »»»»»» permission | [anyOf] | true | none | 菜单权限 | none |

_or_

| 名称              | 类型 | 必选  | 约束 | 中文名 | 说明 |
| ----------------- | ---- | ----- | ---- | ------ | ---- |
| »»»»» _anonymous_ | null | false | none |        | none |

_continued_

| 名称            | 类型        | 必选 | 约束 | 中文名   | 说明 |
| --------------- | ----------- | ---- | ---- | -------- | ---- |
| »»»» parent     | string,null | true | none | 父级菜单 | none |
| »»»» permission | [anyOf]     | true | none | 菜单权限 | none |

_or_

| 名称            | 类型 | 必选  | 约束 | 中文名 | 说明 |
| --------------- | ---- | ----- | ---- | ------ | ---- |
| »»» _anonymous_ | null | false | none |        | none |

_continued_

| 名称      | 类型        | 必选 | 约束 | 中文名   | 说明 |
| --------- | ----------- | ---- | ---- | -------- | ---- |
| »» parent | string,null | true | none | 父级菜单 | none |

_anyOf_

| 名称             | 类型                | 必选  | 约束 | 中文名                            | 说明                                                         |
| ---------------- | ------------------- | ----- | ---- | --------------------------------- | ------------------------------------------------------------ | --- | ---------- |
| »»» _anonymous_  | [Menu](#schemamenu) | false | none | Menu                              | none                                                         |
| »»»» id          | string              | true  | none | 主键编码                          | none                                                         |
| »»»» createTime  | string              | true  | none | 创建时间                          | none                                                         |
| »»»» updateTime  | string              | true  | none | 更改时间                          | none                                                         |
| »»»» deletedTime | string¦null         | true  | none | 删除时间                          | none                                                         |
| »»»» path        | string              | true  | none | 路由访问路径                      | none                                                         |
| »»»» name        | string              | true  | none | 路由 name                         | 对应页面组件 name, 可用作 KeepAlive 缓存标识 && 按钮权限筛选 |
| »»»» redirect    | string¦null         | true  | none | 路由重定向地址                    | none                                                         |
| »»»» component   | string¦null         | true  | none | 视图文件路径                      | none                                                         |
| »»»» icon        | string¦null         | true  | none | 菜单和面包屑对应的图标            | none                                                         |
| »»»» title       | string              | true  | none | 路由标题                          | 用作 document.title                                          |     | 菜单的名称 |
| »»»» activeMenu  | string¦null         | true  | none | 是否在菜单中隐藏, 需要高亮的 path | 通常用作详情页高亮父级菜单                                   |
| »»»» isLink      | string¦null         | true  | none | 路由外链时填写的访问地址          | none                                                         |
| »»»» isHide      | boolean             | true  | none | 是否在菜单中隐藏                  | 通常列表详情页需要隐藏                                       |
| »»»» isFull      | boolean             | true  | none | 菜单是否全屏                      | 示例：数据大屏页面                                           |
| »»»» isAffix     | boolean             | true  | none | 菜单是否固定在标签页中            | 首页通常是固定项                                             |
| »»»» isKeepAlive | boolean             | true  | none | 当前路由是否缓存固定在标签页中    | none                                                         |
| »»»» sort        | integer             | true  | none | 序号                              | none                                                         |
| »»»» remark      | string¦null         | true  | none | 备注                              | none                                                         |
| »»»» isLeaf      | boolean             | true  | none | 是否叶子菜单                      | none                                                         |
| »»»» children    | string¦null         | true  | none | 子菜单                            | none                                                         |
| »»»» parent      | string,null         | true  | none | 父级菜单                          | none                                                         |
| »»»» permission  | [anyOf]             | true  | none | 菜单权限                          | none                                                         |

_or_

| 名称            | 类型 | 必选  | 约束 | 中文名 | 说明 |
| --------------- | ---- | ----- | ---- | ------ | ---- |
| »»» _anonymous_ | null | false | none |        | none |

_continued_

| 名称             | 类型                            | 必选  | 约束 | 中文名       | 说明 |
| ---------------- | ------------------------------- | ----- | ---- | ------------ | ---- |
| »» permission    | [anyOf]                         | true  | none | 菜单权限     | none |
| »»» Permission   | [Permission](#schemapermission) | false | none | Permission   | none |
| »»»» id          | string                          | true  | none | 主键编码     | none |
| »»»» createTime  | string                          | true  | none | 创建时间     | none |
| »»»» updateTime  | string                          | true  | none | 更改时间     | none |
| »»»» deletedTime | string¦null                     | true  | none | 删除时间     | none |
| »»»» name        | string                          | true  | none | 权限名       | none |
| »»»» code        | string                          | true  | none | 权限代码     | none |
| »»»» method      | string¦null                     | true  | none | API 请求头   | none |
| »»»» path        | string¦null                     | true  | none | API 请求地址 | none |
| »»»» forbidden   | boolean                         | true  | none | 是否禁用     | none |
| »»»» menu        | string                          | true  | none | 所属菜单     | none |
| »»»» remark      | string¦null                     | true  | none | 备注         | none |

_anyOf_

| 名称             | 类型                                                    | 必选  | 约束 | 中文名 | 说明 |
| ---------------- | ------------------------------------------------------- | ----- | ---- | ------ | ---- |
| »»»» _anonymous_ | [#/definitions/50697372](#schema#/definitions/50697372) | false | none |        | none |

_or_

| 名称             | 类型 | 必选  | 约束 | 中文名 | 说明 |
| ---------------- | ---- | ----- | ---- | ------ | ---- |
| »»»» _anonymous_ | null | false | none |        | none |

_continued_

| 名称                  | 类型                | 必选  | 约束 | 中文名                   | 说明                   |
| --------------------- | ------------------- | ----- | ---- | ------------------------ | ---------------------- | --- | ---------- |
| »» id                 | string              | true  | none | 主键编码                 | none                   |
| »» createTime         | string              | true  | none | 创建时间                 | none                   |
| »» updateTime         | string              | true  | none | 更改时间                 | none                   |
| »» deletedTime        | string¦null         | true  | none | 删除时间                 | none                   |
| »» meta               | [Meta](#schemameta) | true  | none | Meta                     | none                   |
| »»» icon              | string              | true  | none | 菜单和面包屑对应的图标   | none                   |
| »»» isAffix           | boolean             | true  | none | 菜单是否固定在标签页中   | 首页通常是固定项       |
| »»» isFull            | boolean             | true  | none | 菜单是否全屏             | 示例：数据大屏页面     |
| »»» isHide            | boolean             | true  | none | 是否在菜单中隐藏         | 通常列表详情页需要隐藏 |
| »»» isKeepAlive       | boolean             | true  | none | 当前路由是否缓存         | none                   |
| »»» isLink            | string              | true  | none | 路由外链时填写的访问地址 | none                   |
| »»» title             | string              | true  | none | 路由标题                 | 用作 document.title    |     | 菜单的名称 |
| » roles               | [string]            | true  | none | 角色名称                 | none                   |
| » acl                 | object              | true  | none |                          | none                   |
| »» _anonymous_        | object              | false | none |                          | none                   |
| »»» delete            | string              | true  | none |                          | none                   |
| »»» get               | string              | true  | none |                          | none                   |
| »»» post              | string              | true  | none |                          | none                   |
| »»» patch             | string              | true  | none |                          | none                   |
| »» _anonymous_        | object              | false | none |                          | none                   |
| »»» patch             | string              | true  | none |                          | none                   |
| »»» update_password   | string              | true  | none |                          | none                   |
| »»» acl_get           | string              | true  | none |                          | none                   |
| »»» acl_config        | string              | true  | none |                          | none                   |
| »»» post              | string              | true  | none |                          | none                   |
| »»» delete            | string              | true  | none |                          | none                   |
| »»» get               | string              | true  | none |                          | none                   |
| »» _anonymous_        | object              | false | none |                          | none                   |
| »»» patch             | string              | true  | none |                          | none                   |
| »»» post              | string              | true  | none |                          | none                   |
| »»» delete            | string              | true  | none |                          | none                   |
| »»» get               | string              | true  | none |                          | none                   |
| »» _anonymous_        | object              | false | none |                          | none                   |
| »»» post              | string              | true  | none |                          | none                   |
| »»» delete            | string              | true  | none |                          | none                   |
| »»» get               | string              | true  | none |                          | none                   |
| »»» patch             | string              | true  | none |                          | none                   |
| »»» permission_get    | string              | true  | none |                          | none                   |
| »»» permission_patch  | string              | true  | none |                          | none                   |
| »»» permission_post   | string              | true  | none |                          | none                   |
| »»» permission_delete | string              | true  | none |                          | none                   |
| »» _anonymous_        | object              | false | none |                          | none                   |
| »»» post              | string              | true  | none |                          | none                   |
| »»» delete            | string              | true  | none |                          | none                   |
| »»» get               | string              | true  | none |                          | none                   |
| »»» patch             | string              | true  | none |                          | none                   |
| »»» add_detail        | string              | true  | none |                          | none                   |
| »»» detail_handle     | string              | true  | none |                          | none                   |

#### 枚举值

| 属性   | 值     |
| ------ | ------ |
| method | post   |
| method | patch  |
| method | get    |
| method | delete |
| method | post   |
| method | patch  |
| method | get    |
| method | delete |

# 用户

## GET 获取用户列表

GET /user

### 请求参数

| 名称          | 位置   | 类型    | 必选 | 说明     |
| ------------- | ------ | ------- | ---- | -------- |
| name          | query  | string  | 否   | 用户名   |
| account       | query  | string  | 否   | 用户账号 |
| pi            | query  | integer | 是   | 页码     |
| ps            | query  | integer | 是   | 每页条数 |
| Authorization | header | string  | 否   | none     |

> 返回示例

> 成功

```json
{
  "data": [
    {
      "id": "292c7b48-6884-4bc7-89a6-b7d417ff9bed",
      "createTime": "2023-06-30T01:29:58.051Z",
      "updateTime": "2023-06-30T06:49:29.520Z",
      "account": "admin",
      "name": "超级管理员",
      "status": 1,
      "password": "92a61e7876f1758323b43d2669681f167d2e5ed1d7999d3e78bda7d684026972",
      "count": 0,
      "avatar": null,
      "unit": null,
      "position": null,
      "token": null,
      "isCreatedOrReset": true,
      "passwordChangTime": null,
      "freezeTime": null,
      "remark": null,
      "roles": [
        {
          "id": "c3b2bcdc-acff-44e3-98db-efc9b871e0e3",
          "createTime": "2023-06-30T01:29:58.051Z",
          "updateTime": "2023-06-30T01:29:58.051Z",
          "name": "超级管理员",
          "code": "admin",
          "forbidden": false,
          "remark": "超级管理员的角色"
        }
      ]
    }
  ],
  "count": 1,
  "page": 1,
  "limit": 10
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称                  | 类型                            | 必选  | 约束 | 中文名               | 说明 |
| --------------------- | ------------------------------- | ----- | ---- | -------------------- | ---- |
| » data                | [[User](#schemauser)]           | true  | none | 数据列表             | none |
| »» User               | [User](#schemauser)             | false | none | User                 | none |
| »»» id                | string                          | true  | none | 主键编码             | none |
| »»» createTime        | string                          | true  | none | 创建时间             | none |
| »»» updateTime        | string                          | true  | none | 更改时间             | none |
| »»» deletedTime       | string¦null                     | true  | none | 删除时间             | none |
| »»» account           | string                          | true  | none | 账号                 | none |
| »»» name              | string¦null                     | true  | none | 用户名               | none |
| »»» status            | integer                         | true  | none | 账号状态             | none |
| »»» password          | string                          | true  | none | 密码                 | none |
| »»» count             | integer                         | true  | none | 密码输入错误计数     | none |
| »»» avatar            | string¦null                     | true  | none | 头像                 | none |
| »»» unit              | string¦null                     | true  | none | 单位                 | none |
| »»» position          | string¦null                     | true  | none | 职位                 | none |
| »»» token             | string¦null                     | true  | none | 标识验证码           | none |
| »»» isCreatedOrReset  | boolean                         | true  | none | 新建还是重置         | none |
| »»» passwordChangTime | string¦null                     | true  | none | 上一次修改密码的时间 | none |
| »»» freezeTime        | string¦null                     | true  | none | 冻结时间             | none |
| »»» remark            | string                          | true  | none | 备注                 | none |
| »»» roles             | [[Role](#schemarole)]           | true  | none | 角色                 | none |
| »»»» Role             | [Role](#schemarole)             | false | none | Role                 | none |
| »»»»» id              | string                          | true  | none | 主键编码             | none |
| »»»»» createTime      | string                          | true  | none | 创建时间             | none |
| »»»»» updateTime      | string                          | true  | none | 更改时间             | none |
| »»»»» deletedTime     | string¦null                     | true  | none | 删除时间             | none |
| »»»»» name            | string                          | true  | none | 角色名称             | none |
| »»»»» code            | string                          | true  | none | 角色代码             | none |
| »»»»» forbidden       | boolean                         | true  | none | 是否禁用             | none |
| »»»»» remark          | string¦null                     | true  | none | 角色详情描述         | none |
| »»»»» permissions     | [anyOf]¦null                    | true  | none | 权限                 | none |
| »»»»»» Permission     | [Permission](#schemapermission) | false | none | Permission           | none |
| »»»»»»» id            | string                          | true  | none | 主键编码             | none |
| »»»»»»» createTime    | string                          | true  | none | 创建时间             | none |
| »»»»»»» updateTime    | string                          | true  | none | 更改时间             | none |
| »»»»»»» deletedTime   | string¦null                     | true  | none | 删除时间             | none |
| »»»»»»» name          | string                          | true  | none | 权限名               | none |
| »»»»»»» code          | string                          | true  | none | 权限代码             | none |
| »»»»»»» method        | string¦null                     | true  | none | API 请求头           | none |
| »»»»»»» path          | string¦null                     | true  | none | API 请求地址         | none |
| »»»»»»» forbidden     | boolean                         | true  | none | 是否禁用             | none |
| »»»»»»» menu          | string                          | true  | none | 所属菜单             | none |
| »»»»»»» remark        | string¦null                     | true  | none | 备注                 | none |

_anyOf_

| 名称                | 类型                                                    | 必选  | 约束 | 中文名 | 说明 |
| ------------------- | ------------------------------------------------------- | ----- | ---- | ------ | ---- |
| »»»»»»» _anonymous_ | [#/definitions/50697372](#schema#/definitions/50697372) | false | none |        | none |

_or_

| 名称                | 类型 | 必选  | 约束 | 中文名 | 说明 |
| ------------------- | ---- | ----- | ---- | ------ | ---- |
| »»»»»»» _anonymous_ | null | false | none |        | none |

_continued_

| 名称    | 类型    | 必选 | 约束 | 中文名   | 说明 |
| ------- | ------- | ---- | ---- | -------- | ---- |
| » count | integer | true | none | 总数量   | none |
| » page  | integer | true | none | 当前页码 | none |
| » limit | integer | true | none | 每页条数 | none |

#### 枚举值

| 属性   | 值     |
| ------ | ------ |
| status | 1      |
| status | 0      |
| method | post   |
| method | patch  |
| method | get    |
| method | delete |

## POST 新增用户

POST /user

> Body 请求参数

```json
{
  "account": "test",
  "name": "统今动",
  "roles": ["c3b2bcdc-acff-44e3-98db-efc9b871e0e3"]
}
```

### 请求参数

| 名称                | 位置   | 类型        | 必选 | 中文名               | 说明 |
| ------------------- | ------ | ----------- | ---- | -------------------- | ---- |
| Authorization       | header | string      | 否   |                      | none |
| body                | body   | object      | 否   |                      | none |
| » account           | body   | string      | 是   | 账号                 | none |
| » name              | body   | string¦null | 是   | 用户名               | none |
| » status            | body   | integer     | 是   | 账号状态             | none |
| » password          | body   | string      | 是   | 密码                 | none |
| » count             | body   | integer     | 是   | 密码输入错误计数     | none |
| » avatar            | body   | string¦null | 是   | 头像                 | none |
| » unit              | body   | string¦null | 是   | 单位                 | none |
| » position          | body   | string¦null | 是   | 职位                 | none |
| » token             | body   | string¦null | 是   | 标识验证码           | none |
| » isCreatedOrReset  | body   | boolean     | 是   | 新建还是重置         | none |
| » passwordChangTime | body   | string¦null | 是   | 上一次修改密码的时间 | none |
| » freezeTime        | body   | string¦null | 是   | 冻结时间             | none |
| » remark            | body   | string      | 是   | 备注                 | none |
| » roles             | body   | [string]    | 是   | 角色                 | none |

#### 枚举值

| 属性     | 值  |
| -------- | --- |
| » status | 1   |
| » status | 0   |

> 返回示例

> 成功

```json
{
  "account": "test",
  "name": "统今动",
  "roles": ["c3b2bcdc-acff-44e3-98db-efc9b871e0e3"],
  "password": "2b0ba60940890cbf1e82297bbe354b0f3d3843dd2a4d3bb04979243673635445",
  "deletedTime": null,
  "avatar": null,
  "unit": null,
  "position": null,
  "token": null,
  "passwordChangTime": null,
  "freezeTime": null,
  "remark": null,
  "id": "b4f62e62-7074-4720-96d2-e7cc3276518e",
  "createTime": "2023-06-30T07:13:17.313Z",
  "updateTime": "2023-06-30T07:13:17.313Z",
  "status": 1,
  "count": 0,
  "isCreatedOrReset": true
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称                | 类型        | 必选 | 约束 | 中文名               | 说明 |
| ------------------- | ----------- | ---- | ---- | -------------------- | ---- |
| » id                | string      | true | none | 主键编码             | none |
| » createTime        | string      | true | none | 创建时间             | none |
| » updateTime        | string      | true | none | 更改时间             | none |
| » deletedTime       | string¦null | true | none | 删除时间             | none |
| » account           | string      | true | none | 账号                 | none |
| » name              | string¦null | true | none | 用户名               | none |
| » status            | integer     | true | none | 账号状态             | none |
| » password          | string      | true | none | 密码                 | none |
| » count             | integer     | true | none | 密码输入错误计数     | none |
| » avatar            | string¦null | true | none | 头像                 | none |
| » unit              | string¦null | true | none | 单位                 | none |
| » position          | string¦null | true | none | 职位                 | none |
| » token             | string¦null | true | none | 标识验证码           | none |
| » isCreatedOrReset  | boolean     | true | none | 新建还是重置         | none |
| » passwordChangTime | string¦null | true | none | 上一次修改密码的时间 | none |
| » freezeTime        | string¦null | true | none | 冻结时间             | none |
| » remark            | string      | true | none | 备注                 | none |
| » roles             | [string]    | true | none | 角色                 | none |

#### 枚举值

| 属性   | 值  |
| ------ | --- |
| status | 1   |
| status | 0   |

## PATCH 编辑用户

PATCH /user/{id}

> Body 请求参数

```json
{
  "name": "看因经所",
  "unit": "看因经所",
  "position": "sed magna veniam",
  "remark": "dolor",
  "roles": ["c3b2bcdc-acff-44e3-98db-efc9b871e0e3"]
}
```

### 请求参数

| 名称          | 位置   | 类型        | 必选 | 中文名   | 说明 |
| ------------- | ------ | ----------- | ---- | -------- | ---- |
| id            | path   | string      | 是   |          | none |
| Authorization | header | string      | 否   |          | none |
| body          | body   | object      | 否   |          | none |
| » name        | body   | string¦null | 是   | 用户名   | none |
| » status      | body   | integer     | 是   | 账号状态 | none |
| » avatar      | body   | string¦null | 是   | 头像     | none |
| » unit        | body   | string¦null | 是   | 单位     | none |
| » position    | body   | string¦null | 是   | 职位     | none |
| » remark      | body   | string      | 是   | 备注     | none |
| » roles       | body   | [string]    | 是   | 角色     | none |

#### 枚举值

| 属性     | 值  |
| -------- | --- |
| » status | 1   |
| » status | 0   |

> 返回示例

> 成功

```json
{
  "id": "507c4870-1643-4081-ad91-9df3ab37bc5c",
  "createTime": "2023-06-30T07:11:03.037Z",
  "updateTime": "2023-06-30T07:21:40.692Z",
  "account": "111",
  "name": "看因经所",
  "status": 1,
  "password": "d469c270ac5200f813b0785f43172eb68959a7646143422f1d635eb744c9e927",
  "count": 0,
  "avatar": null,
  "unit": "看因经所",
  "position": "sed magna veniam",
  "token": null,
  "isCreatedOrReset": true,
  "passwordChangTime": null,
  "freezeTime": null,
  "remark": "dolor",
  "roles": ["c3b2bcdc-acff-44e3-98db-efc9b871e0e3"]
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称                | 类型        | 必选 | 约束 | 中文名               | 说明 |
| ------------------- | ----------- | ---- | ---- | -------------------- | ---- |
| » id                | string      | true | none | 主键编码             | none |
| » createTime        | string      | true | none | 创建时间             | none |
| » updateTime        | string      | true | none | 更改时间             | none |
| » deletedTime       | string¦null | true | none | 删除时间             | none |
| » account           | string      | true | none | 账号                 | none |
| » name              | string¦null | true | none | 用户名               | none |
| » status            | integer     | true | none | 账号状态             | none |
| » password          | string      | true | none | 密码                 | none |
| » count             | integer     | true | none | 密码输入错误计数     | none |
| » avatar            | string¦null | true | none | 头像                 | none |
| » unit              | string¦null | true | none | 单位                 | none |
| » position          | string¦null | true | none | 职位                 | none |
| » token             | string¦null | true | none | 标识验证码           | none |
| » isCreatedOrReset  | boolean     | true | none | 新建还是重置         | none |
| » passwordChangTime | string¦null | true | none | 上一次修改密码的时间 | none |
| » freezeTime        | string¦null | true | none | 冻结时间             | none |
| » remark            | string      | true | none | 备注                 | none |
| » roles             | [string]    | true | none | 角色                 | none |

#### 枚举值

| 属性   | 值  |
| ------ | --- |
| status | 1   |
| status | 0   |

## POST 删除用户

POST /user/delete

> Body 请求参数

```json
{
  "ids": ["string"]
}
```

### 请求参数

| 名称          | 位置   | 类型     | 必选 | 中文名 | 说明 |
| ------------- | ------ | -------- | ---- | ------ | ---- |
| Authorization | header | string   | 否   |        | none |
| body          | body   | object   | 否   |        | none |
| » ids         | body   | [string] | 是   |        | none |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## PATCH 修改用户密码

PATCH /user/password/{id}

> Body 请求参数

```json
{
  "password": "Admin@123"
}
```

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ------ | ---- |
| id            | path   | string | 是   |        | none |
| Authorization | header | string | 否   |        | none |
| body          | body   | object | 否   |        | none |
| » password    | body   | string | 是   | 密码   | none |

> 返回示例

> 成功

```json
{
  "generatedMaps": [],
  "raw": [],
  "affected": 1
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

# 角色

## GET 获取角色列表

GET /role

### 请求参数

| 名称          | 位置   | 类型    | 必选 | 中文名 | 说明     |
| ------------- | ------ | ------- | ---- | ------ | -------- |
| name          | query  | string  | 否   |        | 角色名称 |
| code          | query  | string  | 否   |        | 角色编码 |
| pi            | query  | integer | 否   |        | 页码     |
| ps            | query  | integer | 否   |        | 每页数量 |
| Authorization | header | string  | 否   |        | none     |

> 返回示例

> 成功

```json
{
  "data": [
    {
      "id": "c3b2bcdc-acff-44e3-98db-efc9b871e0e3",
      "createTime": "2023-06-30T01:29:58.051Z",
      "updateTime": "2023-06-30T01:29:58.051Z",
      "name": "超级管理员",
      "code": "admin",
      "forbidden": false,
      "remark": "超级管理员的角色",
      "permissions": [
        {
          "id": "110a500a-02e6-4b33-b7fd-8a1e0bbe29a6",
          "createTime": "2023-06-30T01:29:58.051Z",
          "updateTime": "2023-06-30T01:29:58.051Z",
          "name": "删除",
          "code": "delete",
          "method": "delete",
          "path": "/home/:id",
          "forbidden": false,
          "remark": null
        },
        {
          "id": "c9c15d78-b2b7-44ca-9c03-7782d3d0cd21",
          "createTime": "2023-06-30T01:29:58.051Z",
          "updateTime": "2023-06-30T01:29:58.051Z",
          "name": "获取",
          "code": "get",
          "method": "get",
          "path": "/home/:id",
          "forbidden": false,
          "remark": null
        },
        {
          "id": "e151636e-df2a-4561-8c3a-c2067e1efd1e",
          "createTime": "2023-06-30T01:29:58.051Z",
          "updateTime": "2023-06-30T01:29:58.051Z",
          "name": "新增",
          "code": "post",
          "method": "post",
          "path": "/home/:id",
          "forbidden": false,
          "remark": null
        },
        {
          "id": "dc40e81d-101b-4783-b382-cda6eabd829b",
          "createTime": "2023-06-30T01:29:58.051Z",
          "updateTime": "2023-06-30T01:29:58.051Z",
          "name": "更新",
          "code": "patch",
          "method": "patch",
          "path": "/home/:id",
          "forbidden": false,
          "remark": null
        },
        {
          "id": "f96fdc72-6d59-4f3f-9ae7-ab3257eb5f13",
          "createTime": "2023-06-30T01:29:58.051Z",
          "updateTime": "2023-06-30T01:29:58.051Z",
          "name": "更新",
          "code": "patch",
          "method": "patch",
          "path": "/system/userManage/:id",
          "forbidden": false,
          "remark": null
        },
        {
          "id": "f3287a4d-a170-46b8-839d-67db6f262da5",
          "createTime": "2023-06-30T01:29:58.051Z",
          "updateTime": "2023-06-30T01:29:58.051Z",
          "name": "密码修改",
          "code": "update_password",
          "method": "patch",
          "path": "/user/password/:id",
          "forbidden": false,
          "remark": null
        },
        {
          "id": "f4e677be-dfc4-471d-a6c3-66f72316bdfa",
          "createTime": "2023-06-30T01:29:58.051Z",
          "updateTime": "2023-06-30T01:29:58.051Z",
          "name": "查看权限",
          "code": "acl_get",
          "method": "get",
          "path": "/permission/acl/router",
          "forbidden": false,
          "remark": null
        },
        {
          "id": "6758d754-6490-46e6-92ce-9921415e212c",
          "createTime": "2023-06-30T01:29:58.051Z",
          "updateTime": "2023-06-30T01:29:58.051Z",
          "name": "配置权限",
          "code": "acl_config",
          "method": "post",
          "path": "/permission/update",
          "forbidden": false,
          "remark": null
        },
        {
          "id": "b8bbd138-0c01-4ef0-b684-13fdf3543fdc",
          "createTime": "2023-06-30T01:29:58.051Z",
          "updateTime": "2023-06-30T01:29:58.051Z",
          "name": "新增",
          "code": "post",
          "method": "post",
          "path": "/system/userManage/:id",
          "forbidden": false,
          "remark": null
        },
        {
          "id": "8bdc92de-37d8-4b12-874d-09855c105d1c",
          "createTime": "2023-06-30T01:29:58.051Z",
          "updateTime": "2023-06-30T01:29:58.051Z",
          "name": "删除",
          "code": "delete",
          "method": "delete",
          "path": "/system/userManage/:id",
          "forbidden": false,
          "remark": null
        },
        {
          "id": "1de89315-673b-47ab-b957-7b1df45b8f2a",
          "createTime": "2023-06-30T01:29:58.051Z",
          "updateTime": "2023-06-30T01:29:58.051Z",
          "name": "获取",
          "code": "get",
          "method": "get",
          "path": "/system/userManage/:id",
          "forbidden": false,
          "remark": null
        },
        {
          "id": "a143de11-a845-41d2-b152-b5c1e2f8b49b",
          "createTime": "2023-06-30T01:29:58.051Z",
          "updateTime": "2023-06-30T01:29:58.051Z",
          "name": "更新",
          "code": "patch",
          "method": "patch",
          "path": "/system/roleManage/:id",
          "forbidden": false,
          "remark": null
        },
        {
          "id": "c6c16793-8b32-4d04-a50b-fe7238ea0469",
          "createTime": "2023-06-30T01:29:58.051Z",
          "updateTime": "2023-06-30T01:29:58.051Z",
          "name": "新增",
          "code": "post",
          "method": "post",
          "path": "/system/roleManage/:id",
          "forbidden": false,
          "remark": null
        },
        {
          "id": "451a2c78-0234-4fc3-a69a-1d08b26899ca",
          "createTime": "2023-06-30T01:29:58.051Z",
          "updateTime": "2023-06-30T01:29:58.051Z",
          "name": "删除",
          "code": "delete",
          "method": "delete",
          "path": "/system/roleManage/:id",
          "forbidden": false,
          "remark": null
        },
        {
          "id": "740dfb97-0d48-4ea3-b0a5-89d0c481a77b",
          "createTime": "2023-06-30T01:29:58.051Z",
          "updateTime": "2023-06-30T01:29:58.051Z",
          "name": "获取",
          "code": "get",
          "method": "get",
          "path": "/system/roleManage/:id",
          "forbidden": false,
          "remark": null
        },
        {
          "id": "9c3643a9-6a66-4b0c-bdc6-eff5bdf56e36",
          "createTime": "2023-06-30T01:29:58.051Z",
          "updateTime": "2023-06-30T01:29:58.051Z",
          "name": "新增",
          "code": "post",
          "method": "post",
          "path": "/system/menuManage/:id",
          "forbidden": false,
          "remark": null
        },
        {
          "id": "ebc881ac-00ef-407d-a036-d2afcbf6e7dd",
          "createTime": "2023-06-30T01:29:58.051Z",
          "updateTime": "2023-06-30T01:29:58.051Z",
          "name": "删除",
          "code": "delete",
          "method": "delete",
          "path": "/system/menuManage/:id",
          "forbidden": false,
          "remark": null
        },
        {
          "id": "84b72679-3a8d-4d6f-901f-cc10bd141fd2",
          "createTime": "2023-06-30T01:29:58.051Z",
          "updateTime": "2023-06-30T01:29:58.051Z",
          "name": "获取",
          "code": "get",
          "method": "get",
          "path": "/system/menuManage/:id",
          "forbidden": false,
          "remark": null
        },
        {
          "id": "2cb1737e-29d0-4b75-a7f0-783cbcf6a73f",
          "createTime": "2023-06-30T01:29:58.051Z",
          "updateTime": "2023-06-30T01:29:58.051Z",
          "name": "更新",
          "code": "patch",
          "method": "patch",
          "path": "/system/menuManage/:id",
          "forbidden": false,
          "remark": null
        },
        {
          "id": "28d05eb1-31ba-4b9c-92eb-a2b3ee81d7e1",
          "createTime": "2023-06-30T01:29:58.051Z",
          "updateTime": "2023-06-30T01:29:58.051Z",
          "name": "权限查看",
          "code": "permission_get",
          "method": "get",
          "path": "/permission",
          "forbidden": false,
          "remark": null
        },
        {
          "id": "114e2fa9-9b9d-4ef0-88ac-415c842ba3e0",
          "createTime": "2023-06-30T01:29:58.051Z",
          "updateTime": "2023-06-30T01:29:58.051Z",
          "name": "权限修改",
          "code": "permission_patch",
          "method": "patch",
          "path": "/permission/:id",
          "forbidden": false,
          "remark": null
        },
        {
          "id": "3464ba4d-2ea7-4af5-a0bd-3e3e13c19685",
          "createTime": "2023-06-30T01:29:58.051Z",
          "updateTime": "2023-06-30T01:29:58.051Z",
          "name": "新增权限",
          "code": "permission_post",
          "method": "post",
          "path": "/permission",
          "forbidden": false,
          "remark": null
        },
        {
          "id": "313141d7-fe93-44c6-8cac-79f356c69fc1",
          "createTime": "2023-06-30T01:29:58.051Z",
          "updateTime": "2023-06-30T01:29:58.051Z",
          "name": "权限删除",
          "code": "permission_delete",
          "method": "post",
          "path": "/permission/delete",
          "forbidden": false,
          "remark": null
        },
        {
          "id": "4b2a717b-fdf6-43b9-a12e-a1b41aa80865",
          "createTime": "2023-06-30T01:29:58.051Z",
          "updateTime": "2023-06-30T01:29:58.051Z",
          "name": "新增",
          "code": "post",
          "method": "post",
          "path": "/system/dictManage/:id",
          "forbidden": false,
          "remark": null
        },
        {
          "id": "654eaa6d-a0c9-4530-b623-a7635bd7fc2d",
          "createTime": "2023-06-30T01:29:58.051Z",
          "updateTime": "2023-06-30T01:29:58.051Z",
          "name": "删除",
          "code": "delete",
          "method": "delete",
          "path": "/system/dictManage/:id",
          "forbidden": false,
          "remark": null
        },
        {
          "id": "8fbd21c7-0ed5-4fb1-9e37-454af564a859",
          "createTime": "2023-06-30T01:29:58.051Z",
          "updateTime": "2023-06-30T01:29:58.051Z",
          "name": "获取",
          "code": "get",
          "method": "get",
          "path": "/system/dictManage/:id",
          "forbidden": false,
          "remark": null
        },
        {
          "id": "2fee542e-3dee-4fa5-b3ad-e20c178410c6",
          "createTime": "2023-06-30T01:29:58.051Z",
          "updateTime": "2023-06-30T01:29:58.051Z",
          "name": "更新",
          "code": "patch",
          "method": "patch",
          "path": "/system/dictManage/:id",
          "forbidden": false,
          "remark": null
        },
        {
          "id": "4e73dc14-10ca-4949-827d-e2b5a7303ce1",
          "createTime": "2023-06-30T01:29:58.051Z",
          "updateTime": "2023-06-30T01:29:58.051Z",
          "name": "新增详情",
          "code": "add_detail",
          "method": "post",
          "path": "/dict/detail/one",
          "forbidden": false,
          "remark": null
        },
        {
          "id": "ef4e3061-5c11-497f-904d-8d754903c22e",
          "createTime": "2023-06-30T01:29:58.051Z",
          "updateTime": "2023-06-30T01:29:58.051Z",
          "name": "详情操作",
          "code": "detail_handle",
          "method": "post",
          "path": "/dict/detail/one",
          "forbidden": false,
          "remark": null
        }
      ]
    }
  ],
  "count": 1,
  "page": 1,
  "limit": 10
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称              | 类型                            | 必选  | 约束 | 中文名       | 说明 |
| ----------------- | ------------------------------- | ----- | ---- | ------------ | ---- |
| » data            | [[Role](#schemarole)]           | true  | none | 数据列表     | none |
| »» Role           | [Role](#schemarole)             | false | none | Role         | none |
| »»» id            | string                          | true  | none | 主键编码     | none |
| »»» createTime    | string                          | true  | none | 创建时间     | none |
| »»» updateTime    | string                          | true  | none | 更改时间     | none |
| »»» deletedTime   | string¦null                     | true  | none | 删除时间     | none |
| »»» name          | string                          | true  | none | 角色名称     | none |
| »»» code          | string                          | true  | none | 角色代码     | none |
| »»» forbidden     | boolean                         | true  | none | 是否禁用     | none |
| »»» remark        | string¦null                     | true  | none | 角色详情描述 | none |
| »»» permissions   | [anyOf]¦null                    | true  | none | 权限         | none |
| »»»» Permission   | [Permission](#schemapermission) | false | none | Permission   | none |
| »»»»» id          | string                          | true  | none | 主键编码     | none |
| »»»»» createTime  | string                          | true  | none | 创建时间     | none |
| »»»»» updateTime  | string                          | true  | none | 更改时间     | none |
| »»»»» deletedTime | string¦null                     | true  | none | 删除时间     | none |
| »»»»» name        | string                          | true  | none | 权限名       | none |
| »»»»» code        | string                          | true  | none | 权限代码     | none |
| »»»»» method      | string¦null                     | true  | none | API 请求头   | none |
| »»»»» path        | string¦null                     | true  | none | API 请求地址 | none |
| »»»»» forbidden   | boolean                         | true  | none | 是否禁用     | none |
| »»»»» menu        | string                          | true  | none | 所属菜单     | none |
| »»»»» remark      | string¦null                     | true  | none | 备注         | none |

_anyOf_

| 名称              | 类型                                                    | 必选  | 约束 | 中文名 | 说明 |
| ----------------- | ------------------------------------------------------- | ----- | ---- | ------ | ---- |
| »»»»» _anonymous_ | [#/definitions/50697372](#schema#/definitions/50697372) | false | none |        | none |

_or_

| 名称              | 类型 | 必选  | 约束 | 中文名 | 说明 |
| ----------------- | ---- | ----- | ---- | ------ | ---- |
| »»»»» _anonymous_ | null | false | none |        | none |

_continued_

| 名称    | 类型    | 必选 | 约束 | 中文名   | 说明 |
| ------- | ------- | ---- | ---- | -------- | ---- |
| » count | integer | true | none | 总数量   | none |
| » page  | integer | true | none | 当前页码 | none |
| » limit | integer | true | none | 每页条数 | none |

#### 枚举值

| 属性   | 值     |
| ------ | ------ |
| method | post   |
| method | patch  |
| method | get    |
| method | delete |

## POST 新增角色

POST /role

> Body 请求参数

```json
{
  "name": "string",
  "code": "string",
  "forbidden": true,
  "remark": "string"
}
```

### 请求参数

| 名称          | 位置   | 类型        | 必选 | 中文名       | 说明 |
| ------------- | ------ | ----------- | ---- | ------------ | ---- |
| Authorization | header | string      | 否   |              | none |
| body          | body   | object      | 否   |              | none |
| » name        | body   | string      | 是   | 角色名称     | none |
| » code        | body   | string      | 是   | 角色代码     | none |
| » forbidden   | body   | boolean     | 是   | 是否禁用     | none |
| » remark      | body   | string¦null | 是   | 角色详情描述 | none |

> 返回示例

> 成功

```json
{
  "code": "84",
  "forbidden": false,
  "name": "导热族克局",
  "remark": "sed velit officia",
  "deletedTime": null,
  "id": "98d17b50-06f1-45df-8c4d-3f52f6d7afff",
  "createTime": "2023-06-30T08:36:02.346Z",
  "updateTime": "2023-06-30T08:36:02.346Z"
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称          | 类型        | 必选 | 约束 | 中文名       | 说明 |
| ------------- | ----------- | ---- | ---- | ------------ | ---- |
| » name        | string      | true | none | 角色名称     | none |
| » code        | string      | true | none | 角色代码     | none |
| » forbidden   | boolean     | true | none | 是否禁用     | none |
| » remark      | string¦null | true | none | 角色详情描述 | none |
| » id          | string      | true | none | 主键编码     | none |
| » createTime  | string      | true | none | 创建时间     | none |
| » updateTime  | string      | true | none | 更改时间     | none |
| » deletedTime | string¦null | true | none | 删除时间     | none |

## GET 获取角色的 select 列表

GET /role/list/valid

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ------ | ---- |
| Authorization | header | string | 否   |        | none |

> 返回示例

> 成功

```json
[
  {
    "value": "c3b2bcdc-acff-44e3-98db-efc9b871e0e3",
    "label": "超级管理员"
  }
]
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## PATCH 设置角色权限

PATCH /role/{id}

> Body 请求参数

```json
{
  "permissions": ["string"]
}
```

### 请求参数

| 名称          | 位置   | 类型     | 必选 | 中文名 | 说明 |
| ------------- | ------ | -------- | ---- | ------ | ---- |
| id            | path   | string   | 是   |        | none |
| Authorization | header | string   | 否   |        | none |
| body          | body   | object   | 否   |        | none |
| » permissions | body   | [string] | 是   |        | none |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## POST 删除角色

POST /role/delete

> Body 请求参数

```json
{
  "ids": ["string"]
}
```

### 请求参数

| 名称          | 位置   | 类型     | 必选 | 中文名 | 说明 |
| ------------- | ------ | -------- | ---- | ------ | ---- |
| Authorization | header | string   | 否   |        | none |
| body          | body   | object   | 否   |        | none |
| » ids         | body   | [string] | 是   |        | none |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## GET 获取角色权限列表

GET /menu/permission/tree

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ------ | ---- |
| Authorization | header | string | 否   |        | none |

> 返回示例

> 成功

```json
[
  {
    "key": "b10cdd43-a9f4-4da8-b13b-7ccc9a2b9452",
    "title": "首页",
    "isLeaf": false,
    "children": [
      {
        "key": "110a500a-02e6-4b33-b7fd-8a1e0bbe29a6",
        "title": "删除",
        "isDisabled": false,
        "isLeaf": true
      },
      {
        "key": "c9c15d78-b2b7-44ca-9c03-7782d3d0cd21",
        "title": "获取",
        "isDisabled": false,
        "isLeaf": true
      },
      {
        "key": "e151636e-df2a-4561-8c3a-c2067e1efd1e",
        "title": "新增",
        "isDisabled": false,
        "isLeaf": true
      },
      {
        "key": "dc40e81d-101b-4783-b382-cda6eabd829b",
        "title": "更新",
        "isDisabled": false,
        "isLeaf": true
      }
    ]
  },
  {
    "key": "530fc49b-333c-403b-8de6-452a1f04a354",
    "title": "数据大屏",
    "isLeaf": false,
    "children": [
      {
        "key": "a629b4fb-b8cf-436a-b0db-f6011adccfe1",
        "title": "获取",
        "isDisabled": false,
        "isLeaf": true
      },
      {
        "key": "1cd10ab8-40bb-4752-9f35-3abd799fdab0",
        "title": "新增",
        "isDisabled": false,
        "isLeaf": true
      },
      {
        "key": "71e75d6c-ee8a-4ca7-9301-8daaafdb2692",
        "title": "删除",
        "isDisabled": false,
        "isLeaf": true
      },
      {
        "key": "3f816268-62bb-416f-a6bb-69262a3a6b3e",
        "title": "更新",
        "isDisabled": false,
        "isLeaf": true
      }
    ]
  },
  {
    "key": "71a91db2-5c63-4b54-ac1b-1b55910e2771",
    "title": "常用组件",
    "isLeaf": false,
    "children": [
      {
        "key": "a5a5b265-01b4-4ea1-94df-9fa7099c95e6",
        "title": "引导页",
        "isLeaf": false,
        "children": [
          {
            "key": "80053af1-af76-44fd-ad9a-3e1ce3d9ce44",
            "title": "删除",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "5e11676d-44cb-40d1-b960-7b7474eeae8d",
            "title": "获取",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "4561e91e-c26f-4a61-af17-3b4f423f7bcf",
            "title": "更新",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "303a63db-b4e5-4698-b173-1875e1279114",
            "title": "新增",
            "isDisabled": false,
            "isLeaf": true
          }
        ]
      },
      {
        "key": "0d78a469-2787-4ab7-8894-ef08341097d3",
        "title": "标签页操作",
        "isLeaf": false,
        "children": [
          {
            "key": "be36ae22-24b5-4f32-9ba2-7cb904c5cb4b",
            "title": "更新",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "ed511372-cbbc-4094-838e-96a0177b033c",
            "title": "删除",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "2f79621c-2a4d-4232-9205-12cc74164133",
            "title": "获取",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "19d5d0cc-2a41-424a-9600-e852c1a22ba7",
            "title": "新增",
            "isDisabled": false,
            "isLeaf": true
          }
        ]
      },
      {
        "key": "e88ec72b-1add-471a-bd4c-5018bb001ba2",
        "title": "图标选择器",
        "isLeaf": false,
        "children": [
          {
            "key": "37589b01-bdce-41a3-903a-f343fcff8894",
            "title": "新增",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "acd0f07e-939c-4562-b8db-1ffe4bec0c5b",
            "title": "删除",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "e3fcdf6c-dc1e-4fc9-9456-dc11e966f77d",
            "title": "获取",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "46d08551-4dc7-4035-be41-94502ca0df85",
            "title": "更新",
            "isDisabled": false,
            "isLeaf": true
          }
        ]
      },
      {
        "key": "9d23f108-2e5a-4ac8-8828-42efef9e3492",
        "title": "分类筛选器",
        "isLeaf": false,
        "children": [
          {
            "key": "8ebcb548-c5a1-4996-8b7d-042cbbed3872",
            "title": "删除",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "383e1ad7-af03-47c3-a2ca-232bcd7e2d4e",
            "title": "获取",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "c8f668af-dd1f-4b07-8741-6e5451427a80",
            "title": "更新",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "b805b069-3f46-4742-be9c-5afc3386bf3c",
            "title": "新增",
            "isDisabled": false,
            "isLeaf": true
          }
        ]
      },
      {
        "key": "8f277f94-35d2-475a-9fa5-3c6a92b38aea",
        "title": "SVG 图标",
        "isLeaf": false,
        "children": [
          {
            "key": "183a97cd-8842-48c4-b82c-1c12b8489154",
            "title": "删除",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "034dc5a1-dac1-4ed5-8792-f9cc2f011028",
            "title": "获取",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "d6f65126-8708-4abf-b31e-cd1a82758b92",
            "title": "更新",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "ddfb70a3-4840-45a8-ad3f-3bf7dbed4c70",
            "title": "新增",
            "isDisabled": false,
            "isLeaf": true
          }
        ]
      },
      {
        "key": "807a000b-5611-42ec-be55-2e7ca7cfd0a1",
        "title": "文件上传",
        "isLeaf": false,
        "children": [
          {
            "key": "2a2a5092-b76a-4a89-a3de-affa2177b5d5",
            "title": "删除",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "858d6c1b-e038-48a4-ab87-c0fbda54cdb4",
            "title": "获取",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "264d2268-fd2a-4251-a365-c9e50a482a42",
            "title": "更新",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "44fbcd7f-e872-45e3-acdf-a92108e9cd7d",
            "title": "新增",
            "isDisabled": false,
            "isLeaf": true
          }
        ]
      },
      {
        "key": "2d2cd5c8-4765-4956-9ee0-fdd6735b399a",
        "title": "批量添加数据",
        "isLeaf": false,
        "children": [
          {
            "key": "2e8db348-55f1-4ef0-9fc8-0b18b1e50c44",
            "title": "删除",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "49b94e21-5294-4e8a-ad2a-8ba00dab4a13",
            "title": "获取",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "9a1e7129-449e-4f54-8be3-8b48b2743f97",
            "title": "更新",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "16d12f7a-afc7-44c2-a963-f4b958dc0970",
            "title": "新增",
            "isDisabled": false,
            "isLeaf": true
          }
        ]
      },
      {
        "key": "ea9bf214-6945-43c7-9e45-4556c00dcb50",
        "title": "富文本编辑器",
        "isLeaf": false,
        "children": [
          {
            "key": "882d51fc-74cb-4bef-a3a3-900c3cbe146a",
            "title": "删除",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "cbc6a622-75b6-4c65-8707-5e4e86426184",
            "title": "获取",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "c292aee6-a23e-4d43-9e12-b3b1e503afca",
            "title": "更新",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "44b01576-b081-4dc2-985c-de0863bbdec9",
            "title": "新增",
            "isDisabled": false,
            "isLeaf": true
          }
        ]
      },
      {
        "key": "fd3fce04-6448-4d11-a03e-a8d38a24358b",
        "title": "拖拽组件",
        "isLeaf": false,
        "children": [
          {
            "key": "5f168cf5-7e79-4646-b4c0-d6175d072cfd",
            "title": "删除",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "b2d068cf-7c44-4cee-ad3b-3c2a40ee5874",
            "title": "获取",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "40017178-8d31-47b4-98c4-9d7a1bab491b",
            "title": "更新",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "0db1b67c-c431-4cc0-9d33-21139cff55c6",
            "title": "新增",
            "isDisabled": false,
            "isLeaf": true
          }
        ]
      }
    ]
  },
  {
    "key": "196df61f-7af4-47d9-9a31-ae175e82a96e",
    "title": "表单 Form",
    "isLeaf": false,
    "children": [
      {
        "key": "266e6f0a-5f96-4fc7-8ca4-595f58ec0206",
        "title": "超级 Form",
        "isLeaf": false,
        "children": [
          {
            "key": "169e1b6d-da3c-4bfc-ae6e-885a36a2f753",
            "title": "新增",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "293de920-d526-4d48-8ca6-057ca95c3b3c",
            "title": "删除",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "b5f902db-d421-4d0f-b7ae-8c69d128b6d6",
            "title": "获取",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "fa859032-abe6-4fee-ac0b-6d90813c5d64",
            "title": "更新",
            "isDisabled": false,
            "isLeaf": true
          }
        ]
      }
    ]
  },
  {
    "key": "ac4d5a07-52cb-4dd2-8c07-54a0c05bd02a",
    "title": "Echarts",
    "isLeaf": false,
    "children": [
      {
        "key": "d60a4812-7733-484c-91e3-1f6885252628",
        "title": "水型图",
        "isLeaf": false,
        "children": [
          {
            "key": "c45a876e-b5aa-4da6-a82f-74b9e32b1f40",
            "title": "新增",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "e5dd89ca-10af-44ae-a4af-b170e09ff139",
            "title": "删除",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "50588993-4b6f-4b51-abdf-de0a1079940e",
            "title": "获取",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "162fe42d-60f0-4bd0-87d2-4780dab5b436",
            "title": "更新",
            "isDisabled": false,
            "isLeaf": true
          }
        ]
      },
      {
        "key": "e535e13a-d4ad-4d20-9c3f-768c759441d3",
        "title": "柱状图",
        "isLeaf": false,
        "children": [
          {
            "key": "c546f060-1cd1-44b1-bad9-160185f78f12",
            "title": "新增",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "a8b1d8fa-49cf-43df-90ae-afe75d29b32f",
            "title": "删除",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "0a6d995d-c947-424a-ad49-95e61789f450",
            "title": "获取",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "2d65c26f-05b3-4394-8ee0-10d079bd32ea",
            "title": "更新",
            "isDisabled": false,
            "isLeaf": true
          }
        ]
      },
      {
        "key": "55c05f72-c4d2-4271-a72b-b181f054b5cf",
        "title": "折线图",
        "isLeaf": false,
        "children": [
          {
            "key": "3e5182b2-e784-4154-8115-a49a3f274736",
            "title": "新增",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "318b4fce-6b6d-4c61-9726-8721c0a2d558",
            "title": "删除",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "df34fdda-7987-41b0-bf70-03a675d7d50a",
            "title": "获取",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "e6537fe7-0441-418c-a0fb-60601967a829",
            "title": "更新",
            "isDisabled": false,
            "isLeaf": true
          }
        ]
      },
      {
        "key": "535a382d-1254-4d0d-9229-f4cf3c00633a",
        "title": "饼图",
        "isLeaf": false,
        "children": [
          {
            "key": "fc13232d-b25f-488b-ba6a-5bbae2a3687c",
            "title": "新增",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "f44fad90-58fc-4ce4-bfef-d2bd6d97a6b3",
            "title": "删除",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "24d91ce2-b6d5-4094-9ea8-aac61915d473",
            "title": "获取",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "ef7826a0-bbf3-4b96-9f7a-3b4a3e7255f5",
            "title": "更新",
            "isDisabled": false,
            "isLeaf": true
          }
        ]
      },
      {
        "key": "e6bc3814-f85b-424e-9f34-36858f2cd713",
        "title": "雷达图",
        "isLeaf": false,
        "children": [
          {
            "key": "ad4b77d3-8c4a-4931-ad4b-a1b7d7ee1efe",
            "title": "新增",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "aab6652f-d67a-4d7a-b9db-cc6a49fcca83",
            "title": "删除",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "2b3f5eca-b5ff-4695-9592-a4737f7ae63a",
            "title": "获取",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "ac477ab1-d605-49d4-a47e-e18814db31d5",
            "title": "更新",
            "isDisabled": false,
            "isLeaf": true
          }
        ]
      },
      {
        "key": "423168b0-bd0b-4644-895d-0ad9ad7ef0aa",
        "title": "嵌套环形图",
        "isLeaf": false,
        "children": [
          {
            "key": "1705b2e5-dc50-452d-a4b1-bd963c7e6dbf",
            "title": "新增",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "c51494cb-331d-46d1-a7e2-9a37f81a7db4",
            "title": "删除",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "77abff49-a393-4f35-8f4f-6409ba81991e",
            "title": "获取",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "81d7311e-6490-4d12-8f56-6ff3a36cfda9",
            "title": "更新",
            "isDisabled": false,
            "isLeaf": true
          }
        ]
      }
    ]
  },
  {
    "key": "63aee301-bbae-4ea9-b0e1-f8e0fccedb07",
    "title": "系统管理",
    "isLeaf": false,
    "children": [
      {
        "key": "8be14ccd-038b-4934-9bc6-2e033e47e146",
        "title": "用户管理",
        "isLeaf": false,
        "children": [
          {
            "key": "f96fdc72-6d59-4f3f-9ae7-ab3257eb5f13",
            "title": "更新",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "f3287a4d-a170-46b8-839d-67db6f262da5",
            "title": "密码修改",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "f4e677be-dfc4-471d-a6c3-66f72316bdfa",
            "title": "查看权限",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "6758d754-6490-46e6-92ce-9921415e212c",
            "title": "配置权限",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "b8bbd138-0c01-4ef0-b684-13fdf3543fdc",
            "title": "新增",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "8bdc92de-37d8-4b12-874d-09855c105d1c",
            "title": "删除",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "1de89315-673b-47ab-b957-7b1df45b8f2a",
            "title": "获取",
            "isDisabled": false,
            "isLeaf": true
          }
        ]
      },
      {
        "key": "7f01f2b5-8f82-41f4-a97d-0a5a6bb019ad",
        "title": "角色管理",
        "isLeaf": false,
        "children": [
          {
            "key": "a143de11-a845-41d2-b152-b5c1e2f8b49b",
            "title": "更新",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "c6c16793-8b32-4d04-a50b-fe7238ea0469",
            "title": "新增",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "451a2c78-0234-4fc3-a69a-1d08b26899ca",
            "title": "删除",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "740dfb97-0d48-4ea3-b0a5-89d0c481a77b",
            "title": "获取",
            "isDisabled": false,
            "isLeaf": true
          }
        ]
      },
      {
        "key": "e8550a1f-0e71-4764-97bf-0a3031043aeb",
        "title": "菜单管理",
        "isLeaf": false,
        "children": [
          {
            "key": "9c3643a9-6a66-4b0c-bdc6-eff5bdf56e36",
            "title": "新增",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "ebc881ac-00ef-407d-a036-d2afcbf6e7dd",
            "title": "删除",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "84b72679-3a8d-4d6f-901f-cc10bd141fd2",
            "title": "获取",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "2cb1737e-29d0-4b75-a7f0-783cbcf6a73f",
            "title": "更新",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "28d05eb1-31ba-4b9c-92eb-a2b3ee81d7e1",
            "title": "权限查看",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "114e2fa9-9b9d-4ef0-88ac-415c842ba3e0",
            "title": "权限修改",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "3464ba4d-2ea7-4af5-a0bd-3e3e13c19685",
            "title": "新增权限",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "313141d7-fe93-44c6-8cac-79f356c69fc1",
            "title": "权限删除",
            "isDisabled": false,
            "isLeaf": true
          }
        ]
      },
      {
        "key": "4488de16-cc9c-4827-a5f5-ec45a34aa39d",
        "title": "字典管理",
        "isLeaf": false,
        "children": [
          {
            "key": "4b2a717b-fdf6-43b9-a12e-a1b41aa80865",
            "title": "新增",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "654eaa6d-a0c9-4530-b623-a7635bd7fc2d",
            "title": "删除",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "8fbd21c7-0ed5-4fb1-9e37-454af564a859",
            "title": "获取",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "2fee542e-3dee-4fa5-b3ad-e20c178410c6",
            "title": "更新",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "4e73dc14-10ca-4949-827d-e2b5a7303ce1",
            "title": "新增详情",
            "isDisabled": false,
            "isLeaf": true
          },
          {
            "key": "ef4e3061-5c11-497f-904d-8d754903c22e",
            "title": "详情操作",
            "isDisabled": false,
            "isLeaf": true
          }
        ]
      }
    ]
  }
]
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称           | 类型     | 必选 | 约束 | 中文名 | 说明 |
| -------------- | -------- | ---- | ---- | ------ | ---- |
| » key          | string   | true | none |        | none |
| » title        | string   | true | none |        | none |
| » isLeaf       | boolean  | true | none |        | none |
| » children     | [object] | true | none |        | none |
| »» key         | string   | true | none |        | none |
| »» title       | string   | true | none |        | none |
| »» isDisabled  | boolean  | true | none |        | none |
| »» isLeaf      | boolean  | true | none |        | none |
| »» children    | [object] | true | none |        | none |
| »»» key        | string   | true | none |        | none |
| »»» title      | string   | true | none |        | none |
| »»» isDisabled | boolean  | true | none |        | none |
| »»» isLeaf     | boolean  | true | none |        | none |

# 数据模型

<h2 id="tocS_Res">Res</h2>

<a id="schemares"></a>
<a id="schema_Res"></a>
<a id="tocSres"></a>
<a id="tocsres"></a>

```json
{
  "data": ["string"],
  "count": 0,
  "page": 0,
  "limit": 0
}
```

Res

### 属性

| 名称  | 类型     | 必选 | 约束 | 中文名   | 说明 |
| ----- | -------- | ---- | ---- | -------- | ---- |
| data  | [string] | true | none | 数据列表 | none |
| count | integer  | true | none | 总数量   | none |
| page  | integer  | true | none | 当前页码 | none |
| limit | integer  | true | none | 每页条数 | none |

<h2 id="tocS_Meta">Meta</h2>

<a id="schemameta"></a>
<a id="schema_Meta"></a>
<a id="tocSmeta"></a>
<a id="tocsmeta"></a>

```json
{
  "icon": "string",
  "isAffix": true,
  "isFull": true,
  "isHide": true,
  "isKeepAlive": true,
  "isLink": "string",
  "title": "string"
}
```

Meta

### 属性

| 名称        | 类型    | 必选 | 约束 | 中文名                   | 说明                   |
| ----------- | ------- | ---- | ---- | ------------------------ | ---------------------- | --- | ---------- |
| icon        | string  | true | none | 菜单和面包屑对应的图标   | none                   |
| isAffix     | boolean | true | none | 菜单是否固定在标签页中   | 首页通常是固定项       |
| isFull      | boolean | true | none | 菜单是否全屏             | 示例：数据大屏页面     |
| isHide      | boolean | true | none | 是否在菜单中隐藏         | 通常列表详情页需要隐藏 |
| isKeepAlive | boolean | true | none | 当前路由是否缓存         | none                   |
| isLink      | string  | true | none | 路由外链时填写的访问地址 | none                   |
| title       | string  | true | none | 路由标题                 | 用作 document.title    |     | 菜单的名称 |

<h2 id="tocS_DictDetail">DictDetail</h2>

<a id="schemadictdetail"></a>
<a id="schema_DictDetail"></a>
<a id="tocSdictdetail"></a>
<a id="tocsdictdetail"></a>

```json
{
  "id": "string",
  "createTime": "string",
  "updateTime": "string",
  "deletedTime": "string",
  "label": "string",
  "sort": 0,
  "value": "string",
  "disabled": true,
  "hide": true,
  "remark": "string",
  "dict": {
    "id": "string",
    "createTime": "string",
    "updateTime": "string",
    "deletedTime": "string",
    "key": "string",
    "name": "string",
    "forbidden": true,
    "remark": "string",
    "detail": [
      {
        "id": "string",
        "createTime": "string",
        "updateTime": "string",
        "deletedTime": "string",
        "label": "string",
        "sort": 0,
        "value": "string",
        "disabled": true,
        "hide": true,
        "remark": "string",
        "dict": {}
      }
    ]
  }
}
```

DictDetail

### 属性

| 名称        | 类型                | 必选 | 约束 | 中文名       | 说明         |
| ----------- | ------------------- | ---- | ---- | ------------ | ------------ |
| id          | string              | true | none | 主键编码     | none         |
| createTime  | string              | true | none | 创建时间     | none         |
| updateTime  | string              | true | none | 更改时间     | none         |
| deletedTime | string¦null         | true | none | 删除时间     | none         |
| label       | string              | true | none | 展示标签     | none         |
| sort        | integer             | true | none | 排序         | none         |
| value       | string              | true | none | 展示值       | none         |
| disabled    | boolean             | true | none | 是否禁用     | none         |
| hide        | boolean             | true | none | 是否隐藏该项 | none         |
| remark      | string¦null         | true | none | 备注         | none         |
| dict        | [Dict](#schemadict) | true | none | 字典         | 属于哪个字典 |

<h2 id="tocS_Dict">Dict</h2>

<a id="schemadict"></a>
<a id="schema_Dict"></a>
<a id="tocSdict"></a>
<a id="tocsdict"></a>

```json
{
  "id": "string",
  "createTime": "string",
  "updateTime": "string",
  "deletedTime": "string",
  "key": "string",
  "name": "string",
  "forbidden": true,
  "remark": "string",
  "detail": [
    {
      "id": "string",
      "createTime": "string",
      "updateTime": "string",
      "deletedTime": "string",
      "label": "string",
      "sort": 0,
      "value": "string",
      "disabled": true,
      "hide": true,
      "remark": "string",
      "dict": {
        "id": "string",
        "createTime": "string",
        "updateTime": "string",
        "deletedTime": "string",
        "key": "string",
        "name": "string",
        "forbidden": true,
        "remark": "string",
        "detail": [null]
      }
    }
  ]
}
```

Dict

### 属性

| 名称        | 类型        | 必选 | 约束 | 中文名       | 说明 |
| ----------- | ----------- | ---- | ---- | ------------ | ---- |
| id          | string      | true | none | 主键编码     | none |
| createTime  | string      | true | none | 创建时间     | none |
| updateTime  | string      | true | none | 更改时间     | none |
| deletedTime | string¦null | true | none | 删除时间     | none |
| key         | string      | true | none | 字典唯一 key | none |
| name        | string      | true | none | 字典名称     | none |
| forbidden   | boolean     | true | none | 是否禁用     | none |
| remark      | string¦null | true | none | 备注         | none |
| detail      | [anyOf]     | true | none | 字典详情     | none |

anyOf

| 名称          | 类型                            | 必选  | 约束 | 中文名 | 说明 |
| ------------- | ------------------------------- | ----- | ---- | ------ | ---- |
| » _anonymous_ | [DictDetail](#schemadictdetail) | false | none |        | none |

or

| 名称          | 类型 | 必选  | 约束 | 中文名 | 说明 |
| ------------- | ---- | ----- | ---- | ------ | ---- |
| » _anonymous_ | null | false | none |        | none |

<h2 id="tocS_Menu">Menu</h2>

<a id="schemamenu"></a>
<a id="schema_Menu"></a>
<a id="tocSmenu"></a>
<a id="tocsmenu"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "title": "主键编码"
    },
    "createTime": {
      "type": "string",
      "title": "创建时间"
    },
    "updateTime": {
      "type": "string",
      "title": "更改时间"
    },
    "deletedTime": {
      "type": "string",
      "title": "删除时间",
      "nullable": true
    },
    "path": {
      "type": "string",
      "title": "路由访问路径"
    },
    "name": {
      "type": "string",
      "title": "路由 name",
      "description": "对应页面组件 name, 可用作 KeepAlive 缓存标识 && 按钮权限筛选"
    },
    "redirect": {
      "type": "string",
      "title": "路由重定向地址",
      "nullable": true
    },
    "component": {
      "type": "string",
      "title": "视图文件路径",
      "nullable": true
    },
    "icon": {
      "type": "string",
      "title": "菜单和面包屑对应的图标",
      "nullable": true
    },
    "title": {
      "type": "string",
      "title": "路由标题",
      "description": "用作 document.title || 菜单的名称"
    },
    "activeMenu": {
      "type": "string",
      "title": "是否在菜单中隐藏, 需要高亮的 path",
      "description": "通常用作详情页高亮父级菜单",
      "nullable": true
    },
    "isLink": {
      "type": "string",
      "title": "路由外链时填写的访问地址",
      "nullable": true
    },
    "isHide": {
      "type": "boolean",
      "title": "是否在菜单中隐藏",
      "description": "通常列表详情页需要隐藏"
    },
    "isFull": {
      "type": "boolean",
      "title": "菜单是否全屏",
      "description": "示例：数据大屏页面"
    },
    "isAffix": {
      "type": "boolean",
      "title": "菜单是否固定在标签页中",
      "description": "首页通常是固定项"
    },
    "isKeepAlive": {
      "type": "boolean",
      "title": "当前路由是否缓存固定在标签页中"
    },
    "sort": {
      "type": "integer",
      "title": "序号"
    },
    "remark": {
      "type": "string",
      "title": "备注",
      "nullable": true
    },
    "isLeaf": {
      "type": "boolean",
      "title": "是否叶子菜单"
    },
    "children": {
      "type": "string",
      "items": {
        "anyOf": [
          {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "title": "主键编码"
              },
              "createTime": {
                "type": "string",
                "title": "创建时间"
              },
              "updateTime": {
                "type": "string",
                "title": "更改时间"
              },
              "deletedTime": {
                "type": "string",
                "title": "删除时间",
                "nullable": true
              },
              "path": {
                "type": "string",
                "title": "路由访问路径"
              },
              "name": {
                "type": "string",
                "title": "路由 name",
                "description": "对应页面组件 name, 可用作 KeepAlive 缓存标识 && 按钮权限筛选"
              },
              "redirect": {
                "type": "string",
                "title": "路由重定向地址",
                "nullable": true
              },
              "component": {
                "type": "string",
                "title": "视图文件路径",
                "nullable": true
              },
              "icon": {
                "type": "string",
                "title": "菜单和面包屑对应的图标",
                "nullable": true
              },
              "title": {
                "type": "string",
                "title": "路由标题",
                "description": "用作 document.title || 菜单的名称"
              },
              "activeMenu": {
                "type": "string",
                "title": "是否在菜单中隐藏, 需要高亮的 path",
                "description": "通常用作详情页高亮父级菜单",
                "nullable": true
              },
              "isLink": {
                "type": "string",
                "title": "路由外链时填写的访问地址",
                "nullable": true
              },
              "isHide": {
                "type": "boolean",
                "title": "是否在菜单中隐藏",
                "description": "通常列表详情页需要隐藏"
              },
              "isFull": {
                "type": "boolean",
                "title": "菜单是否全屏",
                "description": "示例：数据大屏页面"
              },
              "isAffix": {
                "type": "boolean",
                "title": "菜单是否固定在标签页中",
                "description": "首页通常是固定项"
              },
              "isKeepAlive": {
                "type": "boolean",
                "title": "当前路由是否缓存固定在标签页中"
              },
              "sort": {
                "type": "integer",
                "title": "序号"
              },
              "remark": {
                "type": "string",
                "title": "备注",
                "nullable": true
              },
              "isLeaf": {
                "type": "boolean",
                "title": "是否叶子菜单"
              },
              "children": {
                "type": "string",
                "items": {
                  "anyOf": ["[Object]", "[Object]"]
                },
                "title": "子菜单",
                "nullable": true
              },
              "parent": {
                "title": "父级菜单",
                "anyOf": [
                  {
                    "type": "object",
                    "properties": "[Object]",
                    "title": "Menu",
                    "x-apifox-orders": "[Object]",
                    "required": "[Object]",
                    "x-apifox-refs": "[Object]",
                    "x-apifox-ignore-properties": "[Object]",
                    "x-apifox-folder": "菜单"
                  },
                  {
                    "type": "null"
                  }
                ],
                "type": ["string", "null"]
              },
              "permission": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "id": "[Object]",
                    "createTime": "[Object]",
                    "updateTime": "[Object]",
                    "deletedTime": "[Object]",
                    "name": "[Object]",
                    "code": "[Object]",
                    "method": "[Object]",
                    "path": "[Object]",
                    "forbidden": "[Object]",
                    "menu": "[Object]",
                    "remark": "[Object]"
                  },
                  "title": "Permission",
                  "x-apifox-orders": [
                    "01H45F065J0VM047QVFMVAGTVS",
                    "name",
                    "code",
                    "method",
                    "path",
                    "forbidden",
                    "menu",
                    "remark"
                  ],
                  "required": [
                    "name",
                    "code",
                    "method",
                    "path",
                    "forbidden",
                    "menu",
                    "remark",
                    "id",
                    "createTime",
                    "updateTime",
                    "deletedTime"
                  ],
                  "x-apifox-refs": {
                    "01H45F065J0VM047QVFMVAGTVS": "[Object]"
                  },
                  "x-apifox-ignore-properties": ["id", "createTime", "updateTime", "deletedTime"],
                  "x-apifox-folder": "权限",
                  "anyOf": ["[Object]", "[Object]"]
                },
                "title": "菜单权限"
              }
            },
            "title": "Menu",
            "x-apifox-orders": [
              "01H45FSN54YM3EWDS2NKJN4MN1",
              "path",
              "name",
              "redirect",
              "component",
              "icon",
              "title",
              "activeMenu",
              "isLink",
              "isHide",
              "isFull",
              "isAffix",
              "isKeepAlive",
              "sort",
              "remark",
              "isLeaf",
              "children",
              "parent",
              "permission"
            ],
            "required": [
              "path",
              "name",
              "redirect",
              "component",
              "icon",
              "title",
              "activeMenu",
              "isLink",
              "isHide",
              "isFull",
              "isKeepAlive",
              "sort",
              "remark",
              "isLeaf",
              "children",
              "parent",
              "permission",
              "isAffix",
              "id",
              "createTime",
              "updateTime",
              "deletedTime"
            ],
            "x-apifox-refs": {
              "01H45FSN54YM3EWDS2NKJN4MN1": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string",
                    "title": "主键编码"
                  },
                  "createTime": {
                    "type": "string",
                    "title": "创建时间"
                  },
                  "updateTime": {
                    "type": "string",
                    "title": "更改时间"
                  },
                  "deletedTime": {
                    "type": "string",
                    "title": "删除时间",
                    "nullable": true
                  }
                },
                "title": "BaseEntity",
                "x-apifox-orders": ["id", "createTime", "updateTime", "deletedTime"],
                "required": ["id", "createTime", "updateTime", "deletedTime"],
                "x-apifox-ignore-properties": [],
                "x-apifox-folder": ""
              }
            },
            "x-apifox-ignore-properties": ["id", "createTime", "updateTime", "deletedTime"],
            "x-apifox-folder": "菜单"
          },
          {
            "type": "null"
          }
        ]
      },
      "title": "子菜单",
      "nullable": true
    },
    "parent": {
      "title": "父级菜单",
      "anyOf": [
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "title": "主键编码"
            },
            "createTime": {
              "type": "string",
              "title": "创建时间"
            },
            "updateTime": {
              "type": "string",
              "title": "更改时间"
            },
            "deletedTime": {
              "type": "string",
              "title": "删除时间",
              "nullable": true
            },
            "path": {
              "type": "string",
              "title": "路由访问路径"
            },
            "name": {
              "type": "string",
              "title": "路由 name",
              "description": "对应页面组件 name, 可用作 KeepAlive 缓存标识 && 按钮权限筛选"
            },
            "redirect": {
              "type": "string",
              "title": "路由重定向地址",
              "nullable": true
            },
            "component": {
              "type": "string",
              "title": "视图文件路径",
              "nullable": true
            },
            "icon": {
              "type": "string",
              "title": "菜单和面包屑对应的图标",
              "nullable": true
            },
            "title": {
              "type": "string",
              "title": "路由标题",
              "description": "用作 document.title || 菜单的名称"
            },
            "activeMenu": {
              "type": "string",
              "title": "是否在菜单中隐藏, 需要高亮的 path",
              "description": "通常用作详情页高亮父级菜单",
              "nullable": true
            },
            "isLink": {
              "type": "string",
              "title": "路由外链时填写的访问地址",
              "nullable": true
            },
            "isHide": {
              "type": "boolean",
              "title": "是否在菜单中隐藏",
              "description": "通常列表详情页需要隐藏"
            },
            "isFull": {
              "type": "boolean",
              "title": "菜单是否全屏",
              "description": "示例：数据大屏页面"
            },
            "isAffix": {
              "type": "boolean",
              "title": "菜单是否固定在标签页中",
              "description": "首页通常是固定项"
            },
            "isKeepAlive": {
              "type": "boolean",
              "title": "当前路由是否缓存固定在标签页中"
            },
            "sort": {
              "type": "integer",
              "title": "序号"
            },
            "remark": {
              "type": "string",
              "title": "备注",
              "nullable": true
            },
            "isLeaf": {
              "type": "boolean",
              "title": "是否叶子菜单"
            },
            "children": {
              "type": "string",
              "items": {
                "anyOf": [
                  {
                    "type": "object",
                    "properties": "[Object]",
                    "title": "Menu",
                    "x-apifox-orders": "[Object]",
                    "required": "[Object]",
                    "x-apifox-refs": "[Object]",
                    "x-apifox-ignore-properties": "[Object]",
                    "x-apifox-folder": "菜单"
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "title": "子菜单",
              "nullable": true
            },
            "parent": {
              "title": "父级菜单",
              "anyOf": [
                {
                  "type": "object",
                  "properties": {
                    "id": "[Object]",
                    "createTime": "[Object]",
                    "updateTime": "[Object]",
                    "deletedTime": "[Object]",
                    "path": "[Object]",
                    "name": "[Object]",
                    "redirect": "[Object]",
                    "component": "[Object]",
                    "icon": "[Object]",
                    "title": "[Object]",
                    "activeMenu": "[Object]",
                    "isLink": "[Object]",
                    "isHide": "[Object]",
                    "isFull": "[Object]",
                    "isAffix": "[Object]",
                    "isKeepAlive": "[Object]",
                    "sort": "[Object]",
                    "remark": "[Object]",
                    "isLeaf": "[Object]",
                    "children": "[Object]",
                    "parent": "[Object]",
                    "permission": "[Object]"
                  },
                  "title": "Menu",
                  "x-apifox-orders": [
                    "01H45FSN54YM3EWDS2NKJN4MN1",
                    "path",
                    "name",
                    "redirect",
                    "component",
                    "icon",
                    "title",
                    "activeMenu",
                    "isLink",
                    "isHide",
                    "isFull",
                    "isAffix",
                    "isKeepAlive",
                    "sort",
                    "remark",
                    "isLeaf",
                    "children",
                    "parent",
                    "permission"
                  ],
                  "required": [
                    "path",
                    "name",
                    "redirect",
                    "component",
                    "icon",
                    "title",
                    "activeMenu",
                    "isLink",
                    "isHide",
                    "isFull",
                    "isKeepAlive",
                    "sort",
                    "remark",
                    "isLeaf",
                    "children",
                    "parent",
                    "permission",
                    "isAffix",
                    "id",
                    "createTime",
                    "updateTime",
                    "deletedTime"
                  ],
                  "x-apifox-refs": {
                    "01H45FSN54YM3EWDS2NKJN4MN1": "[Object]"
                  },
                  "x-apifox-ignore-properties": ["id", "createTime", "updateTime", "deletedTime"],
                  "x-apifox-folder": "菜单"
                },
                {
                  "type": "null"
                }
              ],
              "type": ["string", "null"]
            },
            "permission": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string",
                    "title": "主键编码"
                  },
                  "createTime": {
                    "type": "string",
                    "title": "创建时间"
                  },
                  "updateTime": {
                    "type": "string",
                    "title": "更改时间"
                  },
                  "deletedTime": {
                    "type": "string",
                    "title": "删除时间",
                    "nullable": true
                  },
                  "name": {
                    "type": "string",
                    "title": "权限名"
                  },
                  "code": {
                    "type": "string",
                    "title": "权限代码"
                  },
                  "method": {
                    "type": "string",
                    "title": "API请求头",
                    "enum": "[Object]",
                    "x-apifox": "[Object]",
                    "nullable": true
                  },
                  "path": {
                    "type": "string",
                    "title": "API请求地址",
                    "nullable": true
                  },
                  "forbidden": {
                    "type": "boolean",
                    "title": "是否禁用"
                  },
                  "menu": {
                    "type": "string",
                    "title": "所属菜单"
                  },
                  "remark": {
                    "type": "string",
                    "title": "备注",
                    "nullable": true
                  }
                },
                "title": "Permission",
                "x-apifox-orders": [
                  "01H45F065J0VM047QVFMVAGTVS",
                  "name",
                  "code",
                  "method",
                  "path",
                  "forbidden",
                  "menu",
                  "remark"
                ],
                "required": [
                  "name",
                  "code",
                  "method",
                  "path",
                  "forbidden",
                  "menu",
                  "remark",
                  "id",
                  "createTime",
                  "updateTime",
                  "deletedTime"
                ],
                "x-apifox-refs": {
                  "01H45F065J0VM047QVFMVAGTVS": {
                    "type": "object",
                    "properties": "[Object]",
                    "title": "BaseEntity",
                    "x-apifox-orders": "[Object]",
                    "required": "[Object]",
                    "x-apifox-ignore-properties": "[Object]",
                    "x-apifox-folder": ""
                  }
                },
                "x-apifox-ignore-properties": ["id", "createTime", "updateTime", "deletedTime"],
                "x-apifox-folder": "权限",
                "anyOf": [
                  {
                    "$ref": "#/definitions/50697372"
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "title": "菜单权限"
            }
          },
          "title": "Menu",
          "x-apifox-orders": [
            "01H45FSN54YM3EWDS2NKJN4MN1",
            "path",
            "name",
            "redirect",
            "component",
            "icon",
            "title",
            "activeMenu",
            "isLink",
            "isHide",
            "isFull",
            "isAffix",
            "isKeepAlive",
            "sort",
            "remark",
            "isLeaf",
            "children",
            "parent",
            "permission"
          ],
          "required": [
            "path",
            "name",
            "redirect",
            "component",
            "icon",
            "title",
            "activeMenu",
            "isLink",
            "isHide",
            "isFull",
            "isKeepAlive",
            "sort",
            "remark",
            "isLeaf",
            "children",
            "parent",
            "permission",
            "isAffix",
            "id",
            "createTime",
            "updateTime",
            "deletedTime"
          ],
          "x-apifox-refs": {
            "01H45FSN54YM3EWDS2NKJN4MN1": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string",
                  "title": "主键编码"
                },
                "createTime": {
                  "type": "string",
                  "title": "创建时间"
                },
                "updateTime": {
                  "type": "string",
                  "title": "更改时间"
                },
                "deletedTime": {
                  "type": "string",
                  "title": "删除时间",
                  "nullable": true
                }
              },
              "title": "BaseEntity",
              "x-apifox-orders": ["id", "createTime", "updateTime", "deletedTime"],
              "required": ["id", "createTime", "updateTime", "deletedTime"],
              "x-apifox-ignore-properties": [],
              "x-apifox-folder": ""
            }
          },
          "x-apifox-ignore-properties": ["id", "createTime", "updateTime", "deletedTime"],
          "x-apifox-folder": "菜单"
        },
        {
          "type": "null"
        }
      ],
      "type": ["string", "null"]
    },
    "permission": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "title": "主键编码"
          },
          "createTime": {
            "type": "string",
            "title": "创建时间"
          },
          "updateTime": {
            "type": "string",
            "title": "更改时间"
          },
          "deletedTime": {
            "type": "string",
            "title": "删除时间",
            "nullable": true
          },
          "name": {
            "type": "string",
            "title": "权限名"
          },
          "code": {
            "type": "string",
            "title": "权限代码"
          },
          "method": {
            "type": "string",
            "title": "API请求头",
            "enum": ["post", "patch", "get", "delete"],
            "x-apifox": {
              "enumDescriptions": {
                "post": "post",
                "patch": "patch",
                "get": "get",
                "delete": "delete"
              }
            },
            "nullable": true
          },
          "path": {
            "type": "string",
            "title": "API请求地址",
            "nullable": true
          },
          "forbidden": {
            "type": "boolean",
            "title": "是否禁用"
          },
          "menu": {
            "type": "string",
            "title": "所属菜单"
          },
          "remark": {
            "type": "string",
            "title": "备注",
            "nullable": true
          }
        },
        "title": "Permission",
        "x-apifox-orders": [
          "01H45F065J0VM047QVFMVAGTVS",
          "name",
          "code",
          "method",
          "path",
          "forbidden",
          "menu",
          "remark"
        ],
        "required": [
          "name",
          "code",
          "method",
          "path",
          "forbidden",
          "menu",
          "remark",
          "id",
          "createTime",
          "updateTime",
          "deletedTime"
        ],
        "x-apifox-refs": {
          "01H45F065J0VM047QVFMVAGTVS": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "title": "主键编码"
              },
              "createTime": {
                "type": "string",
                "title": "创建时间"
              },
              "updateTime": {
                "type": "string",
                "title": "更改时间"
              },
              "deletedTime": {
                "type": "string",
                "title": "删除时间",
                "nullable": true
              }
            },
            "title": "BaseEntity",
            "x-apifox-orders": ["id", "createTime", "updateTime", "deletedTime"],
            "required": ["id", "createTime", "updateTime", "deletedTime"],
            "x-apifox-ignore-properties": [],
            "x-apifox-folder": ""
          }
        },
        "x-apifox-ignore-properties": ["id", "createTime", "updateTime", "deletedTime"],
        "x-apifox-folder": "权限",
        "anyOf": [
          {
            "$ref": "#/definitions/50697372"
          },
          {
            "type": "null"
          }
        ]
      },
      "title": "菜单权限"
    }
  },
  "title": "Menu",
  "x-apifox-orders": [
    "01H45FSN54YM3EWDS2NKJN4MN1",
    "path",
    "name",
    "redirect",
    "component",
    "icon",
    "title",
    "activeMenu",
    "isLink",
    "isHide",
    "isFull",
    "isAffix",
    "isKeepAlive",
    "sort",
    "remark",
    "isLeaf",
    "children",
    "parent",
    "permission"
  ],
  "required": [
    "path",
    "name",
    "redirect",
    "component",
    "icon",
    "title",
    "activeMenu",
    "isLink",
    "isHide",
    "isFull",
    "isKeepAlive",
    "sort",
    "remark",
    "isLeaf",
    "children",
    "parent",
    "permission",
    "isAffix",
    "id",
    "createTime",
    "updateTime",
    "deletedTime"
  ],
  "x-apifox-refs": {
    "01H45FSN54YM3EWDS2NKJN4MN1": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "title": "主键编码"
        },
        "createTime": {
          "type": "string",
          "title": "创建时间"
        },
        "updateTime": {
          "type": "string",
          "title": "更改时间"
        },
        "deletedTime": {
          "type": "string",
          "title": "删除时间",
          "nullable": true
        }
      },
      "title": "BaseEntity",
      "x-apifox-orders": ["id", "createTime", "updateTime", "deletedTime"],
      "required": ["id", "createTime", "updateTime", "deletedTime"],
      "x-apifox-ignore-properties": [],
      "x-apifox-folder": ""
    }
  },
  "x-apifox-ignore-properties": ["id", "createTime", "updateTime", "deletedTime"],
  "x-apifox-folder": "菜单"
}
```

Menu

### 属性

| 名称        | 类型        | 必选 | 约束 | 中文名                            | 说明                                                         |
| ----------- | ----------- | ---- | ---- | --------------------------------- | ------------------------------------------------------------ | --- | ---------- |
| id          | string      | true | none | 主键编码                          | none                                                         |
| createTime  | string      | true | none | 创建时间                          | none                                                         |
| updateTime  | string      | true | none | 更改时间                          | none                                                         |
| deletedTime | string¦null | true | none | 删除时间                          | none                                                         |
| path        | string      | true | none | 路由访问路径                      | none                                                         |
| name        | string      | true | none | 路由 name                         | 对应页面组件 name, 可用作 KeepAlive 缓存标识 && 按钮权限筛选 |
| redirect    | string¦null | true | none | 路由重定向地址                    | none                                                         |
| component   | string¦null | true | none | 视图文件路径                      | none                                                         |
| icon        | string¦null | true | none | 菜单和面包屑对应的图标            | none                                                         |
| title       | string      | true | none | 路由标题                          | 用作 document.title                                          |     | 菜单的名称 |
| activeMenu  | string¦null | true | none | 是否在菜单中隐藏, 需要高亮的 path | 通常用作详情页高亮父级菜单                                   |
| isLink      | string¦null | true | none | 路由外链时填写的访问地址          | none                                                         |
| isHide      | boolean     | true | none | 是否在菜单中隐藏                  | 通常列表详情页需要隐藏                                       |
| isFull      | boolean     | true | none | 菜单是否全屏                      | 示例：数据大屏页面                                           |
| isAffix     | boolean     | true | none | 菜单是否固定在标签页中            | 首页通常是固定项                                             |
| isKeepAlive | boolean     | true | none | 当前路由是否缓存固定在标签页中    | none                                                         |
| sort        | integer     | true | none | 序号                              | none                                                         |
| remark      | string¦null | true | none | 备注                              | none                                                         |
| isLeaf      | boolean     | true | none | 是否叶子菜单                      | none                                                         |
| children    | string¦null | true | none | 子菜单                            | none                                                         |

anyOf

| 名称          | 类型                | 必选  | 约束 | 中文名 | 说明 |
| ------------- | ------------------- | ----- | ---- | ------ | ---- |
| » _anonymous_ | [Menu](#schemamenu) | false | none |        | none |

or

| 名称          | 类型 | 必选  | 约束 | 中文名 | 说明 |
| ------------- | ---- | ----- | ---- | ------ | ---- |
| » _anonymous_ | null | false | none |        | none |

continued

| 名称   | 类型        | 必选 | 约束 | 中文名   | 说明 |
| ------ | ----------- | ---- | ---- | -------- | ---- |
| parent | string,null | true | none | 父级菜单 | none |

anyOf

| 名称          | 类型                | 必选  | 约束 | 中文名 | 说明 |
| ------------- | ------------------- | ----- | ---- | ------ | ---- |
| » _anonymous_ | [Menu](#schemamenu) | false | none |        | none |

or

| 名称          | 类型 | 必选  | 约束 | 中文名 | 说明 |
| ------------- | ---- | ----- | ---- | ------ | ---- |
| » _anonymous_ | null | false | none |        | none |

continued

| 名称       | 类型    | 必选 | 约束 | 中文名   | 说明 |
| ---------- | ------- | ---- | ---- | -------- | ---- |
| permission | [anyOf] | true | none | 菜单权限 | none |

<h2 id="tocS_Permission">Permission</h2>

<a id="schemapermission"></a>
<a id="schema_Permission"></a>
<a id="tocSpermission"></a>
<a id="tocspermission"></a>

```json
{
  "id": "string",
  "createTime": "string",
  "updateTime": "string",
  "deletedTime": "string",
  "name": "string",
  "code": "string",
  "method": "post",
  "path": "string",
  "forbidden": true,
  "menu": "string",
  "remark": "string"
}
```

Permission

### 属性

| 名称        | 类型        | 必选 | 约束 | 中文名       | 说明 |
| ----------- | ----------- | ---- | ---- | ------------ | ---- |
| id          | string      | true | none | 主键编码     | none |
| createTime  | string      | true | none | 创建时间     | none |
| updateTime  | string      | true | none | 更改时间     | none |
| deletedTime | string¦null | true | none | 删除时间     | none |
| name        | string      | true | none | 权限名       | none |
| code        | string      | true | none | 权限代码     | none |
| method      | string¦null | true | none | API 请求头   | none |
| path        | string¦null | true | none | API 请求地址 | none |
| forbidden   | boolean     | true | none | 是否禁用     | none |
| menu        | string      | true | none | 所属菜单     | none |
| remark      | string¦null | true | none | 备注         | none |

#### 枚举值

| 属性   | 值     |
| ------ | ------ |
| method | post   |
| method | patch  |
| method | get    |
| method | delete |

<h2 id="tocS_Role">Role</h2>

<a id="schemarole"></a>
<a id="schema_Role"></a>
<a id="tocSrole"></a>
<a id="tocsrole"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "title": "主键编码"
    },
    "createTime": {
      "type": "string",
      "title": "创建时间"
    },
    "updateTime": {
      "type": "string",
      "title": "更改时间"
    },
    "deletedTime": {
      "type": "string",
      "title": "删除时间",
      "nullable": true
    },
    "name": {
      "type": "string",
      "title": "角色名称"
    },
    "code": {
      "type": "string",
      "title": "角色代码"
    },
    "forbidden": {
      "type": "boolean",
      "title": "是否禁用"
    },
    "remark": {
      "type": "string",
      "title": "角色详情描述",
      "nullable": true
    },
    "permissions": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "title": "主键编码"
          },
          "createTime": {
            "type": "string",
            "title": "创建时间"
          },
          "updateTime": {
            "type": "string",
            "title": "更改时间"
          },
          "deletedTime": {
            "type": "string",
            "title": "删除时间",
            "nullable": true
          },
          "name": {
            "type": "string",
            "title": "权限名"
          },
          "code": {
            "type": "string",
            "title": "权限代码"
          },
          "method": {
            "type": "string",
            "title": "API请求头",
            "enum": ["post", "patch", "get", "delete"],
            "x-apifox": {
              "enumDescriptions": {
                "post": "post",
                "patch": "patch",
                "get": "get",
                "delete": "delete"
              }
            },
            "nullable": true
          },
          "path": {
            "type": "string",
            "title": "API请求地址",
            "nullable": true
          },
          "forbidden": {
            "type": "boolean",
            "title": "是否禁用"
          },
          "menu": {
            "type": "string",
            "title": "所属菜单"
          },
          "remark": {
            "type": "string",
            "title": "备注",
            "nullable": true
          }
        },
        "title": "Permission",
        "x-apifox-orders": [
          "01H45F065J0VM047QVFMVAGTVS",
          "name",
          "code",
          "method",
          "path",
          "forbidden",
          "menu",
          "remark"
        ],
        "required": [
          "name",
          "code",
          "method",
          "path",
          "forbidden",
          "menu",
          "remark",
          "id",
          "createTime",
          "updateTime",
          "deletedTime"
        ],
        "x-apifox-refs": {
          "01H45F065J0VM047QVFMVAGTVS": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "title": "主键编码"
              },
              "createTime": {
                "type": "string",
                "title": "创建时间"
              },
              "updateTime": {
                "type": "string",
                "title": "更改时间"
              },
              "deletedTime": {
                "type": "string",
                "title": "删除时间",
                "nullable": true
              }
            },
            "title": "BaseEntity",
            "x-apifox-orders": ["id", "createTime", "updateTime", "deletedTime"],
            "required": ["id", "createTime", "updateTime", "deletedTime"],
            "x-apifox-ignore-properties": [],
            "x-apifox-folder": ""
          }
        },
        "x-apifox-ignore-properties": ["id", "createTime", "updateTime", "deletedTime"],
        "x-apifox-folder": "权限",
        "anyOf": [
          {
            "$ref": "#/definitions/50697372"
          },
          {
            "type": "null"
          }
        ]
      },
      "title": "权限",
      "nullable": true
    }
  },
  "title": "Role",
  "x-apifox-orders": ["01H45ETS06HPTCAP66DJ102QEA", "name", "code", "forbidden", "remark", "permissions"],
  "required": ["name", "code", "forbidden", "remark", "permissions", "id", "createTime", "updateTime", "deletedTime"],
  "x-apifox-refs": {
    "01H45ETS06HPTCAP66DJ102QEA": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "title": "主键编码"
        },
        "createTime": {
          "type": "string",
          "title": "创建时间"
        },
        "updateTime": {
          "type": "string",
          "title": "更改时间"
        },
        "deletedTime": {
          "type": "string",
          "title": "删除时间",
          "nullable": true
        }
      },
      "title": "BaseEntity",
      "x-apifox-orders": ["id", "createTime", "updateTime", "deletedTime"],
      "required": ["id", "createTime", "updateTime", "deletedTime"],
      "x-apifox-ignore-properties": [],
      "x-apifox-folder": ""
    }
  },
  "x-apifox-ignore-properties": ["id", "createTime", "updateTime", "deletedTime"],
  "x-apifox-folder": "角色"
}
```

Role

### 属性

| 名称        | 类型         | 必选 | 约束 | 中文名       | 说明 |
| ----------- | ------------ | ---- | ---- | ------------ | ---- |
| id          | string       | true | none | 主键编码     | none |
| createTime  | string       | true | none | 创建时间     | none |
| updateTime  | string       | true | none | 更改时间     | none |
| deletedTime | string¦null  | true | none | 删除时间     | none |
| name        | string       | true | none | 角色名称     | none |
| code        | string       | true | none | 角色代码     | none |
| forbidden   | boolean      | true | none | 是否禁用     | none |
| remark      | string¦null  | true | none | 角色详情描述 | none |
| permissions | [anyOf]¦null | true | none | 权限         | none |

<h2 id="tocS_User">User</h2>

<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "title": "主键编码"
    },
    "createTime": {
      "type": "string",
      "title": "创建时间"
    },
    "updateTime": {
      "type": "string",
      "title": "更改时间"
    },
    "deletedTime": {
      "type": "string",
      "title": "删除时间",
      "nullable": true
    },
    "account": {
      "type": "string",
      "title": "账号"
    },
    "name": {
      "type": "string",
      "title": "用户名",
      "nullable": true
    },
    "status": {
      "type": "integer",
      "title": "账号状态",
      "enum": [1, 0],
      "x-apifox": {
        "enumDescriptions": {
          "0": "冻结",
          "1": "正常"
        }
      }
    },
    "password": {
      "type": "string",
      "title": "密码"
    },
    "count": {
      "type": "integer",
      "title": "密码输入错误计数"
    },
    "avatar": {
      "type": "string",
      "title": "头像",
      "nullable": true
    },
    "unit": {
      "type": "string",
      "title": "单位",
      "nullable": true
    },
    "position": {
      "type": "string",
      "title": "职位",
      "nullable": true
    },
    "token": {
      "type": "string",
      "title": "标识验证码",
      "nullable": true
    },
    "isCreatedOrReset": {
      "type": "boolean",
      "title": "新建还是重置"
    },
    "passwordChangTime": {
      "type": "string",
      "title": "上一次修改密码的时间",
      "nullable": true
    },
    "freezeTime": {
      "type": "string",
      "title": "冻结时间",
      "nullable": true
    },
    "remark": {
      "type": "string",
      "title": "备注"
    },
    "roles": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "title": "主键编码"
          },
          "createTime": {
            "type": "string",
            "title": "创建时间"
          },
          "updateTime": {
            "type": "string",
            "title": "更改时间"
          },
          "deletedTime": {
            "type": "string",
            "title": "删除时间",
            "nullable": true
          },
          "name": {
            "type": "string",
            "title": "角色名称"
          },
          "code": {
            "type": "string",
            "title": "角色代码"
          },
          "forbidden": {
            "type": "boolean",
            "title": "是否禁用"
          },
          "remark": {
            "type": "string",
            "title": "角色详情描述",
            "nullable": true
          },
          "permissions": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string",
                  "title": "主键编码"
                },
                "createTime": {
                  "type": "string",
                  "title": "创建时间"
                },
                "updateTime": {
                  "type": "string",
                  "title": "更改时间"
                },
                "deletedTime": {
                  "type": "string",
                  "title": "删除时间",
                  "nullable": true
                },
                "name": {
                  "type": "string",
                  "title": "权限名"
                },
                "code": {
                  "type": "string",
                  "title": "权限代码"
                },
                "method": {
                  "type": "string",
                  "title": "API请求头",
                  "enum": ["post", "patch", "get", "delete"],
                  "x-apifox": {
                    "enumDescriptions": "[Object]"
                  },
                  "nullable": true
                },
                "path": {
                  "type": "string",
                  "title": "API请求地址",
                  "nullable": true
                },
                "forbidden": {
                  "type": "boolean",
                  "title": "是否禁用"
                },
                "menu": {
                  "type": "string",
                  "title": "所属菜单"
                },
                "remark": {
                  "type": "string",
                  "title": "备注",
                  "nullable": true
                }
              },
              "title": "Permission",
              "x-apifox-orders": [
                "01H45F065J0VM047QVFMVAGTVS",
                "name",
                "code",
                "method",
                "path",
                "forbidden",
                "menu",
                "remark"
              ],
              "required": [
                "name",
                "code",
                "method",
                "path",
                "forbidden",
                "menu",
                "remark",
                "id",
                "createTime",
                "updateTime",
                "deletedTime"
              ],
              "x-apifox-refs": {
                "01H45F065J0VM047QVFMVAGTVS": {
                  "type": "object",
                  "properties": {
                    "id": "[Object]",
                    "createTime": "[Object]",
                    "updateTime": "[Object]",
                    "deletedTime": "[Object]"
                  },
                  "title": "BaseEntity",
                  "x-apifox-orders": ["id", "createTime", "updateTime", "deletedTime"],
                  "required": ["id", "createTime", "updateTime", "deletedTime"],
                  "x-apifox-ignore-properties": [],
                  "x-apifox-folder": ""
                }
              },
              "x-apifox-ignore-properties": ["id", "createTime", "updateTime", "deletedTime"],
              "x-apifox-folder": "权限",
              "anyOf": [
                {
                  "$ref": "#/definitions/50697372"
                },
                {
                  "type": "null"
                }
              ]
            },
            "title": "权限",
            "nullable": true
          }
        },
        "title": "Role",
        "x-apifox-orders": ["01H45ETS06HPTCAP66DJ102QEA", "name", "code", "forbidden", "remark", "permissions"],
        "required": [
          "name",
          "code",
          "forbidden",
          "remark",
          "permissions",
          "id",
          "createTime",
          "updateTime",
          "deletedTime"
        ],
        "x-apifox-refs": {
          "01H45ETS06HPTCAP66DJ102QEA": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "title": "主键编码"
              },
              "createTime": {
                "type": "string",
                "title": "创建时间"
              },
              "updateTime": {
                "type": "string",
                "title": "更改时间"
              },
              "deletedTime": {
                "type": "string",
                "title": "删除时间",
                "nullable": true
              }
            },
            "title": "BaseEntity",
            "x-apifox-orders": ["id", "createTime", "updateTime", "deletedTime"],
            "required": ["id", "createTime", "updateTime", "deletedTime"],
            "x-apifox-ignore-properties": [],
            "x-apifox-folder": ""
          }
        },
        "x-apifox-ignore-properties": ["id", "createTime", "updateTime", "deletedTime"],
        "x-apifox-folder": "角色"
      },
      "title": "角色"
    }
  },
  "title": "User",
  "x-apifox-orders": [
    "01H45ECNGSZNEP1HMWQ4A1G143",
    "account",
    "name",
    "status",
    "password",
    "count",
    "avatar",
    "unit",
    "position",
    "token",
    "isCreatedOrReset",
    "passwordChangTime",
    "freezeTime",
    "remark",
    "roles"
  ],
  "required": [
    "account",
    "name",
    "status",
    "password",
    "count",
    "avatar",
    "unit",
    "position",
    "token",
    "isCreatedOrReset",
    "passwordChangTime",
    "freezeTime",
    "remark",
    "roles",
    "id",
    "createTime",
    "updateTime",
    "deletedTime"
  ],
  "x-apifox-refs": {
    "01H45ECNGSZNEP1HMWQ4A1G143": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "title": "主键编码"
        },
        "createTime": {
          "type": "string",
          "title": "创建时间"
        },
        "updateTime": {
          "type": "string",
          "title": "更改时间"
        },
        "deletedTime": {
          "type": "string",
          "title": "删除时间",
          "nullable": true
        }
      },
      "title": "BaseEntity",
      "x-apifox-orders": ["id", "createTime", "updateTime", "deletedTime"],
      "required": ["id", "createTime", "updateTime", "deletedTime"],
      "x-apifox-ignore-properties": [],
      "x-apifox-folder": ""
    }
  },
  "x-apifox-ignore-properties": ["id", "createTime", "updateTime", "deletedTime"],
  "x-apifox-folder": "用户"
}
```

User

### 属性

| 名称              | 类型                  | 必选 | 约束 | 中文名               | 说明 |
| ----------------- | --------------------- | ---- | ---- | -------------------- | ---- |
| id                | string                | true | none | 主键编码             | none |
| createTime        | string                | true | none | 创建时间             | none |
| updateTime        | string                | true | none | 更改时间             | none |
| deletedTime       | string¦null           | true | none | 删除时间             | none |
| account           | string                | true | none | 账号                 | none |
| name              | string¦null           | true | none | 用户名               | none |
| status            | integer               | true | none | 账号状态             | none |
| password          | string                | true | none | 密码                 | none |
| count             | integer               | true | none | 密码输入错误计数     | none |
| avatar            | string¦null           | true | none | 头像                 | none |
| unit              | string¦null           | true | none | 单位                 | none |
| position          | string¦null           | true | none | 职位                 | none |
| token             | string¦null           | true | none | 标识验证码           | none |
| isCreatedOrReset  | boolean               | true | none | 新建还是重置         | none |
| passwordChangTime | string¦null           | true | none | 上一次修改密码的时间 | none |
| freezeTime        | string¦null           | true | none | 冻结时间             | none |
| remark            | string                | true | none | 备注                 | none |
| roles             | [[Role](#schemarole)] | true | none | 角色                 | none |

#### 枚举值

| 属性   | 值  |
| ------ | --- |
| status | 1   |
| status | 0   |

<h2 id="tocS_BaseEntity">BaseEntity</h2>

<a id="schemabaseentity"></a>
<a id="schema_BaseEntity"></a>
<a id="tocSbaseentity"></a>
<a id="tocsbaseentity"></a>

```json
{
  "id": "string",
  "createTime": "string",
  "updateTime": "string",
  "deletedTime": "string"
}
```

BaseEntity

### 属性

| 名称        | 类型        | 必选 | 约束 | 中文名   | 说明 |
| ----------- | ----------- | ---- | ---- | -------- | ---- |
| id          | string      | true | none | 主键编码 | none |
| createTime  | string      | true | none | 创建时间 | none |
| updateTime  | string      | true | none | 更改时间 | none |
| deletedTime | string¦null | true | none | 删除时间 | none |
