


import { defineConfig, presetIcons, presetTypography, presetUno } from 'unocss'

export default defineConfig({
	shortcuts: {
		magic:
			'bg-clip-text bg-gradient-radial from-cinder-900 via-cinder-400 to-cinder-900 dark:bg-gradient-to-br dark:from-sky-300 dark:to-pink-300 inline-block text-transparent',
	},
	theme: {
		colors: {
			nuxt: {
				primary: '#022a35',
				dark: '#001e26',
			},
		},
	},
	presets: [
		presetUno(),
		presetTypography(),
		presetIcons({
			extraProperties: {
				display: 'inline-block',
				'vertical-align': 'middle',
				// ...
			},
			cdn: 'https://esm.sh/',
		})
	],
});
