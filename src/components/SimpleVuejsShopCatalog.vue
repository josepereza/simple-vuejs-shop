<template>
  <div class="SimpleVuejsShopCatalog row">
    <div class="offset-1 col-10">
      <div class="row">
        <router-link v-bind:key="product.id" v-for="product in productsToShow" :to="'/product-details/'+product.id" class="col-3 router-link">
          <div class="row">
            <simple-vuejs-shop-catalog-item :name="product.name" :price="product.price" :image="product.image" class="col-12" ></simple-vuejs-shop-catalog-item>
          </div>
        </router-link>

        <div class="offset-5 col-2 d-flex justify-content-around pagination-container">
          <div class="pagination-item" :class="{ active: currentPage == p }" @click="changePage(p)" :key="p.id" v-for="p in paginations">{{ p }}</div> <!-- Undefined key to avoid error while trying to find another solution -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import SimpleVuejsShopCatalogItem from './SimpleVuejsShopCatalogItem'

export default {
  name: 'SimpleVuejsShopCatalog',
  components: {
    SimpleVuejsShopCatalogItem
  },
  data() {
    return {
      products: [],
      itemsNumberPerPage: 8,
      paginations: 3,
      currentPage: 1
    }
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    }
  },
  created() {
    axios.get('http://localhost:5500/data.json') //find data.json in root directory. Move it to a folder with only index.html and data.json, run it in a different port (ex. if you're running vuejsshop in :8080, run data in :5500 because vue-router will block access to data.json if you run it in the same port that vujsshop)
        .then(response => {
          this.products = response.data.products
        })
  },
  computed: {
    productsToShowLimit() {
      return this.currentPage*this.itemsNumberPerPage
    },
    productsToShow() {
      return this.products.slice(this.productsToShowLimit - this.itemsNumberPerPage, this.productsToShowLimit)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .SimpleVuejsShopCatalog {
    margin: 60px 0;
  }

  .router-link {
    max-width: 20%; /* Handling spacing between elements */
    margin-top: 4%; /* Handling spacing between elements */
    margin-left: 4%; /* Handling spacing between elements */
    color: inherit;
  }

  .pagination-container {
    margin: 50px auto 0 auto;
    font-size: 30px;
    font-weight: 100;
  }
  
  .pagination-item {
    cursor: pointer;
  }

  .pagination-item:hover {
    text-decoration: underline;
  }

  .pagination-item.active {
    font-weight: bold;
    text-decoration: underline;
  }

</style>
