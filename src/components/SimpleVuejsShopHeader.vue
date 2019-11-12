<template>
  <div class="SimpleVuejsShopHeader">
    <h1 class="header-title">Simple VueJS Shop</h1>
    <ul class="header-menu">
      <router-link to="/">
        <li class="header-menu-item" :class="{ 'route-link-active': $route.name == 'home' }">Home</li>
      </router-link>
      <router-link to="/about">
        <li class="header-menu-item" :class="{ 'route-link-active': $route.name == 'about' }">About</li>
      </router-link>
      <router-link to="/contact">
        <li class="header-menu-item" :class="{ 'route-link-active': $route.name == 'contact' }">Contact</li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SimpleVuejsShopHeader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.SimpleVuejsShopHeader {
  color: #fff;
  background-color: #000;
  padding: 16px;
  transform: rotate(-1deg);
  margin-top: 60px;
  box-shadow: #4B4545 0px 0px 6px 0px;
}

.header-title,
.header-menu {
  transform: rotate(1deg);
}

.header-title {
  font-family: Snell
}

.header-menu {
  list-style: none;
  padding: 0;
  display: inline-block;
}

.header-menu-item {
  display: inline-block;
  margin: 0 60px;
}

a {
  text-decoration: none;
  color: #fff;
}

a:hover {
  color: #959595;
  transition: 0.4s;
}

.route-link-active {
  text-decoration: underline;
  font-weight: bold;
}
</style>
