<template>
    <main class="flex-grow">
    <nav>
    <router-link  to="/">Home</router-link> |
    <router-link  to="/match">Match</router-link>
    </nav> 
    <router-view/>
  </main>
  <FooterVue/>
  </template>


<script>
import FooterVue from './components/FooterVue.vue';
  export default {
    components: {
      FooterVue,
  },
  methods: {
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height:100vh;
  display: flex;
  flex-direction: column;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
body {
  background-color: #d9d9d9;
  
}
html, body {
  height: 100%;
}
</style>
