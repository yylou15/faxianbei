<template>
  <div id="app">
    <Myheader></Myheader>
    <div style="padding: 110px 50px">
      <router-view/>
    </div>
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
  font-family: 'AvenirTripVideo', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #efefef;
  min-width: 1000px;
}

  a{
    text-decoration: none;
    font-family: "Microsoft YaHei",serif;
  }
  a:link{
    color: #30a3f5;
  }
  a:visited{
    color: #30a3f5;
  }
  a:hover{
    color: #4b72ff;
  }
  a:active{
    color: #4b72ff;
  }
</style>
