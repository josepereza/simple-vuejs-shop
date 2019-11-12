<template>
  <div id="app">
    <simple-vuejs-shop-header></simple-vuejs-shop-header>
    <router-view></router-view>
    <simple-vuejs-shop-footer></simple-vuejs-shop-footer>
  </div>
</template>

<script>
import SimpleVuejsShopHeader from './components/SimpleVuejsShopHeader'
import SimpleVuejsShopFooter from './components/SimpleVuejsShopFooter'

export default {
  name: 'app',
  components: {
    SimpleVuejsShopHeader, //The two syntaxes means the same
    SimpleVuejsShopFooter: SimpleVuejsShopFooter //The two syntaxes means the same
  }
}
</script>

<style>
#app {
  font-family: Montserrat, 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}
</style>
