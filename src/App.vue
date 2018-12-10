<template>
  <div id="app">
    <Banner/>
    <NavPanel/>
    <SectionContent msg="This portion is for section content."/>
  </div>
</template>

<script>
import Banner from './components/Banner.vue';
import NavPanel from './components/NavPanel.vue';
import SectionContent from './components/SectionContent.vue';

// Alert disabled for testing
window.alert('This website is under construction.\nStart Date: 12/8/2018  \n Approximate End Date: 12/29/2018');

export default {
  name: 'app',
  components: {
    Banner,
    NavPanel,
    SectionContent,
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
