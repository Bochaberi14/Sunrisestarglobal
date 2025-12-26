import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs', // point to your PostCSS config
  },
  server: {
    host: 'localhost', // local dev
    port: 5173,        // default Vite port
    open: true,        // automatically open browser
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // optional alias
    },
  },
});
