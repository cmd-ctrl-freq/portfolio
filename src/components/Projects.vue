<template>
  <v-flex>
    <v-container v-if="currentProject === 'None'" fluid grid-list-md5>
      <v-layout row wrap>
        <v-flex
        d-flex xs12 sm6 md4
        v-for="proj in myProjects"
        :key="proj.Title">
        <v-hover>
          <v-card
          slot-scope="{ hover }"
          :class="`elevation-${hover ? 12 : 2}`"
          @click='updateProject(proj.Title)'>
            <v-img :src="proj.image" height="300"/>
            <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ proj.Title }}</h3>
              <div>{{ proj.description }}</div>
            </div>
            </v-card-title>
          </v-card>
        </v-hover>
        </v-flex>
      </v-layout>
    </v-container>
    <v-flex v-if="currentProject === 'Tensegrity Tower'">
      <TowerProject/>
    </v-flex>
    <v-flex v-if="currentProject === 'Lab Bench Power Supply'">
      <PowerSupplyProject/>
    </v-flex>
    <v-flex v-if="currentProject === 'RF Replay Attack'">
      <RFReplayProject/>
    </v-flex>
  </v-flex>
</template>


<script>
import TowerProject from './individual_projects/TowerProject.vue';
import PowerSupplyProject from './individual_projects/PowerSupplyProject.vue';
import RFReplayProject from './individual_projects/RFReplayProject.vue';

export default {
  props: ['currentProject'],
  components: {
    TowerProject,
    PowerSupplyProject,
    RFReplayProject,
  },
  data() {
    return {
      image1: require('../assets/HoldingCoffeeInSeattle.jpeg'),
      myProjects: [
        {
          Title: 'Tensegrity Tower',
          image: require('../assets/TensegrityTower.png'),
          description: 'Building a completely useless and mesmerizing luminescent structure.',
        },
        {
          Title: 'Lab Bench Power Supply',
          image: require('../assets/PowerSupply.jpg'),
          description: 'Managing not to electrocute myself while converting a PC power supply'
          + ' to a bench power supply.',
        },
        {
          Title: 'RF Replay Attack',
          image: require('../assets/sdrcap.png'),
          description: 'Capturing Key-FOB RF packets and replaying them at will.',
        },
      ],
    };
  },
  methods: {
    updateProject(proj) {
      this.$emit('changeProject', proj);
    },
  },
};
</script>

<style scoped>
</style>
