import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import sparkPlugin from "@github/spark/spark-vite-plugin";
import createIconImportProxy from "@github/spark/vitePhosphorIconProxyPlugin";

export default defineConfig({
  base: '/dada-art-generator/',
  plugins: [
    react(),
    tailwindcss(),
    createIconImportProxy(),
    sparkPlugin(),
  ],
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
    force: true
  },
  server: {
    port: 5000,
    strictPort: true,
    hmr: {
      overlay: true
    }
  }
});
