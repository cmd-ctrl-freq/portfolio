<template>
  <v-container fluid grid-list-md5>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md4>
        <v-card>
          <v-img
          :src="image1" 
          />
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md8>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-card id="Section1Text">
              <v-card-text id="Section1">{{ AboutMeMessage }}</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      image1: require('../assets/6223.jpeg'),
      AboutMeMessage: `Hello there,
      My name is David and you're on my portfolio. This isn't LinkedIn, so I'm going to go into a bit more detail about myself
      , my hobbies, and my experiences. Hopefully a bit more of my personality can shine through here!`,
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
