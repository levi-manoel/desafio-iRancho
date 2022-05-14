<template>
  <div id="app" class="container">
    <Header />
    <router-view class="p-5 bg-white"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: { Header }
}
</script>

<style lang="scss">
@import './assets/styles/variables';
@import './assets/styles/bootstrap';

html, body {
  background-image: url('https://images.pexels.com/photos/10635264/pexels-photo-10635264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
  background-size: cover;
}
</style>
