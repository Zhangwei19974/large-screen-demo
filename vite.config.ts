import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    https:false,
    proxy:{
        '/echart':{
          target:'https://echarts.apache.org',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/echart/, "")
        }
    }
  }
})
