import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import sparkPlugin from "@github/spark/spark-vite-plugin";
import createIconImportProxy from "@github/spark/vitePhosphorIconProxyPlugin";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    createIconImportProxy(),
    sparkPlugin(),
  ],
  resolve: {
    alias: {
      '@': '/workspaces/spark-template/src'
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
