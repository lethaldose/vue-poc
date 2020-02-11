<template>
  <v-data-table :headers="headers" :items="templates" :items-per-page="5" class="elevation-2"></v-data-table>
</template>

<script>
export default {
  name: "TemplateTable",
  props: {
    templates: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus"></style>
