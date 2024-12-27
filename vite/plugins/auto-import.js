import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export function createAutoImport() {
  return [
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue', 'vue-router', 'pinia'],
      // 自动导入 Element Plus 相关函数
      resolvers: [ElementPlusResolver()],
      dts: 'auto-imports.d.ts'
    }),
    Components({
      // 自动导入 Element Plus 组件
      resolvers: [ElementPlusResolver()],
      dts: 'components.d.ts'
    })
  ]
}
