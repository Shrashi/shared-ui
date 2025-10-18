const fs = require('fs'), path = require('path')
const root = path.resolve(__dirname, '..')
const dist = path.join(root, 'dist')
const srcPkg = require(path.join(root, 'package.json'))

const out = {
  name: srcPkg.name || '@shared-ui/elements',
  version: srcPkg.version || '0.0.1',
  type: 'module',
  main: './index.cjs',
  module: './index.js',
  exports: {
    '.': {
      import: './index.js',
      require: './index.cjs',
      default: './index.js'
    }
  },
  // Keep if you're generating d.ts; remove if JS-only
  types: fs.existsSync(path.join(dist, 'index.d.ts')) ? './index.d.ts' : undefined,
  peerDependencies: {
    react: '^18.0.0 || ^19.0.0',
    'react-dom': '^18.0.0 || ^19.0.0'
  },
  sideEffects: false,
  files: ['*', '!**/*.map', '!**/*.test.*', '!**/*.stories.*', '!**/__tests__/**'],
  license: srcPkg.license || 'UNLICENSED'
}
if (!fs.existsSync(dist)) fs.mkdirSync(dist, { recursive: true })
fs.writeFileSync(path.join(dist, 'package.json'), JSON.stringify(out, null, 2))
;['README.md', 'LICENSE'].forEach(f => {
  const p = path.join(root, f)
  if (fs.existsSync(p)) fs.copyFileSync(p, path.join(dist, f))
})
console.log('✓ wrote dist/package.json')
