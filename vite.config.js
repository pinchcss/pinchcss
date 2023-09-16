import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ mode }) => {
	const isDoc = mode === 'documentation';
	const config = {
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
	};

	const lib = !isDoc
		? {
				entry: [resolve(__dirname, 'src/pinch.js'), resolve(__dirname, 'src/pinch.reset.js')],
				name: 'pinch',
				formats: ['es'],
		  }
		: undefined;

	return {
		...config,
		build: {
			lib,
			outDir: isDoc ? './docs' : '.',
			emptyOutDir: isDoc,
			cssCodeSplit: true,
			copyPublicDir: isDoc,
			cssMinify: 'lightningcss',
			rollupOptions: {
				output: {
					assetFileNames: '[name].min.[ext]',
				},
			},
		},
	};
});
