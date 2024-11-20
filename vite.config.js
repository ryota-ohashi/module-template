import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ command }) => {
  const config = {
    root: 'src',
    build: {
      outDir: '../public',
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'src/scripts/main.js')
        },
        output: {
          entryFileNames: 'assets/js/[name].js',
          chunkFileNames: 'assets/js/[name].js',
          assetFileNames: 'assets/[ext]/[name].[ext]'
        }
      }
    }
  };

  // 開発環境でのみwatch設定を追加
  if (command === 'serve') {
    config.build.watch = {
      include: ['src/**/*.{scss,css,js,njk}']
    };
  }

  return config;
});