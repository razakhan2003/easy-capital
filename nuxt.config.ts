// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			script: [
				{
					async: true,
					src: "https://www.googletagmanager.com/gtag/js?id=G-4C7L5SRT85",
				},
				{
					hid: "gtag-inline",
					innerHTML: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-4C7L5SRT85');
					`,
					type: "text/javascript",
				},
			],
			meta: [
				{
					name: "google-site-verification",
					content: "zsKC6Tr_t1ube1CFXA06gMkQuYI5n3N9VWAsmfNlX98",
				},
			],
		},
	},
	devtools: { enabled: false },
	css: ["~/css/tailwind.css"],
	modules: ["nuxt-swiper"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
});
