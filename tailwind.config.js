/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "0rem",
          sm: "0rem",
          lg: "0rem",
          xl: "0rem",
        },
      },
      colors:{
        'primary': '#151515',
        'light': '#303030',
        'gray': '#919191',
        'bgGray': '#232323',
        'gold': '#F6B03C',
        'ath': '#F7F6F4',
        'text': '#625959'
      }
    },
  },
  plugins: [],
};
