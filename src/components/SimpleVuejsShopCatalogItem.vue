<template>
  <div class="SimpleVuejsShopCatalogItem">
    <div class="row">
      <img :src="require('../assets/'+image)" width="100%" alt="img-1.jpg">
      <div class="name-and-price">
        <span class="float-left name">{{ name }}</span>
        <span class="float-right price">{{ price }}$</span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

export default {
  name: 'SimpleVuejsShopCatalogItem',
  props: ['name', 'price', 'image']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.SimpleVuejsShopCatalogItem {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 16px 0px;
  background-color: #fff;
  border-radius: 9px;
  overflow: hidden;
  transition: 0.4s;
}

.SimpleVuejsShopCatalogItem:hover {
  box-shadow: none;
  transition: 0.4s;
}

.name-and-price {
  width: 100%;
  padding: 10px;
  font-weight: 100;
  font-size: 20px;
}

.price {
  color: #3EBF17;
}
</style>
