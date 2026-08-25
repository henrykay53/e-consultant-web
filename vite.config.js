import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss()],
  // react-helmet-async is CommonJS; bundling it into the SSR output avoids
  // Node's ESM named-export interop error during prerendering.
  ssr: {
    noExternal: ['react-helmet-async'],
  },
  build: {
    rollupOptions: {
      output: isSsrBuild
        ? {}
        : {
            // Split vendor code so a visitor who only wants the phone number
            // is not downloading the animation engine and the blog first.
            // Skipped for the SSR bundle, where React is external.
            manualChunks: {
              react: ['react', 'react-dom', 'react-router-dom'],
              motion: ['framer-motion'],
            },
          },
    },
  },
}))
