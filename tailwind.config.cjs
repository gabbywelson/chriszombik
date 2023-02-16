/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Playfair Display', 'serif'],
		},
		colors: {
			header: '#9bd7db'
		},
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')]
}
