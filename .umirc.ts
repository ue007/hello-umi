import { defineConfig } from 'umi';

export default defineConfig({
	base: '/',
	publicPath: '/',
	outputPath: '/docs/',
	nodeModulesTransform: {
		type: 'none',
	},
	routes: [{ path: '/', component: '@/pages/index' }],
	fastRefresh: {},
});
