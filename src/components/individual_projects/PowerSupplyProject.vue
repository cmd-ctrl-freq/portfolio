<template>
  <v-container  fluid grid-list-md5>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md4>
        <v-card
        height="300">
          <iframe
          width="100%"
          height="100%"
          src="https://www.youtube-nocookie.com/embed/7lWcj_Bjz60"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
          <p id="image-captions" style="text-indent: 0em;">
          (figure 1)
          </p>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md8>
          <v-flex id="Section1">
              <p>
              This was a pragmatically driven project. I had just bought some soldering equipment,
              and was really getting into electronics as a hobby. I needed a power supply to test
              circuits before final deployment, and I needed a fume extractor to save my lungs.
              Venting to the outdoors was not an option, so filtering was the next best thing.
              </p>
              <p>
              Figure 1 shows me testing the PC power supply that I had converted to a lab power
              supply
              with one of the 12v fans that are used in the fume extractor shown in figure 2. It's a
              pretty simple power supply. It's got 12v, 5v, 3.3v, and ground (with a few connections
              for each). I added an LED to indicate when everything is hot, and a switch so that I
              can power everything off without unplugging it.
              </p>
          </v-flex>
      </v-flex>
      <v-flex d-flex xs12 sm6 md4>
        <v-card
        height="300">
          <iframe
          width="100%"
          height="100%"
          src="https://www.youtube-nocookie.com/embed/5Cfl4ms9bu8"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
          <p id="image-captions" style="text-indent: 0em;">
          (figure 2)
          </p>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md8>
          <v-flex id="Section1">
              <p>
              Figure 2 shows my fume extractor, which takes the cake for the most
              hideous thing I have ever built with my hands. However, as you can see it
              is practical. It's using 3 12v fans from an old server so it's got a lot
              of power. In addition to that, the front swings open so that I can change
              out the layers of carbon/HEPA filters really quickly.
              </p>
              <p>
              And before you ask, no, I don't vape. That thing is used exclusively for
              testing airflow.
              </p>
          </v-flex>
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
  margin: 1em;
}
#image-captions{
  text-align: center;
}
p{
  text-indent: 1.5em;
}
</style>
