<template>
  <div class="SimpleVuejsShopContact">
    <h1 class="text-capitalize title">{{ pageData.title }}</h1>
    <div class="offset-3 col-6 content">
      <ul>
        <li>
          <a target="_blank" :href="`tel:${pageData.phone}`">{{ pageData.phone }}</a>
        </li>
        <li>
          <a target="_blank" :href="`https://${pageData.website}`">{{ pageData.website }}</a>
        </li>
        <li>
          <a target="_blank" :href="`https://${pageData.facebook}`">{{ pageData.facebook }}</a>
        </li>
        <li>
          <a target="_blank" :href="`https://${pageData.twitter}`">{{ pageData.twitter }}</a>
        </li>
        <li>
          <a target="_blank" :href="`https://${pageData.instagram}`">{{ pageData.instagram }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SimpleVuejsShopContact',
  data() {
    return {
      pageData: null
    }
  },
  created() {
    axios.get('http://localhost:5500/data.json')
      .then(response => this.pageData = response.data.contact);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.SimpleVuejsShopContact {
  margin: 40px 0;
  font-family: snell
}

.content {
  color: #000;
  font-size: 1.5em;
}

ul {
  list-style: none;
  padding: 0;
}

a {
  text-decoration: none;
  color: #000;
}

a:hover {
  color: #959595;
  transition: 0.4s;
}
</style>
