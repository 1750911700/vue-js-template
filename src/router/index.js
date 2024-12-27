import { createRouter, createWebHistory } from 'vue-router'
import { useLayoutStore } from '@/stores/layout'
import BaseLayout from '@/layouts/BaseLayout.vue'

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
  }
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
