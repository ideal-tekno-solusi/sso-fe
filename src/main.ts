import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"
import { routes } from "./routes"
import "./style.css"

const history = createWebHistory()
const router = createRouter({ history, routes })
const app = createApp(App)

router.beforeEach((to, _, next) => {
  const title = to.meta.title as string
  const siteName = import.meta.env.VITE_SITE_NAME

  if (title) {
    document.title = `${title} | ${siteName}`
  } else {
    document.title = siteName
  }

  next()
})

app.use(router)
app.mount("#app")

