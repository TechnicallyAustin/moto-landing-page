import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/moto2go/", // Set the base URL for your deployment
  build: {
    outDir: "dist", // Specify the output directory for the production build
    assetsDir: "assets", // Specify the assets directory for the production build
    sourcemap: true, // Generate source maps for debugging
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log statements in production
      },
    },
  },
});
