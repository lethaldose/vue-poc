import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../components/home/Home.vue"
import BaseLayout from "@/layouts/BaseLayout"
import templateRoutes from "./template-routes"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "base",
    component: BaseLayout,
    children: [
      {
        path: "",
        name: "home",
        component: Home,
      },
      ...templateRoutes,
    ],
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
