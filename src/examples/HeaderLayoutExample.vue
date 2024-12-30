<template>
  <HeaderLayout>
    <div class="example-content">
      <h1>HeaderLayout 示例</h1>
      
      <el-card class="feature-card">
        <template #header>
          <div class="card-header">
            <span>顶部导航功能演示</span>
          </div>
        </template>
        <div class="features">
          <el-row :gutter="20">
            <el-col :span="12">
              <h3>1. 主题定制</h3>
              <div class="theme-controls">
                <div class="control-item">
                  <span>背景颜色：</span>
                  <el-color-picker 
                    v-model="layoutStore.theme.header.backgroundColor"
                    show-alpha
                  />
                </div>
                <div class="control-item">
                  <span>边框颜色：</span>
                  <el-color-picker 
                    v-model="layoutStore.theme.header.borderColor"
                    show-alpha
                  />
                </div>
                <div class="control-item">
                  <span>导航高度：</span>
                  <el-slider 
                    v-model="headerHeight"
                    :min="40"
                    :max="80"
                    @update:modelValue="updateHeaderHeight"
                  />
                </div>
              </div>
            </el-col>
            
            <el-col :span="12">
              <h3>2. 响应式设计</h3>
              <p>请尝试调整浏览器窗口大小，查看响应式效果：</p>
              <ul>
                <li>在移动端（&lt; 768px）：隐藏用户名，仅显示头像</li>
                <li>在桌面端（≥ 768px）：完整显示用户信息</li>
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
          <p><code>HeaderLayout</code> 提供了一个完整的顶部导航布局解决方案：</p>
          <ul>
            <li>响应式的顶部导航栏</li>
            <li>灵活的主题定制</li>
            <li>内置用户信息展示</li>
            <li>自适应的内容区域</li>
          </ul>
          <p>使用方法：</p>
          <pre><code>&lt;HeaderLayout&gt;
  &lt;YourContent /&gt;
&lt;/HeaderLayout&gt;</code></pre>
        </div>
      </el-card>
    </div>
  </HeaderLayout>
</template>

<script setup>
import HeaderLayout from '@/layouts/HeaderLayout.vue'

const layoutStore = useLayoutStore()

// 处理导航栏高度
const headerHeight = ref(60)
const updateHeaderHeight = (value) => {
  layoutStore.theme.header.height = `${value}px`
}
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

.theme-controls {
  .control-item {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    
    span {
      width: 80px;
      margin-right: 12px;
    }
    
    .el-slider {
      flex: 1;
    }
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