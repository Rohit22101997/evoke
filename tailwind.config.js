module.exports = {
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slide: "35s linear infinite slide",
      },
    },
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // This is correct for scanning Next.js files (e.g., app/**/*.{js,jsx,ts,tsx})
    "./*.html", 
  ],
  theme: {
    // Extend the existing theme, do not overwrite it
    extend: {
      fontFamily: {
        // 'primary' will create the class 'font-primary'
        // 'myfont' MUST exactly match the font-family name in the @font-face rule
        'primary': ['myfont', 'sans-serif'],
      },
      // You can also override the default sans-serif font entirely:
      // sans: ['myfont', 'ui-sans-serif', 'system-ui'],
    },
  },
  plugins: [],
}