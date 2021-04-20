import "windi.css"
import "./index.css"
import { ViteSSG } from "vite-ssg"
// import { createApp } from "vue"
import App from "./App.vue"

// import { createRouter, createWebHistory } from "vue-router"
import routes from "pages-generated"

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// })

// const app = createApp(App)
// app.use(router)
// app.mount("#app")

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior: () => {
      return { top: 0, behavior: "smooth" }
    },
  },
  (_ctx) => {},
)
