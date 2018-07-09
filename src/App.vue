<template>
  <div id="app">
    <div class="container">
        <pp-header></pp-header>
    </div>
    <pp-navbar></pp-navbar>
  <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Navbar from "./components/Navbar.vue"

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
      ppHeader: Header,
      ppNavbar: Navbar
  }
}

</script>

<style>

</style>
