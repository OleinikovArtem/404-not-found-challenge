/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			monospace: ['Space Mono', 'monospace'],
			inconsolata: ['Inconsolata', 'monospace'],
		},
		extend: {
			colors: {
				'black': '#333333',
				'gray': '#BDBDBD'
			},
		},
	},
	plugins: [],
}

