// ? Element 常用表单校验规则

class Validate {
  /**
   *  @rule 手机号
   */
  checkPhoneNumber(rule: any, value: any, callback: any) {
    const regexp =
      /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/
    if (value === '') callback('请输入手机号码')
    if (!regexp.test(value)) {
      callback(new Error('请输入正确的手机号码'))
    } else {
      return callback()
    }
  }

  /**
   * 修改密码时检查密码
   *
   * @param val
   * @returns
   */
  checkPassword(rule: any, value: any, callback: any) {
    const regexp = /^[a-zA-Z0-9_-]{4,16}$/
    const msg = '长度大于4且小于16;包含大小写字母、数字、-、_'
    if (value === '') callback('请输入密码')
    if (!regexp.test(value)) {
      callback(new Error(msg))
    } else {
      return callback()
    }
  }

  /**
   * 检查数据编码录入规则
   *
   * @param val
   * @returns
   */
  checkCode(rule: any, value: any, callback: any) {
    const regexp = /^[a-zA-Z0-9_-]{2,20}$/
    const msg = '长度2到20，大小写字母、数字、“_”、“-”'
    if (value === '') callback('请输入数据编码')
    if (!regexp.test(value)) {
      callback(new Error(msg))
    } else {
      return callback()
    }
  }

  /**
   * 检查数据名称录入规则
   *
   * @param val
   * @returns
   */
  checkName(rule: any, value: any, callback: any) {
    const regexp = /^[A-z0-9\u4e00-\u9fa5]{1,10}$/
    const msg = '长度1到10，只能中文、数字和字母'
    if (value === '') callback('请输入数据名称')
    if (!regexp.test(value)) {
      callback(new Error(msg))
    } else {
      return callback()
    }
  }

  /**
   * 检查数据地址（路由和接口）录入规则
   *
   * @param val
   * @returns
   */
  checkPath(rule: any, value: any, callback: any) {
    const regexp = /^[/][a-zA-Z/]{1,}$/
    const msg = '必须以/开头，且只能包含大小写字母'
    if (value && !regexp.test(value)) {
      callback(new Error(msg))
    } else {
      return callback()
    }
  }
}

export default new Validate()
