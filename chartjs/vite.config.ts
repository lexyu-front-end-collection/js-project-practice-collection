import { defineConfig } from 'vite'

export default defineConfig({
    base: './',
    server: {
        port: 3000,
        open: true,
        strictPort: true,
    },
    build: {
        outDir: 'dist',
        target: 'esnext',
        assetsDir: 'assets',
        rollupOptions: {
            output: {
                manualChunks: undefined
            }
        }
    }
})