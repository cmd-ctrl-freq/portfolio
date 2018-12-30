<template>
  <v-container  fluid grid-list-md5>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md4>
        <v-card>
          <iframe
          width="100%"
          height="100%"
          src="https://www.youtube-nocookie.com/embed/2QDRJ_KfMeQ"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md8>
        <v-layout row wrap>
          <v-flex id="Section1">
              <p>
              RF Replay Project
              </p>
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
    };
  },
};
</script>

<style scoped>
#Section1{
}
p{
  text-indent: 1.5em;
}
</style>
