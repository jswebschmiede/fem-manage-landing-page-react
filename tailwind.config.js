/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    screens: {
      xs: "34em", // ~512px
      sm: "50em", // ~768px
      md: "66em", // ~1024px
      lg: "74em", // ~1120px
      xl: "90em", // ~1440px
      xxl: "107.5em", // ~1720px
    },
    container: {
      center: true,
      screens: {
        xs: "34em", // ~512px
        sm: "50em", // ~768px
        md: "66em", // ~1024px
        lg: "74em", // ~1120px
      },
      padding: {
        DEFAULT: "1.45rem",
        sm: "2rem",
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
        sm: ["0.875rem", { lineHeight: "1.45rem" }],
        base: ["1rem", { lineHeight: "1.65rem" }],
        lg: ["1.875rem", { lineHeight: "2.45rem" }],
        xl: ["2.5rem", { lineHeight: "3rem" }],
        "2xl": ["3.5rem", { lineHeight: "1" }],
      },
      backgroundImage: {
        "simplify-pattern": "url('./assets/bg-simplify-section-desktop.svg')",
        "tablet-pattern": "url('./assets/bg-tablet-pattern.svg')",
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
      gridTemplateAreas: {
        "footer-wide": ["logo nav form", "social nav copyright"],
        "footer-slim": ["form", "nav", "social", "logo", "copyright"],
      },
    },
  },
  variants: {
    scrollbar: ["dark", "rounded"],
    gridTemplateAreas: ["responsive"],
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
    require("@savvywombat/tailwindcss-grid-areas"),
  ],
};
