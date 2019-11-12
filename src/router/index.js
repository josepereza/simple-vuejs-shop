import Vue from 'vue'
import Router from 'vue-router'
import SimpleVuejsShopCatalog from '../components/SimpleVuejsShopCatalog'
import SimpleVuejsShopProductDetails from '../components/SimpleVuejsShopProductDetails'
import SimpleVuejsShopAbout from '../components/SimpleVuejsShopAbout'
import SimpleVuejsShopContact from '../components/SimpleVuejsShopContact'

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: SimpleVuejsShopCatalog
		}, {
			path: '/product-details/:productId?',
			name: "productDetails",
			component: SimpleVuejsShopProductDetails
		}, {
			path: '/about',
			name: "about",
			component: SimpleVuejsShopAbout
		}, {
			path: '/contact',
			name: "contact",
			component: SimpleVuejsShopContact
		}
	]
});