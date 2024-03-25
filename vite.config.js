import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  const isDev = command === 'serve';
  
  const {
    VITE_TITLE,
    VITE_KEYWORDS,
    VITE_DESCRIPTION,
    VITE_COPYRIGHT,
    VITE_URL,
  } = loadEnv('all', process.cwd());

  const injectGACode = () => {
    const domains = {
      'www.businesstoday.com.tw': 'G-E8H9YJZQJP',
      'events.businesstoday.com.tw': 'G-E8QKRYXRLQ',
      'esg.businesstoday.com.tw': 'G-SB7EH4Y2DY'
    };
    const target = Object.keys(domains).find(key => VITE_URL.includes(key));
    if (target) {
      return domains[target];
    } else {
      console.error('未知domain name', VITE_URL);
      return '';
    }
  }

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
            injectScript: isDev ? 
              '' :
              `<script async src="https://www.googletagmanager.com/gtag/js?id=${injectGACode()}"></script>
              <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', ${injectGACode()});
              </script>`,
            meta: {
              title: VITE_TITLE,
              keywords: VITE_KEYWORDS,
              description: VITE_DESCRIPTION,
              copyright: VITE_COPYRIGHT,
              url: VITE_URL,
            },
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
