<template>
  <div class="header-layout">
    <!-- 顶部导航 -->
    <header 
      class="header"
      :style="{
        height: layoutStore.theme.header.height,
        backgroundColor: layoutStore.theme.header.backgroundColor,
        borderColor: layoutStore.theme.header.borderColor
      }"
    >
      <!-- Logo -->
      <div class="logo">
        <img src="@/assets/img/logo.png" alt="Logo">
        <span>Vue Admin</span>
      </div>
      
      <!-- 导航菜单 -->
      <nav 
        class="menu"
        :style="{
          height: layoutStore.theme.header.menuHeight,
          backgroundColor: layoutStore.theme.header.menuBackgroundColor
        }"
      >
        <router-link 
          v-for="route in routes" 
          :key="route.path"
          :to="route.path"
          class="menu-item"
          :class="{ active: currentPath === route.path }"
        >
          <i :class="route.meta?.icon || 'el-icon-menu'"></i>
          <span>{{ route.meta?.title || route.name }}</span>
        </router-link>
      </nav>
      
      <!-- 用户信息 -->
      <div class="user-info">
        <el-dropdown>
          <span class="user-name">
            <el-avatar size="small" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            <span>Admin</span>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </header>
    
    <!-- 内容区 -->
    <main 
      class="main-content"
      :style="{
        backgroundColor: layoutStore.theme.main.backgroundColor,
        padding: layoutStore.theme.main.padding
      }"
    >
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()
const layoutStore = useLayoutStore()

// 获取路由列表
const routes = computed(() => {
  return router.options.routes.filter(route => !route.meta?.hidden)
})

// 当前路径
const currentPath = computed(() => route.path)

// Helper functions for template
const getIcon = (route) => route.meta?.icon || 'el-icon-menu'
const getTitle = (route) => route.meta?.title || route.name
</script>

<style scoped>
.header-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 20px;
  border-bottom: 1px solid;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo img {
  width: 32px;
  height: 32px;
}

.menu {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 16px;
  border-radius: 4px;
}

.menu-item {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 16px;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.menu-item:hover {
  background-color: rgb(255 255 255 / 10%);
}

.menu-item.active {
  background-color: rgb(255 255 255 / 20%);
}

.menu-item i {
  margin-right: 8px;
  font-size: 16px;
}

.user-info {
  cursor: pointer;
}

.user-name {
  display: flex;
  align-items: center;
  gap: 8px;
}

.main-content {
  flex: 1;
  overflow: auto;
}
</style> 