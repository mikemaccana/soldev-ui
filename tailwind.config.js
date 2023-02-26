/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    // require("tailwind-scrollbar"),
    require("@tailwindcss/forms"),
  ],
  theme: {
    minWidth: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      22: "5.5rem",
      24: "6rem",
      26: "6.5rem",
      28: "7rem",
      30: "7.5rem",
      32: "8rem",
      34: "8.5rem",
      36: "9rem",
      38: "9.5rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      68: "17rem",
      72: "18rem",
      76: "19rem",
      80: "20rem",
      88: "22rem",
      96: "24rem",
      104: "26rem",
      110: "28rem",
      118: "30rem",
      126: "32rem",
      132: "34rem",
      140: "36rem",
    },
    rotate: {
      "-180": "-180deg",
      "-90": "-90deg",
      "-45": "-45deg",
      "-10": "-10deg",
      "-9": "-9deg",
      "-8": "-8deg",
      "-7": "-7deg",
      "-6": "-6deg",
      "-5": "-5deg",
      "-4": "-4deg",
      "-3": "-3deg",
      "-2": "-2deg",
      "-1": "-1deg",
      0: "0",
      1: "1deg",
      2: "2deg",
      3: "3deg",
      4: "4deg",
      5: "5deg",
      6: "6deg",
      7: "7deg",
      8: "8deg",
      9: "9deg",
      10: "10deg",
      45: "45deg",
      90: "90deg",
      180: "180deg",
    },
    inset: (theme, { negative }) => ({
      ...theme("spacing"),
      ...negative(theme("spacing")),
      0: "0",
      auto: "auto",
    }),
    extend: {
      backgroundImage: {
        "star-sm": "url('/img/bg-stars-sm.svg')",
        "star-lg": "url('/img/bg-stars-lg.svg')",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      borderRadius: {
        xl: ".75rem",
      },
      colors: {
        black: "#0a0a0e",
        twitter: "#1d9bf0",
        "solana-purple": "#9945FF",
        "solana-green": "#14F195",
        gray: {
          50: "#FDFCFD",
          100: "#F3F1F3",
          200: "#E1DFE2",
          300: "#C1BCC2",
          400: "#A8A2A9",
          500: "#888089",
          600: "#6E676F",
          700: "#544E56",
          800: "#3B343D",
          900: "#1B171C",
        },
        violet: {
          50: "#FEFAFF",
          100: "#F6C2FF",
          200: "#F6C2FF",
          300: "#EC80FF",
          400: "#E657FF",
          500: "#DC1FFF",
          600: "#B915D5",
          700: "#970DAF",
          800: "#790D8C",
          900: "#460B51",
        },
        green: {
          50: "#FAFFFD",
          100: "#EBFFF8",
          200: "#C2FFE9",
          300: "#80FFD0",
          400: "#5CFFC3",
          500: "#00FFA2",
          600: "#00DB8B",
          700: "#00B371",
          800: "#00754A",
          900: "#003D27",
        },
      },
      fontSize: {
        "7xl": "5rem",
        "8xl": "6rem",
        "9xl": "7rem",
      },
    },
  },
  variants: {
    transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
    inset: ["responsive", "hover"],
    cursor: ["disabled"],
    opacity: ["disabled"],
    scrollbar: ["dark"],
    margin: ["responsive", "hover", "focus"],
  },
};
