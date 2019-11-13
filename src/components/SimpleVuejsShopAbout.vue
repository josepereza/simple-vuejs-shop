<template>
  <div class="SimpleVuejsShopAbout">
    <h1 class="text-capitalize title">{{ pageData.title }}</h1>
    <div class="offset-3 col-6 content">
      {{ pageData.content }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SimpleVuejsShopAbout',
  data() {
    return {
      pageData: null
    }
  },
  created() {
    axios.get('http://localhost:5500/data.json')
      .then(response => this.pageData = response.data.about);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.SimpleVuejsShopAbout {
  margin: 40px 0;
  font-family: snell
}

.content {
  color: #000;
  font-size: 1.5em;
}
</style>
