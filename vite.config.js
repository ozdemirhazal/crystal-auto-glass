// vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Web sitenizin kök dizini, geliştirme sırasında genellikle "/"" olarak ayarlanır.
  build: {
    outDir: "dist", // Derlenen dosyaların çıkış dizini
  },
});
