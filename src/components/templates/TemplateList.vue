<template>
  <v-container>
    <v-row class="mb-4">
      <v-col>
        <h1 class="display-1 mb-3">
          Template list
        </h1>
      </v-col>
      <v-col>
        <v-text-field
          v-model="searchQuery"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          @keyup.enter="onSearchQuery"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-data-table :headers="headers" :items="templates" :items-per-page="5" class="elevation-2"></v-data-table>
  </v-container>
</template>

<script>
export default {
  name: "TemplateList",
  props: {
    templates: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      searchQuery: "",
      headers: [
        {
          text: "Name",
          align: "left",
          value: "name",
        },
        {text: "Type", value: "type"},
        {text: "Enabled", value: "enabled"},
        {text: "Created At", value: "created"},
      ],
    }
  },
  methods: {
    onSearchQuery() {
      this.$emit("on-search-query", {searchQuery: this.searchQuery})
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus"></style>
