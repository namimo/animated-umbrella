import { defineConfig } from "vite-plugin-windicss"
import colors from "windicss/colors"
import theme from "windicss/defaultTheme"
import forms from "windicss/plugin/forms"

export default defineConfig({
  shortcuts: {
    "button-primary":
      "inline-flex items-center justify-center px-12 py-3 text-lg font-semibold tracking-wide rounded-full bg-gradient-to-br from-lightBlue-500 to-gray-700 lg:text-3xl focus:outline-none",
  },
  theme: {
    extend: {
      // ...
      colors,
      fontFamily: {
        sans: ["Righteous", ...theme.fontFamily.sans],
      },
      boxShadow: {
        custom: "0 10px 15px 0 rgb(0 0 0 / 40%)",
      },
    },
  },
  plugins: [
    // ...
    forms,
  ],
})
