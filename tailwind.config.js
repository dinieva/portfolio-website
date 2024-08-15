// import 'tailwindcss/colors'
import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  theme: {
    screens: {
      sm: "480px",
      md: "769px" /*  @media (min-width: 768px) { ... } */,
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.zinc,
      gray: colors.gray,
      indigo: colors.indigo,
      green: colors.green,
      fuchsia: colors.fuchsia,
      blue: colors.cyan,
      yellow: colors.yellow,
      special: "#1e1b4b",
      special1: "#34315d",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      inter: ["Inter var", ...defaultTheme.fontFamily.sans],
    },

    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 0px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      // '2xl': '0 25px 50px -12px rgba(245, 40, 145, 0.25)',
      "2xl": "0 25px 50px -12px rgba(34, 211, 238, 0.25)",
      "3xl": "0 35px 60px -15px rgba(245, 40, 145, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      shadow: "0 4px 8px 0 #f528914d",

      card: "0 4px 8px 0 rgba(0, 0, 0, 0.2);",
      none: "none",
    },
    extend: {
      screens: {
        xs: "320px",
        smPhone: { max: "479px" },
        // xsMax: { max: "767px" },
        // => @media (min-width: 992px) { ... }
      },
      borderRadius: {
        full: "9999px",
      },
      animation: {
        show: "show ease 7s",
        "animate-pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-bg-once": "pulse-bg-once 2s ease-in forwards",
        wiggle: "wiggle 1.5s ease-in-out ",
        typewriter: "typewriter 3s steps(29) forwards ",
        caret:
          "typewriter 2s steps(29) forwards, blink 1s steps(29) infinite 2s",
        backgroundColor: ["active"],
        "ticker-scroll": "ticker-scroll 25s linear infinite",
      },
      keyframes: {
        /*  wiggle: {
          '0%, 100%': { transform: 'rotate(180deg)' },
          '50%': { transform: 'rotate(3deg)' }
        }, */
        show: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        wiggle: {
          from: { transform: "rotate(45deg)", scale: 0 },
          to: { transform: "rotate(0)", scale: 1 },
        },
        "pulse-bg-once": {
          to: { backgroundColor: "#d946ef" },
        },
        typewriter: {
          to: {
            left: "100%",
          },
        },

        "ticker-scroll": {
          from: { transform: "translateX(0%)" },
          // to: { transform: 'translateX(calc(-100% - 20px))' }
          to: { transform: "translateX(-100%)" },
        },
        blink: {
          "0%": {
            opacity: "0",
          },
          "0.1%": {
            opacity: "1",
          },
          "50%": {
            opacity: "1",
          },
          "50.1%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
  purge: {
    // enabled: process.env.NODE_ENV === "production",
    content: ["./public/**/*.html", "./src/**/*.vue", "./**/*.html"],
    options: {
      whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/,
      ],
    },
  },
};
