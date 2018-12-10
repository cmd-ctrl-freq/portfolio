<template>
 <div>
   <img alt="Banner Image" :src="bannerImage"  style="height:15em">
 </div>
</template>

<script>

export default {
  name: 'Banner',
  data() {
    return {
      bannerImage: require('../assets/404.gif'),
    };
  },
  methods: {
    updateBanner(newImage) {
      console.log('Banner image updated');
      bannerImage = newImage;
    },
  },
};

</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
