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
        Title: 'Emotional Baggage',
        image: image1,
        description: 'This is an ongoing project, inspired by numerous broken relationships.',
      },
      {
        Title: 'Intellectual Rigor',
        image: image1,
        description: 'This project is aimed at makin\' mah brain work good.',
      },
      {
        Title: 'Estrogeneration',
        image: image1,
        description: 'This is a project intended to reduce xenoestrogens from my diet/environment',
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

