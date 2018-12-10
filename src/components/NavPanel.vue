<template>
 <div>
   <ul>
     <li>
       <p>About Me</p>

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
  props: {
    msg: String,
  },
  data() {
    return {
      selection: 'This is the current selection',
    };
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 40;
}
li {
  display: inline-block;
  border: #000000;
  border-style: solid; 
  margin: .25em .5em .25em .5em;
}
a {
  color: #42b983;
}
</style>
