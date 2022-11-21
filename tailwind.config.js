/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    screens: {
      xs: "32rem", // ~512px
      sm: "48rem", // ~768px
      md: "64rem", // ~1024px
      lg: "70rem", // ~1120px
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        xs: "0",
        sm: "0",
        md: "0",
        lg: "0",
        xl: "0",
      },
    },
    extend: {
      colors: {
        managebrightred: "hsl(12, 88%, 59%)",
        managebrightredlight: "hsl(12, 88%, 67%)",
        managebrightredlighter: "hsl(13, 88%, 84%)",
        managepalered: "hsl(13, 100%, 96%)",
        managedarkblue100: "hsl(233, 12%, 13%)",
        managedarkblue400: "hsl(228, 39%, 23%)",
        managelightgray: "hsl(0, 0%, 98%)",
        managedarkgray: "hsl(240, 4%, 62%)",
      },

      fontFamily: {
        sans: ["Be Vietnam Pro, sans-serif"],
      },

      fontSize: {
        xs: ["0.8125rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.875rem", { lineHeight: "2.25rem" }],
        xl: ["2.5rem", { lineHeight: "2.75rem" }],
        "2xl": ["3.5rem", { lineHeight: "1" }],
      },
      backgroundImage: {
        "simplify-pattern": "url('./assets/bg-simplify-section-desktop.svg')",
      },
      animation: {
        "button-pop": "button-pop .25s ease-out",
      },
      keyframes: {
        "button-pop": {
          "0%": { transform: "scale(.95)" },
          "40%": { transform: "scale(1.02)" },
          to: { transform: "scale(1)" },
        },
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(.4,0,.2,1)",
      },
    },
  },
  variants: {
    scrollbar: ["dark", "rounded"],
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
