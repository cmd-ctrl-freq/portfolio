<template>
  <v-container>
    <v-flex xs4>
      <v-card>
        <v-img
      :src="image1"
      aspect-ratio="1"
      class="grey lighten-2"
    ></v-img>
      </v-card>
    </v-flex>
    <v-flex xs4>
      <v-card> 
        Hey Test
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      image1: require('../assets/6223.jpeg'),
    };
  },
};
</script>

<style>

</style>
