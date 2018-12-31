<template>
  <v-container  fluid grid-list-md5>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md4>
        <v-card
        height="300">
          <iframe
          height="100%"
          width="100%"
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
              The video there is the end product of a process that lasted months, and took me
               from 100% noob to 90% noob within the world of software defined radio (SDR).
              </p>
              <p>
                 There's actually a lot of work that goes into SDR projects. You need to understand
                 the software portion (be that <a href="https://www.gnuradio.org/">GNU Radio</a>,
                  <a href="https://airspy.com/download/">SDR#</a> , or 
                 <a href="https://github.com/jopohl/urh">Universal Radio Hacker</a>), you need to
                 understand the fundamental principles of radio frequency communication protocols,
                 and ideally, you'll have some understanding digital signal processing. I had
                 none of those when I started, so this was a rough process to say the least. Luckilly
                 I had a ton of help from the guys over at <a href="https://greatscottgadgets.com/sdr/">
                 Great Scott Gadgets</a>.
              </p>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm6 md8>
        <v-layout row wrap>
          <v-flex id="Section1">
              <p>
               Instead of providing a complete tutorial on how to pull off the attack, I'll go over the general
               technique at a high level. Here's the deal, your KeyFob produces specific vibrations in the
               electromagnetic material within which we are all immersed. The first step in being able to
               mimic the behaviour of the Fob is to find the frequency that it comminicates at. There are
               standards which you could look into, but it always best to look up the FCC ID of
               your target device.
              </p>
               <p>
                 If you look at your Fob, you'll see an FCC ID printed somewhere (though it may be hidden). It's
                 mandated by law that any device communicating within a specified set of radio frequencies
                 define its behaviour and publish it publicly on the FCC's website. (it's necessary for 
                 various reasons, but it's also good news for hackers) There are searchable
                  <a href="https://fccid.io/">databases</a> of all of this information, and there is a TON
                  of information.
               </p>
              
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm6 md4>
        <v-card
        height="300">
        <v-img :src="sdrcap"/>
        <p id="image-captions" style="text-indent: 0em;">
        (figure 1)
        </p>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md4>
        <v-card
        height="300">
        <v-img :src="sdrcap"/>
        <p id="image-captions" style="text-indent: 0em;">
        (figure 1)
        </p>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      sdrcap: require('../../assets/sdrcap.png'),
      image1: require('../../assets/sdrcap.png'),
      image2: require('../../assets/sdrcap.png'),
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
