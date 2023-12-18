/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
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
			fontSize: {
				'x-small': '14px',
				small: '16px',
				medium: '18px',
				large: '20px',
				'x-large': '22px',
			},
			fontWeight: {
				thin: 400,
				regular: 500,
				bold: 700,
			},
		},
	},
	plugins: [],
}
