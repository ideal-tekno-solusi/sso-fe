import type { RouteRecordRaw } from "vue-router"
import LoginPage from "./pages/LoginPage.vue"
import NotFoundPage from "./pages/NotFoundPage.vue"

export const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/login" },
  {
    path: "/login",
    name: "login",
    meta: { title: "Login" },
    component: LoginPage,
  },
  {
    path: "/:any(.*)*",
    name: "not-found",
    meta: { title: "Not Found" },
    component: NotFoundPage,
  },
]
