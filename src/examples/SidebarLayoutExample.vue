<template>
  <SidebarLayout>
    <div class="example-content">
      <h1>SidebarLayout 示例</h1>
      
      <el-card class="feature-card">
        <template #header>
          <div class="card-header">
            <span>侧边栏功能演示</span>
          </div>
        </template>
        <div class="features">
          <el-row :gutter="20">
            <el-col :span="12">
              <h3>1. 侧边栏折叠控制</h3>
              <el-button @click="layoutStore.toggleSidebar">
                {{ layoutStore.sidebar.collapsed ? '展开侧边栏' : '折叠侧边栏' }}
              </el-button>
            </el-col>
            
            <el-col :span="12">
              <h3>2. 主题定制</h3>
              <el-color-picker 
                v-model="layoutStore.theme.sidebar.backgroundColor"
                show-alpha
              />
            </el-col>
          </el-row>
          
          <el-divider />
          
          <el-row :gutter="20">
            <el-col :span="24">
              <h3>3. 响应式设计</h3>
              <p>请尝试调整浏览器窗口大小，查看响应式效果：</p>
              <ul>
                <li>在移动端（< 768px）：侧边栏转为抽屉模式</li>
                <li>在平板（768px - 992px）：自动折叠侧边栏</li>
                <li>在桌面端（> 992px）：完整显示侧边栏</li>
              </ul>
            </el-col>
          </el-row>
        </div>
      </el-card>
      
      <el-card class="mt-4">
        <template #header>
          <div class="card-header">
            <span>使用说明</span>
          </div>
        </template>
        <div class="description">
          <p><code>SidebarLayout</code> 提供了一个完整的侧边栏布局解决方案：</p>
          <ul>
            <li>自适应的响应式设计</li>
            <li>可折叠的侧边栏</li>
            <li>移动端抽屉模式</li>
            <li>主题定制能力</li>
            <li>内置路由导航</li>
          </ul>
          <p>使用方法：</p>
          <pre><code>&lt;SidebarLayout&gt;
  &lt;YourContent /&gt;
&lt;/SidebarLayout&gt;</code></pre>
        </div>
      </el-card>
    </div>
  </SidebarLayout>
</template>

<script setup>
import SidebarLayout from '@/layouts/SidebarLayout.vue'

const layoutStore = useLayoutStore()
</script>

<style scoped>
.example-content {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  margin-top: 20px;
}

.features {
  h3 {
    margin-bottom: 16px;
  }
  
  .el-divider {
    margin: 24px 0;
  }
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