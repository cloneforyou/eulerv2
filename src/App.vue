<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline">
        <span class="mr-1 display-1">EulerTour</span>
        <span class="font-weight-light">v2</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        height="100%"
        href="https://github.com/eulertour/eulerv2"
        target="_blank"
      >
        <v-icon class="display-2">mdi-github-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <MobjectLabContainer />
    </v-content>
  </v-app>
</template>

<script>
import MobjectLabContainer from './components/MobjectLabContainer.vue'

export default {
  name: 'App',
  components: {
    MobjectLabContainer,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
.position-relative {
  position: relative;
}
</style>

<style scoped>
.v-app-bar.v-app-bar--fixed {
  /* .CodeMirror-vscrollbar has z-index: 6 */
  z-index: 10;
}
</style>
