<template>
  <div id="app">
    <Myheader></Myheader>
    <div class="mainWrapper">
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
  .mainWrapper{
    padding: 60px 50px;
  }

  /* 全局 浮动阴影 */
  .hover-shadow {
    transition: transform .3s ease-in-out, box-shadow .3s cubic-bezier(.47, 0, .745, .715), border .3s linear .1s;
  }

  .hover-shadow:hover {
    box-shadow: 0 10px 50px rgba(51, 51, 51, .25);
    -webkit-transform: translateY(-10px);
    -moz-transform: translateY(-10px);
    transform: translateY(-10px)
  }
</style>
