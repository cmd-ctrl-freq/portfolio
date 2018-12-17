<template>
  <v-app>
    <v-layout>
      <v-flex>
          <v-img :src="bannerImg" alt="Image failed to load." aspect-ratio="2.75" max-height="15em"></v-img>
          <v-toolbar inverted-scroll>
            <v-toolbar-title class="text-uppercase">
              <span>David Fentz</span>
              <span class="font-weight-light"> Portfolio</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
              flat
              target="_blank"
            >
              <span class="mr-2">About Me</span>
            </v-btn>
            <v-btn
              flat
              target="_blank"
            >
              <span class="mr-2">Projects</span>
            </v-btn>
            <v-btn
              flat
              target="_blank"
            >
              <span class="mr-2">Experiences</span>
            </v-btn>
          </v-toolbar>
        <v-card>
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
      bannerImg: require('./assets/myface.jpg'),
    };
  },
};
</script>
