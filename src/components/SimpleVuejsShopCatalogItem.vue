<template>
  <div class="SimpleVuejsShopCatalogItem">
    <div class="row">
      <img :src="require('../assets/'+image)" width="100%" alt="img-1.jpg">
      <div class="name-and-price col-12">
        <div class="row">
          <span class="float-left col-8 name text-capitalize">{{ name }}</span>
          <span class="float-right col-4 price">{{ price }}$</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  height: 190px;
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
  position: absolute;
  bottom: 0;
  background-color: #fff;
  transition: 0.4s;
}

.price {
  color: #3EBF17;
  text-align: right;
  transition: 0.4s;
}

.name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  transition: 0.4s;
}

.name-and-price:hover .name {
  white-space: unset;
  transition: 0.4s;
}
</style>
