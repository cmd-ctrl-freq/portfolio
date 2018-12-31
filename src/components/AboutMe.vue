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
          <v-flex id="AboutMeMessage">
              <p>
              Hello there, My name is David and (if you haven't noticed) you're on my portfolio.
               This isn't LinkedIn,
               so I'm going to go into a bit more detail about myself, my hobbies, and my
               experiences. Hopefully a bit more of my personality can shine through here!
              </p>
              <p>
                This space is built primarily as an exposition of computational prowess.
                However, I also want to give you some conception of what I'm like as a person.
                Here are a few fun facts:
              </p>
              <ul>
                <li> I love to cook. I'm currently perfecting my searing techniques after
                  immersing myself into the world of using sous vide for proteins.
                </li>
                <li> Mindfulness techniques are an important (and often underutilized)
                  set of tools in my arsenal for maintaining a semblance of sanity in
                   the modern world.
                </li>
                <li> If I had it my way, I would only wear toe shoes. I honestly can't stand
                  traditional footwear, so I'm almost always wearing some form of minimalist
                  shoe.
                </li>
                <li> I love coffee, tea, yerba mate, chocolate, etc. I have a lot of respect
                  for the chemical relationships which are formed between man and plant. I'm
                  really a purist when it comes to psychotropic botanicals, and I'm generally
                  picky about what I put on/into my body, so I geek out about how these substances
                  are grown, processed, transported, served, and consumed.
                </li>
                <li> I love hacking. My next career goal is to become a penetration tester for
                  an independant security firm or a red teamer for a larger business. I am so
                  interested in how computer (and physical) systems are intended to operate,
                  and how they fail to do so.
                </li>
              </ul>
              <p hidden>
                I'm pretty much always doing something interesting. If you've got interesting
                 problems to solve and you need help, or just have a random question, feel
                 free to contact me.
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
      image1: require('../assets/HoldingCoffeeInSeattle.jpeg'),
    };
  },
};
</script>

<style scoped>
p{
  text-indent: 1.5em;
}
</style>
