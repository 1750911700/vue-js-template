import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  // 状态
  const token = ref('')
  const userInfo = ref(null)
  
  // 计算属性
  const isLoggedIn = computed(() => !!token.value)
  const username = computed(() => userInfo.value?.username || '')
  
  // 动作
  async function login(credentials) {
    try {
      // 模拟登录请求
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(credentials)
      })
      const data = await response.json()
      
      token.value = data.token
      userInfo.value = data.user
      
      return true
    } catch (error) {
      console.error('Login failed:', error)
      return false
    }
  }
  
  function logout() {
    token.value = ''
    userInfo.value = null
  }
  
  return {
    // 状态
    token,
    userInfo,
    // 计算属性
    isLoggedIn,
    username,
    // 动作
    login,
    logout
  }
}) 