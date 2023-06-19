import { CryptoTool } from "./crypto";

export class CacheTool {
  private static accessToken = "access_token";

  /**
   * @description 判断是否过期
   * @param {number} expired 过期时间
   * @returns {boolean}
   */
  static isOverTime(expired: number): boolean {
    const now = new Date().getTime();
    if (expired > 0 && now > expired) {
      return true;
    }
    return false;
  }

  /**
   * 获取过期时间
   * @param expired 过期时间
   * @returns {number}
   */
  static getExpiredTime(expired = 60 * 60 * 24): number {
    return expired * 1000 + new Date().getTime();
  }

  /**
   * 设置token
   * @param token token值
   * @param expired 过期时间（默认一天）
   */
  static setToken(token: string, expired = 60 * 60 * 24) {
    CacheTool.setLocal(CacheTool.accessToken, token, CacheTool.getExpiredTime(expired));
  }

  /**
   * 获取token
   * @returns {string}
   */
  static getToken(): string | null {
    return CacheTool.getLocal(CacheTool.accessToken);
  }

  /**
   *  设置localStorage
   * @param {string} key
   * @param {string} value
   * @param {number}expired 过期时间
   */
  static setLocal(key: string, value: any, expired?: number) {
    const data = {
      value,
      expired: CacheTool.getExpiredTime(expired)
    };
    const result = CryptoTool.sm4Encrypt(data);
    window.localStorage.setItem(key, result);
  }

  /**
   * 根据key获取localStorage
   * @param {string}key
   * @returns
   */
  static getLocal(key: string) {
    const result = window.localStorage.getItem(key);
    const data = CryptoTool.sm4Decrypt((result as string) || "");
    if (data) {
      if (!CacheTool.isOverTime(data?.expired || 0)) {
        return data?.value ? data.value : data;
      }
      CacheTool.deleteLocal(key);
    }
    return null;
  }

  /**
   * 根据key删除localStorage
   * @param key
   */
  static deleteLocal(key: string) {
    window.localStorage.removeItem(key);
  }

  /**
   * 清空localStorage
   */
  static clearLocal() {
    window.localStorage.clear();
  }
}
