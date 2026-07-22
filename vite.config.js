import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const root = dirname(fileURLToPath(import.meta.url));

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
      input: {
        main: resolve(root, "index.html"),
        diensten: resolve(root, "diensten/index.html"),
        cncDraaien: resolve(root, "diensten/cnc-draaien/index.html"),
        frezen: resolve(root, "diensten/frezen/index.html"),
        boren: resolve(root, "diensten/boren/index.html"),
        zagen: resolve(root, "diensten/zagen/index.html"),
        brootsen: resolve(root, "diensten/brootsen/index.html"),
        draadTappen: resolve(
          root,
          "diensten/draad-tappen-en-snijden/index.html",
        ),
      },
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
