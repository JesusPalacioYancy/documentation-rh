import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/container-doc.ts',
      formats: ['es'],
      fileName: (format) => `container-doc.${format}.js`
    },
    rollupOptions: {
      external: [/^lit/],
    },
  },
  plugins: [
    dts({
      outputDir: 'dist/types',
      insertTypesEntry: true,
      tsConfigFilePath: './tsconfig.json', 
    })
  ],
  esbuild: {
    target: 'es2018'
  }
});
