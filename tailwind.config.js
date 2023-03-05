/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./**/*.html"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["'Inter'", ...defaultTheme.fontFamily.sans]
            },
            colors: {
                primary: '#5BCFDE',
                secondary: '#EB00FF',
                heading: '#000',
                paragraph: '#555'
            }
        },
        screens: {
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1170px",
			'2xl': "1400px"
		},
        container: {
            center: true,
            padding: '15px'
        }
    },
    plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography')
	]
}
