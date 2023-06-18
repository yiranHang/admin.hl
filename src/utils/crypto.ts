import { SM4 } from "gm-crypto";

export class CryptoTool {
  private static key = "DF1F3A30A5D28D5641443050DE662D7F";
  /**
   * SM4 加密
   */
  static sm4Encrypt(val: string | number | Object) {
    return SM4.encrypt(JSON.stringify(val), this.key, {
      inputEncoding: "utf-8",
      outputEncoding: "hex"
    });
  }

  /**
   * SM4 解密
   */
  static sm4Decrypt(val: string) {
    if (!val?.trim()) return val;
    const data = SM4.decrypt(val, this.key, {
      inputEncoding: "hex",
      outputEncoding: "utf-8"
    });
    try {
      return JSON.parse(data);
    } catch (error) {}
    return data;
  }
}
