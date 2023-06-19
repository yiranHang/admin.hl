import { defineStore } from "pinia";
import { UserState, UserInfo } from "@/stores/interface";
import { CacheTool } from "@/utils/cache";
export const useUserStore = defineStore({
  id: "admin-user",
  state: (): UserState => ({
    userInfo: {}
  }),
  getters: {},
  actions: {
    // Set Token
    setToken(token: string) {
      CacheTool.setLocal("access_token", token);
    },
    // Set setUserInfo
    setUserInfo(userInfo: UserInfo) {
      this.userInfo = userInfo;
      console.log("🚀 ~ this.userInfo:", this.userInfo);
    }
  }
});
