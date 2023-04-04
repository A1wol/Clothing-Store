import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/ShopView.vue')
  },
  {
    path: '/item-card/:id',
    name: 'itemCard',
    component: () => import('../views/ItemCardView.vue')
  },
  {
    path: '/shopping-cart',
    name: 'shoppingCart',
    component: () => import('../views/ShoppingCartView.vue')
  },
  {
    path: '/summary',
    name: 'summary',
    component: () => import('../views/SummaryView.vue')
  },
  {
    path: '/user-data',
    name: 'userData',
    component: () => import('../views/UserDataView.vue')
  },
  {
    path: '/delivery',
    name: 'delivery',
    component: () => import('../views/DeliveryView.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
