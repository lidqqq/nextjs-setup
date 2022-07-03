/* eslint-disable node/no-unpublished-import */
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

const config = defineConfig({
	test: {
		environment: 'happy-dom',
	},
	plugins: [react()],
});

export default config;
