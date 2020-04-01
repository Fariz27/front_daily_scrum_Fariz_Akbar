<template>
  <div id="app">
    <div class="container-scroller">
      <router-view name="header"/>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      status_login: '',
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
