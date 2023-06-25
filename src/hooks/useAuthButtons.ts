import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/modules'

/**
 * @description 页面按钮权限
 * */
export const useAuthButtons = () => {
  const route = useRoute()
  const authStore = useAuthStore()
  const authButtons = authStore.authButtonListGet[route.fullPath as string] || {}
  const BUTTONS = computed(() => {
    const currentPageAuthButton: { [key: string]: boolean } = {}
    for (const key in authButtons) {
      if (Object.prototype.hasOwnProperty.call(authButtons, key)) {
        currentPageAuthButton[key] = true
      }
    }
    return currentPageAuthButton
  })

  return {
    BUTTONS
  }
}
