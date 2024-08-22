import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure the build output goes to the 'dist' folder
    rollupOptions: {
      input: {
        main: './index.html', // Adjust path if necessary
      },
    },
  },
});
