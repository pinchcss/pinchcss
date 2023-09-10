import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	css: {
		lightningcss: {
			sourceMap: true,
		}
	},
	build: {
		lib: {
			entry: [resolve(__dirname, 'src/pinch.js'), resolve(__dirname, 'src/pinch.reset.js')],
			name: 'pinch',
			formats: ['es'],
		},
		outDir: '.',
		emptyOutDir: false,
		cssCodeSplit: true,
		copyPublicDir: false,
		cssMinify: 'lightningcss',
		rollupOptions: {
			output: {
				assetFileNames: "[name].min.[ext]",
			},
		},
	}
})
