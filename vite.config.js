import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ["bakumetaalbewerking.nl", "www.bakumetaalbewerking.nl"],
  },
  build: {
    target: "esnext",
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: [
            "@headlessui/react",
            "@heroicons/react",
            "@phosphor-icons/react",
          ],
        },
      },
    },
  },
});
