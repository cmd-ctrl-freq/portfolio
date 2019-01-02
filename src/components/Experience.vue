<template>
    <v-container>
      <v-container>
        <v-layout
        align-center
        column
        justify-center>
        <a hidden :href="myResume" download>Looking for my Resume?</a>
        </v-layout>
      </v-container>
      <v-container id='Timeline' class="hidden-sm-and-down">
        <v-timeline>
          <v-timeline-item
            v-for="event in History"
            :key="event.description"
            color="red lighten-2"
            large
          >
            <span slot="opposite">{{event.time}}</span>
            <v-card class="elevation-2">
              <v-card-title class="headline">{{event.description}}</v-card-title>
              <v-card-text>
                {{event.details}}
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-container>
      <v-container id='Timeline' class="hidden-md-and-up">
        <v-timeline dense>
          <v-timeline-item
            v-for="event in History"
            :key="event.description"
            color="red lighten-2"
            large
          >
            <v-card class="elevation-2">
              <v-card-title class="headline">
                {{ event.description }} ({{ event.time }})
              </v-card-title>
              <v-card-text>
                {{event.details}}
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-container>
    </v-container>
</template>

<script>
export default {
  data() {
    return {
      // myResume: require('../assets/DavidFentzResume.pdf'),
      History: [
        {
          time: '2011',
          description: 'Purdue University',
          details: 'This was my first foray into academia, and I didn\'t really have any idea what I wanted to do'
           + ' so I studied Mechanical Engineering for a year. In my second year I studied Film & Video before reading '
           + '"The Way of Zen" by Alan Watts and subsequently dropping out. I built the foundation for my engineering mindset '
           + 'during this period of time, and developed capacities to analyze finer media (which I now consider invaluable) '
           + 'from my studies in liberal arts.',
        },
        {
          time: '2013',
          description: 'Summer Kitchen Family Farm',
          details: 'After dropping out of college with the idea that I would become a buddhist monk (You can '
          + 'draw your own conclusions about how that went, haha), I decided to spend the summer working on '
          + 'organic farms. I got really lucky and landed in Fayetteville Arkansas with Mariah and Ira White. '
          + 'I fed & milked cows, planted basil, learned to brew mead, and hiked in the mountains. I learned a LOT '
          + 'about where my food comes from and what a happy family looks like.',
        },
        {
          time: '2014',
          description: 'Starbucks & ASU',
          details: 'After deciding that becoming a farmer was not the optimal path for my life (enjoyable as it was) '
          + 'I joined Starbucks as a Barista and started looking for opportunities to get an education. Starbucks had a '
          + 'minimal tuition assistance program at the time, so I spend about a year re-building my GPA at Purdue before '
          + 'being accepted at ASU as a Software Engineering major. I spent a few years working part time and going to '
          + 'school full time.',
        },
        {
          time: 'June-August 2018',
          description: 'Application Security Internship',
          details: 'The culmination of all of that work was my internship with the Application Security team at Starbucks. '
          + 'This was an amazing experience inside and outside of the office. I made life-long friends and professional '
          + 'contacts that I still talk with today. I learned the basics of penetration testing web applications and Android '
          + 'applications. During this period of time I also built the coolest thing to date, a service/tool which scans GitHub '
          + 'for leaked information. The cherry on top... it actually returns repositories containing sensitive information.',
        },
        {
          time: '2018-Present',
          description: 'Keyot',
          details: 'I\'m employed as a Software Developer Consultant with Keyot, and will be working with Principal Financial '
          + 'Group in Des Moines, Iowa. I\'m finishing up my degree, and plan to pivot my education to offensive security in '
          + 'the near future.',
        },
      ],
    };
  },
};
</script>

<style>
#Timeline{
  border-color: black;
  border-style: solid;
  border-width: 2px;
  border-radius: 5px;
}
</style>
