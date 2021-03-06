'use strict';

module.exports = config => {
	config.set({
		basePath: '../..',
		frameworks: [ 'jasmine', 'karma-typescript' ],
		files: [
			'src/**/!(*.d).ts',
			'test/unit/**/*.ts'
		],
		preprocessors: {
			'src/**/!(*.d).ts': [ 'karma-typescript' ],
			'test/unit/**/*.ts': [ 'karma-typescript' ]
		},
		reporters: [ 'mocha', 'karma-typescript' ],
		karmaTypescriptConfig: {
			tsconfig: './tsconfig.test.json'
		},
		customLaunchers: {
			android: {
				base: 'Titanium',
				browserName: 'Android Emulator',
				displayName: 'android',
				platform: 'android',
				sdkVersion: '7.4.0.GA'
			}
		},
		browsers: [ 'android' ],
		singleRun: true,
		retryLimit: 0,
		captureTimeout: 300000
	});
};
