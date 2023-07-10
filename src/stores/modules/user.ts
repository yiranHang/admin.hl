import { defineStore } from 'pinia'
import { UserState } from '@/stores/interface'
import CryptoTool from '@/utils/crypto'
import { localClear } from '@/utils'
import piniaPersistConfig from '@/config/piniaPersist'
import { getRoleSelect } from '@/api/modules/user'
import { User } from '@/api/interface'
export const useUserStore = defineStore({
  id: 'admin-user',
  state: (): UserState => ({
    token: '',
    userInfo: ''
  }),
  getters: {
    getUserInfo: (state): User.ResUserList => CryptoTool.sm4Decrypt(state.userInfo)
  },
  actions: {
    // Set Token
    setToken(token: string) {
      this.token = token
    },
    // Set setUserInfo
    setUserInfo(userInfo: User.ResUserList) {
      this.userInfo = CryptoTool.sm4Encrypt(userInfo)
    },
    async getRoleSelect() {
      const roles = (await getRoleSelect())?.data || []
      return roles
    },
    // Login Out
    loginOut() {
      localClear()
      this.token = ''
      this.userInfo = ''
    }
  },
  persist: piniaPersistConfig('admin-user')
})
