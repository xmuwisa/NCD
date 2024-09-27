import type { Config } from 'tailwindcss'
import COLORS from './src/configurations/colors'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                gray: COLORS.gray,
                lightPink: COLORS.lightPink,
                pink: COLORS.pink,
                white: COLORS.white,
                black: COLORS.black,
                red: COLORS.red,
            },
            boxShadow: {
                custom: '-15px 15px 0px -6px #202020',
            },
        },
    },
    plugins: [],
}
export default config
