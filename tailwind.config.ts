import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				"baskervville-serif": ["Baskervville", "serif"],
				"ooohbaby-serif": ["Oooh Baby", "serif"]
			},
			keyframes: {
				"scale": {
					"0%, 100%": {
						transform: "scale(1)"
					},
					"50%": {
						transform: "scale(1.2)"
					}
				}
			},
			animation: {
				"scale": "scale 2s infinite"
			},
			scale: {
				'200': '2'
			}
		}
	},

	plugins: []
} satisfies Config;
