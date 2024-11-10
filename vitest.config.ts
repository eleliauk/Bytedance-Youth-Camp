import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,       // 启用全局测试 API
   // environment: 'jsdom', // 或 'node'，根据需求选择
  },
})