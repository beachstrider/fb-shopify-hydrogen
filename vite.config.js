/// <reference types="vitest" />
import {defineConfig} from 'vite';
import hydrogen from '@shopify/hydrogen/plugin';
import VitePluginHtmlEnv from 'vite-plugin-html-env';

export default defineConfig({
  plugins: [
    hydrogen(),
    VitePluginHtmlEnv({
      compiler: true,
      prefix: '%',
      suffix: '%',
      envPrefixes: [''],
    }),
  ],
  resolve: {
    alias: [{find: /^~\/(.*)/, replacement: '/src/$1'}],
  },
  optimizeDeps: {
    include: ['@headlessui/react', 'clsx', 'react-use', 'typographic-base'],
  },
  test: {
    globals: true,
    testTimeout: 10000,
    hookTimeout: 10000,
    maxThreads: 1,
    minThreads: 1,
  },
});
