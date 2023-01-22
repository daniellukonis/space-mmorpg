// esbuild.config.js

const res = require('esbuild')
.build({
  entryPoints: ['./client/src/index.js'],
  bundle: true,
  minify: true,
  sourcemap: true,
  outfile: './client/dist/bundle.js',
})
.catch(() => ProcessingInstruction.exit(1))