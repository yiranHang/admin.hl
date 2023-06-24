/**
 * v-auth
 * 按钮权限指令
 */
import { useAuthStore } from '@/stores/modules'
import type { Directive, DirectiveBinding } from 'vue'

const auth: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const { value } = binding
    const authStore = useAuthStore()
    const currentPageRoles = authStore.authButtonListGet[authStore.routeName] ?? {}
    const buttonAcls = Object.keys(currentPageRoles)
    if (value instanceof Array && value.length) {
      const hasPermission = value.every((item) => buttonAcls.includes(item))
      if (!hasPermission) el.remove()
    } else {
      if (!buttonAcls.includes(value)) el.remove()
    }
  }
}

export default auth
