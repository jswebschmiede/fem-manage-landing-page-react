module.exports = {
  content: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    screens: {
        xs: "32rem", // ~512px
        sm: "48rem", // ~768px
        md: "64rem", // ~1024px
        lg: "80rem", // ~1280px
        xl: "90rem"  // ~1440px
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
    },
},
variants: {
    scrollbar: ["dark", "rounded"]
},
plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
}
