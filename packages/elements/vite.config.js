// /// <reference types='vitest' />
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import dts from 'vite-plugin-dts';
// import * as path from 'path';
// import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
// import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';

// export default defineConfig(() => ({
//   root: __dirname,
//   cacheDir: '../../node_modules/.vite/packages/elements',
//   plugins: [
//     react( {babel: { plugins: ['babel-plugin-styled-components'] }}),
//     nxViteTsPaths(),
//     nxCopyAssetsPlugin(['*.md']),
//     dts({
//       entryRoot: 'src',
//       tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
//       pathsToAliases: false,
//     }),
//   ],

//   build: {
//     outDir: '../../dist/packages/elements',
//     emptyOutDir: true,
//     reportCompressedSize: true,
//     commonjsOptions: {
//       transformMixedEsModules: true,
//     },
//     lib: {
    
//       entry: 'src/index.js',
//       name: 'elements',
//       fileName: 'index',
//       formats: ['es' as const, 'cjs' as const],
//     },
//     rollupOptions: {
//       external: ['react', 'react-dom', 'react/jsx-runtime'],
//     },
//   },
//   test: {
//     name: 'elements',
//     watch: false,
//     globals: true,
//     environment: 'jsdom',
//     include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
//     reporters: ['default'],
//     coverage: {
//       reportsDirectory: '../../coverage/packages/elements',
//       provider: 'v8' as const,
//     },
//   },
// }));


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin'
import path from 'node:path'

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/elements',
  plugins: [
    react({ babel: { plugins: ['babel-plugin-styled-components'] } }),
    nxViteTsPaths(),                      
    nxCopyAssetsPlugin(['*.md']),
  ],

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'elements',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },

  test: {
    name: 'elements',
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['{src,tests}/**/*.{test,spec}.{js,jsx,mjs,cjs,tsx,ts}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/packages/elements',
      provider: 'v8',
    },
  },
}))
