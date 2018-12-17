<template>
  <v-app>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-img src="" alt="Image failed to load." aspect-ratio="2.75"></v-img>
          <v-toolbar>
            <v-toolbar-title class="text-uppercase">
              <span>David Fentz</span>
              <span class="font-weight-light"> Portfolio</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
              flat
              target="_blank"
            >
              <span class="mr-2">Example Button</span>
            </v-btn>
          </v-toolbar>
          <v-content>
            <HelloWorld/>
          </v-content>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';


export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      //
    };
  },
};
</script>
