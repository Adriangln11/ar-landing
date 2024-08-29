/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        malibu: {
          50: "#f0f9ff",
          100: "#dff2ff",
          200: "#b8e5ff",
          300: "#57c7ff",
          400: "#33bdfd",
          500: "#09a5ee",
          600: "#0083cc",
          700: "#0068a5",
          800: "#045988",
          900: "#0a4a70",
          950: "#062e4b",
        },
        "primary-bg": {
          50: "#f0f3ff",
        },
      },
    },
  },
  plugins: [],
};
