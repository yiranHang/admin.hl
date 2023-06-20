import { defineStore } from "pinia";
import { UserState, UserInfo } from "@/stores/interface";
import { CryptoTool } from "@/utils/crypto";
import { localClear } from "@/utils";
import { useAuthStore } from "@/stores/modules/auth";
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
      this.token = token;
    },
    // Set setUserInfo
    setUserInfo(userInfo: UserInfo) {
      this.userInfo = CryptoTool.sm4Encrypt(userInfo);
    },
    // Login Out
    loginOut() {
      localClear();
      this.token = "";
      this.userInfo = "";
      const authStore = useAuthStore();
      authStore.authButtonList = {};
      authStore.authMenuList = [];
    }
  },
  persist: piniaPersistConfig("admin-user")
});
