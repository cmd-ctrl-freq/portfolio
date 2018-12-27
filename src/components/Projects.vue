<template>
  <v-container fluid grid-list-md5>
    <v-layout row wrap>
      <v-flex
      d-flex xs12 sm6 md4
      v-for="proj in myProjects"
      :key="proj.Title">
        <v-card>
          <v-img :src="proj.image"/>
          <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ proj.Title }}</h3>
            <div>{{ proj.description }} What's going on here!?</div>
          </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      image1: require('../assets/6223.jpeg'),
      myProjects: [
        {
          Title: 'Tensegrity Tower',
          image: require('../assets/6223.jpeg'),
          description: 'This Project...',
        },
        {
          Title: 'DIY Fume Extractor',
          image: require('../assets/6223.jpeg'),
          description: 'This Project...',
        },
        {
          Title: 'Lab Bench Power Supply',
          image: require('../assets/6223.jpeg'),
          description: 'This Project...',
        },
      ],
    };
  },
};
</script>

<style>
#Section1{
  font-family: 'Robot';
  font-size: 1.3em;
}
#Section1Text{
  background-color: goldenrod;
}
</style>
