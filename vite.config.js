import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
  };

  if (command === "build") {
    config.base = "/"; // Özel etki alanı olmadan kök dizin
  }

  return config;
});
