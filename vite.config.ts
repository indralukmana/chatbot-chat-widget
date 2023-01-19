import preact from '@preact/preset-vite';
import path from 'path';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact(), cssInjectedByJsPlugin()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	build: {
		cssCodeSplit: false,
		rollupOptions: {
			input: {
				app: './src/main.tsx',
			},
		},
	},
});
