<template>
  <v-container  fluid grid-list-md5>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md4>
        <v-card
        height="300">
          <iframe
          width="100%"
          height="100%"
          src="https://www.youtube-nocookie.com/embed/WSAjLlHCzkE"
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
              I have been fascinated with <a href="https://en.wikipedia.org/wiki/Tensegrity">
              tensegrity</a> ever since I first cracked open my
              copy of <a href="https://www.amazon.com/Synergetics-Explorations-Geometry-Buckminster-Fuller/dp/002541870X/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1546279637&sr=8-2">
              Synergetics</a> by Buckminster Fuller. If you've never encountered his work,
              and you're courageous I highly reccomend this tome. It is, hands down, the most
              important work of literature that I have ever (partailly) read. I'd put it on the
              same level as the Bhagavad Gita.
              </p>
              <p>
                I really wanted to explore the possibilities of building tensegrity structures,
                but I also wanted to play with microcontrollers and learn to solder as I had
                just gotten my Hakko FX-888D(and I am still in love years later). So, why not
                combine the two interests? The video in figure 1 shows my first test of
                <a href="https://github.com/bomjumaku/Tensegrity_Tower/blob/master/main.c">
                the C code which is running the animations</a>.
              </p>
              <p>
                This was really just to ensure that I was driving the LEDs properly becore soldering
                on the other lengths.
              </p>
          </v-flex>
      </v-flex>
      <v-flex d-flex xs12 sm6 md4>
        <v-card
        height="300">
          <iframe
          width="100%"
          height="100%"
          src="https://www.youtube-nocookie.com/embed/1Yq-MAyzhYM"
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
              Figure 2 shows the second test. The tower, once built, was to be 4 stories
               tall, requiring 4 segments of LEDs. I needed to verify that I could run
               animations across all 4 segments.
              </p>
          </v-flex>
      </v-flex>
      <v-flex d-flex xs12 sm6 md4>
        <v-card
        height="300">
          <iframe
          width="100%"
          height="100%"
          src="https://www.youtube-nocookie.com/embed/3sNhw1Zoaao"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
          <p id="image-captions" style="text-indent: 0em;">
          (figure 3)
          </p>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md8>
          <v-flex id="Section1">
              <p>
              Figure 3 is really a combination of the first two tests, just to verify that
              all my connections were mechanically and electrically stable before building
              the tower and attaching the LED strips.
              </p>
          </v-flex>
      </v-flex>
      <v-flex d-flex xs12 sm6 md4>
        <v-card
        height="300">
          <iframe
          width="100%"
          height="100%"
          src="https://www.youtube-nocookie.com/embed/zWC6X0GnAXY"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
          <p id="image-captions" style="text-indent: 0em;">
          (figure 4)
          </p>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md8>
          <v-flex id="Section1">
              <p>
              Figure 4 is the final product. The code linked above is exactly what you see running
              in this video. Building the tower and learning how to tie a
              <a href="https://en.wikipedia.org/wiki/Trucker%27s_hitch">truker's hitch</a>
              was 1/2 of the challenge and the fun. Unfortunately I didn't capture any of
              the knotty business on video.
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
