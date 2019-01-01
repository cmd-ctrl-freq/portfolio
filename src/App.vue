<template>
  <v-app>
    <v-layout>
      <v-flex>
        <v-flex>
          <div v-if="currentSelection === 'About Me'">
            <v-img height="300" :src="bannerImg1">
            <v-layout
            align-center
            column
            justify-center
            fill-height="300"
          >
            <h1 id="Banner-Message" class="text-uppercase display-3">About Me</h1>
          </v-layout>
          </v-img>
        </div>
        <div v-else-if="currentSelection === 'Projects'">
          <v-img height="300" :src="bannerImg1">
            <v-layout
            align-center
            column
            justify-center
            fill-height="300"
          >
            <h1 id="Banner-Message" class="text-uppercase display-3">Projects</h1>
          </v-layout>
          </v-img>
        </div>
        <div v-else-if="currentSelection === 'Experience'">
          <v-img height="300" :src="bannerImg1">
            <v-layout
            align-center
            column
            justify-center
            fill-height="300"
          >
            <h1 id="Banner-Message" class="text-uppercase display-3">Experience</h1>
          </v-layout>
          </v-img>
        </div>
        </v-flex>
          <v-toolbar>
            <v-flex class="hidden-xs-only">
              <v-toolbar-title class="text-uppercase">
              <span>David Fentz</span>
              <span class="font-weight-light"> Portfolio</span>
              </v-toolbar-title>
            </v-flex >
            <v-spacer></v-spacer>
            <v-flex class="hidden-sm-and-up">
              <v-toolbar-items>
                <v-btn
                flat
                target="_blank"
                @click='currentSelection="About Me"'
                >
                <span>About Me</span>
                </v-btn>
                <v-btn
                  flat
                  target="_blank"
                  @click='currentSelection = "Projects"; currentProject = "None"'
                >
                  <span>Projects</span>
                </v-btn>
                <v-btn
                  flat
                  target="_blank"
                  @click='currentSelection="Experience"'
                >
                  <span>Experience</span>
                </v-btn>
            </v-toolbar-items>
          </v-flex>
          <v-toolbar-items class="hidden-xs-only">
                <v-btn
                flat
                target="_blank"
                @click='currentSelection="About Me"'
                >
                <span>About Me</span>
                </v-btn>
                <v-btn
                  flat
                  target="_blank"
                  @click='currentSelection = "Projects"; currentProject = "None"'
                >
                  <span>Projects</span>
                </v-btn>
                <v-btn
                  flat
                  target="_blank"
                  @click='currentSelection="Experience"'
                >
                  <span>Experience</span>
                </v-btn>
            </v-toolbar-items>
          </v-toolbar>
        <v-card>
          <v-content v-if="currentSelection === 'About Me'">
            <AboutMe/>
          </v-content>
          <v-content v-if="currentSelection === 'Experience'">
            <Experience/>
          </v-content>
          <v-content v-if="currentSelection === 'Projects'">
            <Projects
            v-bind:currentProject='currentProject'
            v-on:changeProject='updateProj($event)'/>
          </v-content>
        </v-card>
        <!-- make this div a <ul> wrapped element on mobile -->
        <div id="footer-div" class="hidden-xs-only">
          <a class='footer-links' href="https://www.linkedin.com/in/davidfentz/">LinkedIn</a>
          <a class='footer-links' href="https://github.com/bomjumaku">Github</a>
          <a class='footer-links' href="https://github.com/bomjumaku/portfolio">This Site's Source Code</a>
        </div>
        <div id="footer-div" class="hidden-sm-and-up">
          <a class='footer-links' href="https://www.linkedin.com/in/davidfentz/">LinkedIn</a>
          <br>
          <a class='footer-links' href="https://github.com/bomjumaku">Github</a>
          <br>
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
      currentProject: 'None',
    };
  },
  methods: {
    updateProj(proj) {
      this.currentProject = proj;
    },
  },
};
</script>

<style scoped>
#footer-div {
  text-align: center;
  margin: auto;
  padding: 2em;
}
.footer-links{
  padding: 2em;
}
#Banner-Message {
  color: white;
}
</style>
