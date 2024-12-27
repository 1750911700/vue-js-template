<template>
  <component :is="currentLayoutComponent">
    <template #default>
      <slot></slot>
    </template>
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { useLayoutStore } from '@/stores/layout'
import SidebarLayout from './SidebarLayout.vue'
import HeaderLayout from './HeaderLayout.vue'

const layoutStore = useLayoutStore()

const currentLayoutComponent = computed(() => {
  switch (layoutStore.currentLayout) {
    case 'header':
      return HeaderLayout
    case 'sidebar':
    default:
      return SidebarLayout
  }
})
</script>

<style scoped>
.base-layout {
  height: 100vh;
  width: 100vw;
}
</style> 