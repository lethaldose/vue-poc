import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../components/home/Home.vue"
import TemplateList from "@/components/templates/TemplateList.vue"
import BaseLayout from "@/layouts/BaseLayout"

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
      {
        path: "templates",
        name: "templates",
        component: TemplateList,
      },
    ],
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
