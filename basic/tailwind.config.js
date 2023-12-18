const tw = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx}'],
	theme: {
		extend: {
			colors: {
				'light-mint': '#BDF9E3',
				mint: '#66EBCB',
				'dark-mint': '#38D3AD',
				'light-blue': '#609DD5',
				blue: '#12678C',
				gray: {
					100: '#E7E7E7',
					200: '#CBCBCB',
					300: '#8F8F8F',
					400: '#646464',
					500: '#3A3A3A',
				},
				font: '#0F0F0F',
				error: '#EF6969',
				warn: '#f5be1b',
				white: '#FFFFFF',
				black: '#000000',
				line: '#DDDDDD',
			},
		},
	},
	plugins: [
		({ addUtilities }) => {
			const newUtilities = {}
			Object.keys(tw.colors).forEach(color => {
				newUtilities[`.bg-${color}`] = { backgroundColor: tw.colors[color] }
				newUtilities[`.text-${color}`] = { color: tw.colors[color] }
				// Add other utility classes as needed
			})
			addUtilities(newUtilities, ['hover'])
		},
	],
}
