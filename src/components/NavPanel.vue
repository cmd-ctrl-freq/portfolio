<template>
 <div>
   <ul>
     <li>
       <p onclick="testfun" >About Me</p>
     </li>
     <li>
       <p>Projects</p>
     </li>
     <li>
       <p>Experience</p>
     </li>
   </ul>
 </div>
 
</template>

<script>
export default {
  name: 'NavPanel',
  data() {
    return{
    }
  },
  methods: {
    testfun() {
      console.log('The About Me button was clicked.');
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
}
a {
  color: #42b983;
}
</style>
