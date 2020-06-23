<template>
  <div id="app">
    <div class="sidenav">
      <a href="#about">
        <router-link to="/">Accueil</router-link>
      </a>
      <a href="#services">
        <router-link to="/Services">Services</router-link>
      </a>
      <a href="#clients">
        <router-link to="/users">Utilisateurs</router-link>
      </a>
      <a href="#events">
        <router-link to="/events">Evénements</router-link>
      </a>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
//import axios from "axios";
export default {
  name: "App",
  components: {},
  data() {
    return {};
  }
};
</script>

<style>
</style>
