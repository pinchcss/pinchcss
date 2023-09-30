import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(() => {
	return {
		plugins: [vue()],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
			},
		},
		css: {
			lightningcss: {
				sourceMap: true,
			},
		},
		build: {
			outDir: './docs',
			emptyOutDir: true,
			cssCodeSplit: true,
			cssMinify: 'lightningcss',
			rollupOptions: {
				input: {
					index: resolve(__dirname, 'index.html'),
					router: resolve(__dirname, '404.html'),
				},
			},
		},
	};
});
