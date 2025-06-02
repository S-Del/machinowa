import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig((config) => {
  const env = loadEnv(config.mode, process.cwd(), "");
  const basePath = (() => {
    switch (true) {
      case config.command === "build": return "/machinowa/";
      default: return "/";
    }
  })();

  return {
    plugins: [react(), tailwindcss()],
    server: {
      host: env.VITE_SDEL_SEVER_HOST || "localhost",
    },
    base: basePath
  };
});
