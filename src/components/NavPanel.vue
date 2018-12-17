<template>
 <div>
   <Banner/>
   <ul>
     <li>
       <p id="x" v-on:click="testfun()" >About Me</p>
     </li>
     <li>
       <p>Projects</p>
     </li>
     <li>
       <p>Experience</p>
     </li>
   </ul>
   <SectionContent/>
 </div>
 
</template>

<script>
import Banner from './Banner.vue';
import SectionContent from './SectionContent.vue';

export default {
  name: 'NavPanel',
  components: {
    Banner,
    SectionContent,
  },
  data() {
    return{
    }
  },
  methods: {
    testfun() {
      console.log('The About Me button was clicked.');
      // if(document.getElementById("x").innerHTML == "About Me"){
      //   document.getElementById("x").innerHTML = "About You"
      // } else{
      //   document.getElementById("x").innerHTML = "About Me"
      // }
    }
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 40;
  border: #000000;
  border-style: solid;
  border-radius: 4px;
}
li {
  display: inline-block;
  margin: 0 2em 0 0;
  font-size: 1.2em; 
  cursor: pointer;
}
a {
  color: #42b983;
}
</style>
