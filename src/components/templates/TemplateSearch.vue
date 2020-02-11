<template>
  <v-text-field
    v-model="searchQuery"
    append-icon="mdi-magnify"
    label="Search"
    single-line
    hide-details
    @keyup.enter="onSearchQuery"
  ></v-text-field>
</template>

<script>
export default {
  name: "TemplateSearch",
  data() {
    return {
      searchQuery: "",
    }
  },
  methods: {
    onSearchQuery() {
      this.$emit("on-search-query", {searchQuery: this.searchQuery})
    },
  },
}
</script>
