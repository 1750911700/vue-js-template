<template>
  <BaseLayout>
    <div class="example-content">
      <h1>BaseLayout 示例</h1>
      <el-card class="layout-switcher">
        <template #header>
          <div class="card-header">
            <span>布局切换示例</span>
          </div>
        </template>
        <el-radio-group v-model="layoutStore.currentLayout">
          <el-radio-button label="sidebar">侧边栏布局</el-radio-button>
          <el-radio-button label="header">顶部导航布局</el-radio-button>
        </el-radio-group>
      </el-card>
      
      <el-card class="mt-4">
        <template #header>
          <div class="card-header">
            <span>说明</span>
          </div>
        </template>
        <div class="description">
          <p><code>BaseLayout</code> 是一个基础布局容器，它可以：</p>
          <ul>
            <li>动态切换不同的布局模式（侧边栏/顶部导航）</li>
            <li>提供平滑的过渡动画</li>
            <li>自动处理布局组件的切换逻辑</li>
          </ul>
          <p>使用方法：</p>
          <pre><code>&lt;BaseLayout&gt;
  &lt;YourContent /&gt;
&lt;/BaseLayout&gt;</code></pre>
        </div>
      </el-card>
    </div>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from '@/layouts/BaseLayout.vue'

const layoutStore = useLayoutStore()
</script>

<style scoped>
.example-content {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.layout-switcher {
  margin-top: 20px;
}

.description {
  line-height: 1.6;
}

.description code {
  background-color: #f5f7fa;
  padding: 2px 4px;
  border-radius: 4px;
  color: #409eff;
}

.description pre {
  background-color: #f5f7fa;
  padding: 16px;
  border-radius: 4px;
  margin: 16px 0;
}

.mt-4 {
  margin-top: 16px;
}
</style> 