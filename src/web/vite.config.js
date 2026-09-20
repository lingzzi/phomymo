import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src/web',
    base: '/Phomymo/', // 设置为你的 GitHub 仓库名称，前后加斜杠
    build: {
        outDir: '../../dist',
        emptyOutDir: true,
    },
});