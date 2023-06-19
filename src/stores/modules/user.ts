import { defineStore } from "pinia";
import { UserState, UserInfo } from "@/stores/interface";
import { CryptoTool } from "@/utils/crypto";
import { CacheTool } from "@/utils/cache";
import piniaPersistConfig from "@/config/piniaPersist";
export const useUserStore = defineStore({
  id: "admin-user",
  state: (): UserState => ({
    token: "",
    userInfo: ""
  }),
  getters: {
    getUserInfo: state => CryptoTool.sm4Decrypt(state.userInfo)
  },
  actions: {
    // Set Token
    setToken(token: string) {
      console.log("🚀 ~ token:", token);
      this.token = token;
    },
    // Set setUserInfo
    setUserInfo(userInfo: UserInfo) {
      this.userInfo = CryptoTool.sm4Encrypt(userInfo);
    },
    loginOut() {
      CacheTool.clearLocal();
    }
  },
  persist: piniaPersistConfig("admin-user")
});
