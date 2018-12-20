<template>
    <v-container>
      <v-container>
        Ideally, I'll add some text here explaining what this section is!
      </v-container>
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
</template>

<script>
export default {
  data() {
    return {
      History: [
        {
          time: '1921',
          description: 'world war 2',
          details: 'I dun shot down some japs',
        },
      ],
    };
  },
};
</script>

<style>

</style>
