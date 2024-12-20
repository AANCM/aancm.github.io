module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        amiko: ["Amiko"]
      },
      colors: {
        primary: {
          50: "hsl(217,80%,97%)",
          100: "hsl(217,80%,90%)",
          300: "hsl(217,70%,32%)",
          500: "hsl(217,78%,27%)",
          700: "hsl(217,74%,23%)",
          900: "hsl(217,74%,12%)",
        },
        highlight: {
          500: "hsl(187,78%,27%)",
        },
        neutral: {
          900: "hsl(209,61%,16%)",
          800: "hsl(211,39%,23%)",
          700: "hsl(209,34%,30%)",
          600: "hsl(209,28%,39%)",
          500: "hsl(210,22%,49%)",
          400: "hsl(209,23%,60%)",
          300: "hsl(211,27%,70%)",
          200: "hsl(210,31%,80%)",
          100: "hsl(212,33%,89%)",
          50: "hsl(210,36%,96%)",
        },
      },
    },
  },
  plugins: [],
};
