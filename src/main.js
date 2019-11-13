import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome, faSnapchat, faFacebookSquare, faTwitter, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

library.add(faSnapchat, faFacebookSquare, faTwitter, faWhatsapp, faInstagram, faFontAwesome, faPlus, faMinus);

Vue.use(BootstrapVue);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router // raccourci pour router: router
}).$mount('#app')
