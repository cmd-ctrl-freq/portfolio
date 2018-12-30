<template>
  <v-container  fluid grid-list-md5>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md4>
        <v-card>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md8>
        <v-layout row wrap>
          <v-flex id="AboutMeMessage">
              <p>
              Power Supply Project
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

<style>
#Section1{
  font-family: 'Robot';
  font-size: 1.3em;
}
#AboutMeMessage{
  margin: 2em;
}
p{
  text-indent: 1.5em;
}
</style>
