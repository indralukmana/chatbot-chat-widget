module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'simple-import-sort', 'unused-imports'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	extends: [
		'plugin:sonarjs/recommended',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'preact',
	],
	rules: {
		'no-console': ['warn', { allow: ['error'] }],
		curly: 'error',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		//#region  //*=========== Unused Import ===========
		'unused-imports/no-unused-imports': 'warn',
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],
		//#endregion  //*======== Unused Import ===========
		//#region  //*=========== Import Sort ===========
		'simple-import-sort/exports': 'warn',
		'simple-import-sort/imports': [
			'warn',
			{
				groups: [
					// ext library & side effect imports
					['^@?\\w', '^\\u0000'], // {s}css files
					['^.+\\.s?css$'], // Lib and hooks
					['^@/lib', '^@/hooks'], // static data
					['^@/data'], // components
					['^@/components', '^@/container'], // zustand store
					['^@/store'], // Other imports
					['^@/'], // relative paths up until 3 level
					[
						'^\\./?$',
						'^\\.(?!/?$)',
						'^\\.\\./?$',
						'^\\.\\.(?!/?$)',
						'^\\.\\./\\.\\./?$',
						'^\\.\\./\\.\\.(?!/?$)',
						'^\\.\\./\\.\\./\\.\\./?$',
						'^\\.\\./\\.\\./\\.\\.(?!/?$)',
					],
					['^@/types'], // other that didnt fit in
					['^'],
				],
			},
		], //#endregion  //*======== Import Sort ===========
	},
	overrides: [
		{
			files: ['*.js'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
	],
};
