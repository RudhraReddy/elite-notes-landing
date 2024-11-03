import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "#212121",
        foreground: "#D5CDC4",
        primary: {
          DEFAULT: "#D5CDC4",
          foreground: "#212121",
          muted: "hsl(var(--primary-muted))",
        },
        background_light:'#D9D9D9',
        theme_1_bg:   '#FCFCFC',
        theme_1_text: '#333333',
        theme_2_bg:   '#F9F5E9',
        theme_2_text: '#333333',
        theme_3_bg:   '#E6E6E6',
        theme_3_text: '#333333',
        theme_4_bg:   '#000000',
        theme_4_text: '#EDEDED',
        theme_5_bg:   '#242424',
        theme_5_text: '#B2B2B2',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        poppins: ['var(--font-poppins)'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config