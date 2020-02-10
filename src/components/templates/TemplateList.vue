<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Template list
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TemplateList",
  props: {
    msg: {
      type: String,
      default: "Template List",
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus"></style>
