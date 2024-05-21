// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
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
