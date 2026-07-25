import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: true,
    proxy: {
      "/ecommerce": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
      "/visitcount": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
      "/checkout": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
    },
  },
});
