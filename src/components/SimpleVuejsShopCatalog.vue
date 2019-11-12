<template>
  <div class="SimpleVuejsShopCatalog row">
    <div class="offset-2 col-8">
      <div class="row">
        <simple-vuejs-shop-catalog-item v-bind:key="product" v-for="product in products" :name="product.name" :price="product.price" :image="product.image" class="col-3" ></simple-vuejs-shop-catalog-item>
      </div>
    </div>
  </div>
</template>

<script>
import SimpleVuejsShopCatalogItem from './SimpleVuejsShopCatalogItem'

export default {
  name: 'SimpleVuejsShopCatalog',
  components: {
    SimpleVuejsShopCatalogItem
  },
  data() {
    return {
      products: null
    }
  },
  created() {
    fetch('http://localhost:5500/data.json')
        .then(response => {
          return response.json()
        })
        .then(data => {
          this.products = data.products
        })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .SimpleVuejsShopCatalog {
    margin: 60px 0;
  }
</style>
