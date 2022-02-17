import { defineNuxtConfig } from 'nuxt3';
const title = 'The Nuxt Rule';
const description = "If it exists, there's a Nuxt module of it.";
const url = 'https://the-nuxt-rule.owln.ai';

export default defineNuxtConfig({
	meta: {
		title,
		meta: [
			{ hid: 'charset', charset: 'utf-8' },
			{
				hid: 'viewport',
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{ hid: 'description', name: 'description', content: description },
			{ hid: 'og:site_name', property: 'og:site_name', content: title },
			{
				hid: 'og:description',
				property: 'og:description',
				content: description,
			},
			{ hid: 'og:type', property: 'og:type', content: 'website' },
			{ hid: 'og:url', property: 'og:url', content: url },
			{ hid: 'twitter:site', name: 'twitter:site', content: '@owln_ai' },
			{ hid: 'twitter:title', name: 'twitter:title', content: title },
			{
				hid: 'twitter:description',
				name: 'twitter:description',
				content: description,
			},
		],
		link: [
			{ hid: 'favicon', rel: 'icon', type: 'image/png', href: '/icon.png' },
		],
	},
	buildModules: ['@unocss/nuxt'],
	unocss: {
		uno: true,
		preflight: true,
		icons: true,
		theme: {
			colors: {
				nuxt: {
					primary: '#022a35',
					dark: '#001e26',
				},
			},
		},
	},
});
