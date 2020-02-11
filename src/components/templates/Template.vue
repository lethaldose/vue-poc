<template>
  <TemplateList :templates="templates" @on-search-query="searchTemplates" />
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
  async created() {
    await this.getAllTemplates()
  },
  methods: {
    ...mapActions("templates", ["getAllTemplates"]),
    async searchTemplates({searchQuery}) {
      await this.getAllTemplates(searchQuery)
    },
  },
}
</script>

<style scoped lang="stylus"></style>
