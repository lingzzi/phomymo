import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src/web',
    base: '/phomymo/', // 注意：必须与你的 GitHub 仓库名称一模一样（前后带斜杠）
    build: {
        outDir: '../../dist',
        emptyOutDir: true,
    },
});