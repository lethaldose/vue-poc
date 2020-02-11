<template>
  <TemplateList :templates="templates" />
</template>

<script>
import TemplateList from "./TemplateList"
import {mapState, mapActions} from "vuex"

export default {
  name: "TemplateContainer",
  components: {
    TemplateList,
  },
  computed: {
    ...mapState("templates", {
      templates: (state) => state.templates,
    }),
  },
  methods: {
    ...mapActions("templates", ["getAllTemplates"]),
  },
  async created() {
    await this.getAllTemplates()
  },
}
</script>

<style scoped lang="stylus"></style>
