/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f9f7f3",
        white: "#fff",
        gray: {
          "100": "#111",
          "200": "rgba(17, 17, 17, 0.05)",
          "300": "rgba(17, 17, 17, 0.4)",
          "400": "rgba(17, 17, 17, 0.3)",
          "500": "rgba(17, 17, 17, 0.7)",
          "600": "rgba(17, 17, 17, 0.1)",
        },
        yellowgreen: {
          "100": "#b4f461",
          "200": "#9cdb47",
        },
        darkslategray: {
          "100": "rgba(69, 69, 69, 0.3)",
          "200": "rgba(69, 69, 69, 0.09)",
        },
      },
      spacing: {},
      fontFamily: {
        lexend: "Lexend",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq650: {
        raw: "screen and (max-width: 650px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
