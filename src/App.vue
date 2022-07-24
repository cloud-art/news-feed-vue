<template>
  <div id="app">
    <div class="container">
      <NewsPanel />
    </div>
  </div>
</template>

<script>
import NewsPanel from './components/NewsPanel.vue'

export default {
  name: 'App',
  components: {
    NewsPanel
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
.designed-color{
    color: #C51162;
}
</style>
