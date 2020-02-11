import TemplateList from "@/components/templates/TemplateList.vue"
import Template from "@/components/templates/Template.vue"

export default [
  {
    path: "templates",
    name: "templates",
    component: Template,
    children: [
      {
        path: "",
        name: "template-list",
        component: TemplateList,
      },
    ],
  },
]
