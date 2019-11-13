<template>
  <div class="SimpleVuejsShopProductDetails row">
    <div class="col-6">
      <div class="row">
        <img class="offset-2 col-8" :src="require(`../assets/${product.image}`)" :alt="require(`../assets/${product.image}`)">
      </div>
    </div>

    <div class="col-5">
      <div class="row">
        <div class="col-12">
          <h1 class="product-name text-capitalize">{{ product.name }}</h1>
        </div>

        <div class="col-12 product-description-container">
          <span class="product-description">
            {{ product.description }}
          </span>
        </div>

        <div class="col-12 price-and-quantity-container">
          <div class="row">
            <span class="price-container col-6">
              <div class="row">
                <div class="col-3">Price:</div>
                
                <div class="col-6 text-left price">
                  {{ product.price }}$
                </div>
              </div>
            </span>

            <span class="quantity-container col-6">
              <div class="row">
                <div class="col-6 text-right">Quantity</div>
                
                <div class="col-6 manage-quantity text-right">
                  <font-awesome-icon @click="minus" :icon="['fas', 'minus']" />
                  <input type="number" class="quantity" v-model="quantity" min="0" />
                  <font-awesome-icon @click="plus" :icon="['fas', 'plus']" />
                </div>
              </div>
            </span>
          </div>
        </div>

        <div class="col-12 text-right total-container">
          <div class="row float-right">
              <div class="col-6 text-right text-uppercase">total:</div>
              
              <div class="col-6 text-right price">
                {{ totalPrice }}$
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SimpleVuejsShopProductDetails',
  data() {
    return {
      product: null,
      quantity: 1
    }
  },
  computed: {
    totalPrice() {
      return this.product.price * this.quantity
    }
  },
  methods: {
    plus() {
      this.quantity++
    },
    minus() {
      this.quantity--
    }
  },
  beforeCreate() {
    axios.get('http://localhost:5500/data.json')
      .then(response => {
        this.product = response.data.products.filter(prod => prod.id == this.$route.params.productId)[0];
      });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  color: #000;
}

.SimpleVuejsShopProductDetails {
  text-align: left;
  margin: 70px 0;
}

.price {
  color: #3EBF17;
}

.quantity {
  border: none;
  width: 60px;
  text-align: center;
}

.product-name {
  font-weight: bold;
}

.product-description {
  color: #707070;
}

.product-description-container {
  margin: 10px 0;
}

.price-and-quantity-container {
  margin: 20px 0;
}

.quantity:focus {
  outline: none;
}

.total-container {
  font-size: 30px;
  margin-top: 20px;
  font-weight: bold;
}

.quantity::-webkit-inner-spin-button, 
.quantity::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
}
</style>
