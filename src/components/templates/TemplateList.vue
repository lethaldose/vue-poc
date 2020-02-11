<template>
  <v-container>
    <v-row>
      <v-col class="mb-4">
        <h1 class="display-1 mb-3">
          Template list
        </h1>
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
