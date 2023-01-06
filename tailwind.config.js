/** @type {import('tailwindcss').Config} */
module.exports = {
	corePlugins: {
		preflight: true,
	},
	future: {
		// hoverOnlyWhenSupported: true,
	},
	safelist: [
			'bg-work/[0.6]',
			'bg-design/[0.6]',
			'bg-photography/[0.6]',
			'bg-diy/[0.6]',
			'bg-coding/[0.6]',
			'object-cover',
			'object-contain',
	],
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'primary': '#e95a3e',
				'primary-tp': '#e95a3e99',
				'secondary': '#0e4465',
				'ternary': '#2573a1',
				'dark-blue': '#2c3e50',
				'very-dark-grey': '#202020',
				'dark-grey': '#505050',
				'light-grey': '#787878',
				'lighter-grey': '#afafaf',
				'dark-white': '#efefef',
				'almost-white': '#f9f9f9',
				'basically-white': '#fbfbfb',

				'work': '#e95a3e',
				'design': '#28da79',
				'photography': '#2ab6ff',
				'diy': '#ffe94d',
				'coding': '#a62639',
			},
			height: {
				'tile': '400px',
				'nav': '192px',
				'flg': '256px',
				'fsm': '192px'
			},
			width: {
				'maw': '1440px',
				'mtw': '1280px',
			},
			boxShadow: {
				'tile': '0 0 8px 0 rgba(0,0,0,0.07)',
				'tooltip': '0 0 30px 0 rgba(0,0,0,0.1)'
			}
		},
		screens: {
			'sm': {max: '480px'},
			// => @media (max-width: 640px) { ... }

			'md': {max: '768px'},
			// => @media (max-width: 768px) { ... }

			'lg': {max: '1440px'},
			// => @media (max-width: 1440px) { ... }

			'xl': {max: '1680px'},
			// => @media (max-width: 1680px) { ... }
		}
	},
	plugins: [],
}
