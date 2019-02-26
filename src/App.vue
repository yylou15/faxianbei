<template>
  <div id="app">
    <Myheader></Myheader>
    <!--<router-view/>-->
  </div>
</template>

<script>
import Myheader from '@/components/Myheader/'
export default {
  name: 'App',
  components: { Myheader }
}
</script>

<style>
  body{
    margin: 0;
  }
#app {
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
