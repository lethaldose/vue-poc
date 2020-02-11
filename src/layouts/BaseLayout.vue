<template>
  <v-app :class="$style.container">
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <SideMenu />

    <v-content>
      <RouterView />
    </v-content>

    <v-footer color="primary" app>
      <span class="white--text">&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import SideMenu from "./SideMenu"

export default {
  name: "BaseLayout",
  components: {
    SideMenu,
  },
}
</script>

<style lang="stylus" module>
.container {
  margin: 0 auto;
}
</style>
