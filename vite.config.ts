import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // 建構優化
  build: {
    // 使用 esbuild 壓縮（更快且無類型錯誤）
    minify: 'esbuild',
    
    // 程式碼分割策略
    rollupOptions: {
      output: {
        manualChunks: {
          // 將 React 相關套件打包在一起
          'react-vendor': ['react', 'react-dom'],
          
          // UI 元件庫單獨打包
          'ui-vendor': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-select',
            '@radix-ui/react-tabs',
          ],
          
          // Icons 單獨打包
          'icons': ['lucide-react'],
        },
      },
    },
    
    // 增加 chunk 大小警告閾值
    chunkSizeWarningLimit: 1000,
    
    // 啟用 CSS 程式碼分割
    cssCodeSplit: true,
    
    // 產生 source map（可選，方便除錯）
    sourcemap: false,
  },

  // 開發伺服器設定
  server: {
    port: 5173,
    host: true,
    // 啟用 HMR（熱模組替換）
    hmr: true,
  },

  // 預覽伺服器設定
  preview: {
    port: 4173,
  },
});
