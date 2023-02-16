/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['Playfair Display', 'serif'],
			},
			colors: {
				header: '#9bd7db'
			},
		},
	},
	plugins: [require('@tailwindcss/typography')]
}
