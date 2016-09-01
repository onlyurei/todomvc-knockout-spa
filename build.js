({
	appDir: '.',
	baseUrl: '.',
	dir: './build',
	skipDirOptimize: false,
	generateSourceMaps: false,
	mainConfigFile: 'common.js',
	optimize: 'uglify2',
	optimizeCss: 'standard',
	pragmasOnSave: {
		excludeRequireCss: false
	},
	modules: [
		{
			name: 'common',
			include: [
				'app/shared/root-bindings',
				'framework/router',
				'framework/page'
			]
		},
		{
			name: 'app/error/error',
			exclude: ['common']
		},
		{
			name: 'app/home/home',
			exclude: ['common']
		}
	],
	paths: {}
})
