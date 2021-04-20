import { defineConfig } from "vite"
import Vue from "@vitejs/plugin-vue"
import Legacy from "@vitejs/plugin-legacy"
import Pages from "vite-plugin-pages"
import ViteComponents from "vite-plugin-components"
import ViteIcons, { ViteIconsResolver } from "vite-plugin-icons"
import WindiCSS from "vite-plugin-windicss"
import pkg from "./package.json"

export default defineConfig({
  optimizeDeps: {
    include: Object.keys(pkg.dependencies || {}),
    exclude: ["vue-demi"],
  },
  plugins: [
    // ...
    Vue(),
    Legacy(),
    Pages(),
    ViteComponents({
      customComponentResolvers: [
        ViteIconsResolver({
          componentPrefix: "",
          // enabledCollections: ['carbon']
        }),
      ],
    }),
    ViteIcons({
      // scale: '1.2',
      defaultStyle: "",
    }),
    WindiCSS({
      preflight: {
        enableAll: true,
      },
    }),
  ],
  ssgOptions: {
    script: "async",
    formatting: "minify",
  },
})
