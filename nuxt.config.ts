import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
	extends: ['nuxt-seo-kit'],
	css: ['@unocss/reset/tailwind.css'],
	runtimeConfig: {
		lastfmKey: '',
		public: {
			siteUrl: 'https://the-nuxt-rule.owln.ai',
			siteName: 'The Nuxt Rule',
			siteDescription: "If it exists, there's a Nuxt module for it",
			language: 'en-US',
		},
	},
	app: {
		head: {
			link: [
				{
					hid: 'favicon',
					rel: 'icon',
					type: 'image/png',
					href: '/icon.png',
				},
			],
		},
	},
	modules: [
		'@unocss/nuxt',
		[
			'@nuxtjs/color-mode',
			{
				classSuffix: '',
			},
		],
	],
});
