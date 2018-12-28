<template>
    <v-container>
      <v-container>
        Ideally, I'll add some text here explaining what this section is!
      </v-container>
      <v-timeline class="dense-sm-and-down">
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
</template>

<script>
export default {
  data() {
    return {
      History: [
        {
          time: '2011',
          description: 'Purdue University',
          details: 'Studied Mechanical Engineering and Film & Video...',
        },
        {
          time: '2013',
          description: 'Summer Kitchen Family Farm',
          details: 'Fed & milked cows, planted basil, learned to brew mead, hiked in the mountains.',
        },
        {
          time: '2014',
          description: 'Starbucks & ASU',
          details: 'Started working as a barista and attending Arizona State University for Software Engineering.',
        },
        {
          time: 'June-August 2018',
          description: 'Application Security Internship',
          details: 'Worked with the amazing AppSec team at Starbucks. I developed a service which scans Github through their public API'
          + ' to detect leaked information. I also learned a bit about web pentesting and Andriod APK hacking.',
        },
        {
          time: '2018',
          description: 'Keyot',
          details: 'Accepted an offer with Keyot, a small consulting firm, as a Software Developer Consultant. ',
        },
      ],
    };
  },
};
</script>

<style>

</style>
