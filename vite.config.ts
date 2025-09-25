import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "block-manual",
      filename: "blockManual.js",
      exposes: {
        "./blockManual": "./src/app/entrypoint/App.tsx",
      },
      shared: [
        "react",
        "react-dom",
        "react-router-dom",
        "antd",
        "@ant-design/pro-components",
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
