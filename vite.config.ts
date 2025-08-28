import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  optimizeDeps: {
    include: ['lucide-react'],
    entries: ['src/**/*.tsx', 'src/**/*.ts'],
    force: false,
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
});
