<template>
  <div class="sidebar-layout">
    <!-- 侧边栏 -->
    <aside 
      class="sidebar"
      :style="{
        width: layoutStore.sidebarWidth,
        backgroundColor: layoutStore.theme.sidebar.backgroundColor
      }"
    >
      <!-- Logo -->
      <div class="logo">
        <img src="@/assets/img/logo.png" alt="Logo">
        <span v-show="!layoutStore.sidebar.collapsed">Vue Admin</span>
      </div>
      
      <!-- 导航菜单 -->
      <nav class="menu">
        <router-link 
          v-for="route in routes" 
          :key="route.path"
          :to="route.path"
          class="menu-item"
          :class="{ active: currentPath === route.path }"
        >
          <i :class="getIcon(route)"></i>
          <span v-show="!layoutStore.sidebar.collapsed">{{ getTitle(route) }}</span>
        </router-link>
      </nav>
      
      <!-- 折叠按钮 -->
      <div class="collapse-btn" @click="layoutStore.toggleSidebar">
        <i :class="layoutStore.sidebar.collapsed ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
      </div>
    </aside>
    
    <!-- 主内容区 -->
    <div class="main-container">
      <!-- 顶部导航 -->
      <header 
        class="header"
        :style="{
          height: layoutStore.theme.header.height,
          backgroundColor: layoutStore.theme.header.backgroundColor,
          borderColor: layoutStore.theme.header.borderColor
        }"
      >
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
      
      <!-- 内��区 -->
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
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useLayoutStore } from '@/stores/layout'

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

<style>
.sidebar-layout {
  display: flex;
  height: 100vh;
}

.sidebar {
  display: flex;
  flex-direction: column;
  transition: width 0.3s;
  overflow: hidden;
}

.logo {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  color: #fff;
}

.logo img {
  width: 32px;
  height: 32px;
  margin-right: 12px;
}

.menu {
  flex: 1;
  padding: 16px 0;
}

.menu-item {
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 16px;
  text-decoration: none;
}

.menu-item.active {
  background-color: rgb(255 255 255 / 10%);
}

.menu-item i {
  margin-right: 12px;
  font-size: 18px;
}

.collapse-btn {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
}

.main-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
  border-bottom: 1px solid;
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