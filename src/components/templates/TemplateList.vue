<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="display-1">
          Template list
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <TemplateSearch @on-search-query="searchTemplates" />
      </v-col>
    </v-row>
    <TemplateTable :templates="templates" />
  </v-container>
</template>

<script>
import TemplateTable from "./TemplateTable.vue"
import TemplateSearch from "./TemplateSearch.vue"
import {mapState, mapActions} from "vuex"

export default {
  name: "TemplateList",
  components: {
    TemplateTable,
    TemplateSearch,
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
