import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'

export default defineConfigWithVueTs(
	{
		name: 'app/files-to-lint',
		files: ['**/*.{ts,mts,tsx,vue}'],
	},
	globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),
	pluginVue.configs['flat/essential'],
	vueTsConfigs.recommended,
	{
		...pluginVitest.configs.recommended,
		files: ['src/**/__tests__/*'],
	},
	{
		rules: {
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{
					"args": "all",
					"argsIgnorePattern": "^_",
					"caughtErrors": "all",
					"caughtErrorsIgnorePattern": "^_",
					"destructuredArrayIgnorePattern": "^_",
					"varsIgnorePattern": "^_",
					"ignoreRestSiblings": true
				}
			],
			"vue/html-indent": [
				"warn",
				"tab"
			],
			"vue/max-attributes-per-line": "off",
			"vue/singleline-html-element-content-newline": "off"
		}
	}
)
