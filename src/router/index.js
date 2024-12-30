import { createRouter, createWebHistory } from 'vue-router'
import BaseLayout from '@/layouts/BaseLayout.vue'

// 布局示例路由
const layoutExampleRoutes = [
  {
    path: '/examples',
    name: 'examples',
    meta: {
      title: '布局示例',
      icon: 'el-icon-menu'
    },
    children: [
      {
        path: 'base-layout',
        name: 'baseLayoutExample',
        component: () => import('@/examples/BaseLayoutExample.vue'),
        meta: {
          title: '基础布局示例',
          icon: 'el-icon-s-grid'
        }
      },
      {
        path: 'sidebar-layout',
        name: 'sidebarLayoutExample',
        component: () => import('@/examples/SidebarLayoutExample.vue'),
        meta: {
          title: '侧边栏布局示例',
          icon: 'el-icon-s-unfold'
        }
      },
      {
        path: 'header-layout',
        name: 'headerLayoutExample',
        component: () => import('@/examples/HeaderLayoutExample.vue'),
        meta: {
          title: '顶部导航布局示例',
          icon: 'el-icon-menu'
        }
      }
    ]
  }
]

const routes = [
  {
    path: '/',
    component: BaseLayout,
    redirect: '/demo',
    children: [
      {
        path: 'demo',
        name: 'Demo',
        meta: {
          title: '示例',
          icon: 'el-icon-menu',
          layout: 'sidebar'
        },
        component: () => import('@/views/demo/index.vue')
      },
      {
        path: 'user',
        name: 'User',
        meta: {
          title: '用户管理',
          icon: 'el-icon-user',
          layout: 'header'
        },
        component: () => import('@/views/demo/user/index.vue')
      }
    ]
  },
  ...layoutExampleRoutes
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫，根据路由 meta 信息设置布局
router.beforeEach((to, from, next) => {
  const layout = to.meta?.layout || 'sidebar'
  const layoutStore = useLayoutStore()
  layoutStore.setLayout(layout)
  next()
})

export default router
