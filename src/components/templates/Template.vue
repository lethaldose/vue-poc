<template>
  <TemplateList :templates="templates" />
</template>

<script>
import TemplateList from "./TemplateList"
import Template from "@/models/template"

export default {
  name: "TemplateContainer",
  components: {
    TemplateList,
  },
  computed: {
    templates() {
      return Template.getDummyList()
    },
  },
}
</script>

<style scoped lang="stylus"></style>
