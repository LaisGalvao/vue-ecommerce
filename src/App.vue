<template>
  <div id="app">
    <HeaderComponent />
    <BannerComponent />
    <router-view></router-view>
    <FooterComponent />
  </div>
</template>

<script>
//views
import HeaderComponent from '@/components/HeaderComponent.vue';
import BannerComponent from '@/components/BannerComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import router from './router'
export default {
  components: { HeaderComponent, BannerComponent, FooterComponent },
  name: 'App',
  router
}
</script>

<style>
@import url(./assets/css/colors.scss);
#app {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
