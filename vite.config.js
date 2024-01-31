import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
//其他有还有什么配置呢？
export default defineConfig({
  plugins: [react()],
  server:{
    port: 5005,
    open:"/",
    //在所有端口上侦听
    host:true,
    //设置代理
    proxy:{
      '/api':{
        target:'',
        changeOrigin:true

      }
    }
  },
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src'),
    }
  }
})
