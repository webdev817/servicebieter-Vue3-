<template>
  <div id="app">
    <!-- <BePartner/> -->
    <router-view/>
  </div>
</template>

<script>
  import BuyServices from './views/BuyServices.vue'
  import BePartner from './views/BePartner.vue'

  export default {
    name: 'App',
    components: {
      BePartner
    }
  }
</script>

<style>

  @import "./assets/css/bootstrap.min.css";
  @import "./assets/css/stylesheet.css";
  @import "./assets/css/owl.carousel.min.css";
  @import "./assets/SpryAssets/SpryTabbedPanels.css";

  @import "./assets/font-awesome/css/font-awesome.min.css";

</style>
