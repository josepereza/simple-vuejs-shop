<template>
  <div class="SimpleVuejsShopFooter row">
    <div class="col-4 footer-title">
      Simple VueJS Shop
    </div>

    <ul class="ul-links col-4">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
    
    <ul class="ul-links col-4 socials">
      <li>
        <a href="#">
          <font-awesome-icon :icon="['fab', 'snapchat']" />
        </a>
      </li>
      <li>
        <a href="#">
          <font-awesome-icon :icon="['fab', 'facebook-square']" />
        </a>
      </li>
      <li>
        <a href="#">
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>
      </li>
      <li>
        <a href="#">
          <font-awesome-icon :icon="['fab', 'whatsapp']" />
        </a>
      </li>
      <li>
        <a href="#">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SimpleVuejsShopFooter'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.SimpleVuejsShopFooter {
  background-color: #000;
  padding: 16px 0;
}

.ul-links {
  list-style: none;
  padding: 0;
}

.socials {
  margin: auto 0 auto auto;
}

.socials li {
  margin: 0 10px;
  display: inline-block;
  font-size: 2em;
}

a {
  text-decoration: none;
  color: #fff;
}

a:hover {
  color: #959595;
  transition: 0.4s;
}

.footer-title {
  font-family: Snell;
  color: #fff;
  margin: auto;
  font-size: 2em;
}
</style>
