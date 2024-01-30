import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  const isDev = command === 'serve';

  return {
    base: isDev ? '/' : './',
    plugins: [
      vue(),
      viteMockServe({
        // default
        mockPath: 'mock',
        localEnabled: isDev,
      }),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            projectName: 'vue-project',
            injectScript: isDev ? 
              '' :
              `<script async src="https://www.googletagmanager.com/gtag/js?id=G-E8QKRYXRLQ"></script>
              <script>
                window.dataLayer = window.dataLayer || [];
                function gtag() { dataLayer.push(arguments); }
                gtag('js', new Date());
                gtag('config', 'G-E8QKRYXRLQ');
              </script>`,
          }
        },
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
