<template>
  <v-app>
    <v-layout>
      <v-flex>
        <v-flex xs12>
          <div v-if="currentSelection === 'About Me'">
          <v-parallax :src="bannerImg1">
            <v-layout
            align-center
            column
            justify-center
          >
            <h1 class="text-uppercase display-3">About Me</h1>
          </v-layout>
          </v-parallax>
        </div>
        <div v-else-if="currentSelection === 'Projects'">
          <v-parallax :src="bannerImg1">
            <v-layout
            align-center
            column
            justify-center
          >
            <h1 class="text-uppercase display-3">Projects</h1>
          </v-layout>
          </v-parallax>
        </div>
        <div v-else-if="currentSelection === 'Experience'">
          <v-parallax :src="bannerImg1">
            <v-layout
            align-center
            column
            justify-center
          >
            <h1 class="text-uppercase display-3">Experience</h1>
          </v-layout>
          </v-parallax>
        </div>
        </v-flex>
          <v-toolbar >
            <v-toolbar-title class="text-uppercase">
              <span>David Fentz</span>
              <span class="font-weight-light"> Portfolio</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
              flat
              target="_blank"
              @click='currentSelection="About Me"'
            >
              <span class="mr-2">About Me</span>
            </v-btn>
            <v-btn
              flat
              target="_blank"
              @click='currentSelection="Projects"'
            >
              <span class="mr-2">Projects</span>
            </v-btn>
            <v-btn
              flat
              target="_blank"
              @click='currentSelection="Experience"'
            >
              <span class="mr-2">Experience</span>
            </v-btn>
          </v-toolbar>
        <v-card>
          <v-content v-if="currentSelection === 'About Me'">
            <AboutMe/>
          </v-content>
          <v-content v-if="currentSelection === 'Experience'">
            <Experience/>
          </v-content>
          <v-content v-if="currentSelection === 'Projects'">
            <Projects/>
          </v-content>
        </v-card>
        <div class='footer-div'>
          <a class='footer-links' href="https://www.linkedin.com/in/davidfentz/">LinkedIn</a>
          <a class='footer-links' href="https://github.com/bomjumaku">Github</a>
          <a class='footer-links' href="https://github.com/bomjumaku/portfolio">This Site's Source Code</a>
        </div>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import AboutMe from './components/AboutMe.vue';
import Experience from './components/Experience.vue';
import Projects from './components/Projects.vue';

window.alert('This website is under construction, updated daily.');

export default {
  name: 'App',
  components: {
    AboutMe,
    Projects,
    Experience,
  },
  data() {
    return {
      bannerImg1: require('./assets/myface.jpg'),
      currentSelection: 'About Me',
    };
  },
  methods: {
  },
};
</script>

<style scoped>
.footer-div {
  text-align: center;
  margin: auto;
  padding: 2em;
}
.footer-links{
  padding: 2em;
}
</style>
