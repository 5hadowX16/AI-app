import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  return {
    server: {
      host: true,
      port: 8080,
      strictPort: true,
      hmr: {
        clientPort: 8080,
      },
      allowedHosts: [
        'all',
        '.ngrok-free.app',
        '.ngrok.io',
        'localhost',
        '127.0.0.1',
      ],
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});