<template>
  <div id="app">
    <NavPanel/>
  </div>
</template>

<script>
import NavPanel from './components/NavPanel.vue';


// Alert disabled for testing
window.alert('This website is under construction.\nStart Date: 12/8/2018  \n Approximate End Date: 12/29/2018');

export default {
  name: 'app',
  components: {
    NavPanel,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: bisque;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
