export default [
  {
    path: "/templates",
    name: "templates",
    meta: {
      requiresAuth: true,
    },
    component: () => import(/* webpackChunkName: "profile" */ "@/components/Templates.vue"),
  },
]
